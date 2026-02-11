import { dbConnect } from "@/db/dbConnect"
import User from "@/models/User";
import { signinSchema } from "@/schemas/SignInSchema";
import bcrypt from "bcryptjs";
import CredentialsProvider from 'next-auth/providers/credentials'
import type { AuthOptions, SessionStrategy } from "next-auth";


export const authOptions: AuthOptions = {
    providers:[
        CredentialsProvider({
            id:"credentials",
            name:"Credentials",
            credentials:{
                email:{label:"Enter your email", type:"text" },
                password:{label:"Enter your password", type:"password" }
            },
            async authorize(credentials:any):Promise<any>{
                await dbConnect();
                try {
                    // Basic presence check
                    if (!credentials?.email || !credentials?.password) {
                        // returning null tells NextAuth that authentication failed
                        return null;
                    }

                    // Validate email format (schema expects { email: string })
                    const validateEmail = signinSchema.safeParse({ email: credentials.email });
                    if (!validateEmail.success) {
                        return null;
                    }
                    const email = validateEmail.data.email;

                    const user = await User.findOne({ email });
                    if (!user) {
                        return null;
                    }

                    // Compare password
                    const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
                    if (!isPasswordCorrect) {
                        return null;
                    }

                    // Return plain object to avoid Mongoose document serialization issues
                    return {
                        _id: user._id?.toString(),
                        fullname: user.fullname,
                        fullName: user.fullname,
                        mobileNumber: user.mobileNumber,
                        email: user.email,
                        accountStatus: user.accountStatus,
                        role: user.role,
                    };

                } catch (error) {
                    // Log and return null so NextAuth treats this as an auth failure
                    return null;
                }
            }
        })
    ],
    callbacks:{
        async jwt({ token, user }:any) {
            // attach useful properties to the JWT token when user signs in
            if (user) {
                token._id = user._id?.toString() || "";
                // normalize to camelCase fullName for consistency
                token.fullName = user.fullName || user.fullname || "";
                token.mobileNumber = user.mobileNumber ?? "";
                token.email = user.email ?? "";
                token.accountStatus = user.accountStatus ?? "";
                token.role = user.role ?? "";
            }
            return token;
        },
        async session({ session, token }:any) {
            // Debug token/session
            // copy token properties into session.user safely
            if (token) {
                session.user = {
                    ...session.user,
                    _id: token._id,
                    fullName: token.fullName,
                    mobileNumber: token.mobileNumber,
                    role: token.role,
                    email: token.email,
                    accountStatus: token.accountStatus,
                };
            }
            return session;
        }
    },
    pages:{
        signIn:'/login',
        error:'/login'
    },
    session:{
        strategy: "jwt" as SessionStrategy
    },
    secret:process.env.NEXTAUTHSECRET
}