import { dbConnect } from "@/db/dbConnect"
import User from "@/models/User";
import { signinSchema } from "@/schemas/SignInSchema";
import  { handleApiError } from "@/utils/apiError";
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
                    if (!credentials.email || credentials.password) {
                        return handleApiError(400,"credentials are required")
                    }
                    const validateEmail = signinSchema.safeParse(credentials.email);
                    if (!validateEmail.success) {
                        return handleApiError(400,"Email is not in properforamte")
                    }
                    const user = await User.findOne({email:validateEmail.data.email})
                    if (!user) {
                        return handleApiError(404,"user not found")
                    }
                    const isPasswordCorrect = await bcrypt.compare(credentials.passwprd,user.password)
                    if (!isPasswordCorrect) {
                        return handleApiError(400,"Incorrect Password")
                    }
                    return user;

                } catch (error) {
                    return handleApiError(500,"internal server error",error)
                }
            }
        })
    ],
    callbacks:{
        async jwt({ token, user }:any) {
            // give data to token form user
            if (user) {
                token._id = user._id?.toString() || "" // user will not give us data esily so we created a file in types folder next-auth.d.ts
                token.fullname = user.fullname || ""
                token.mobileNumber = user.mobileNumber || "";
                token.email = user.email || "";
                token.accountStatus = user.accountStatus || "";
                token.role = user.role || "";
            }
            return token
        },
        async session({ session, token }:any) {
            if (token) {
                session.user = {
                    id: token._id,
                    fullName: token.fullName,
                    mobileNumber: token.mobileNumber,
                    role: token.role,
                    email:token.email,
                    accountStatus :token.accountStatus,
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