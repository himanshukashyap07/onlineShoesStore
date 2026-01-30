import { dbConnect } from "@/db/dbConnect";
import User from "@/models/User";
import { signupSchema } from "@/schemas/SignUpSchema";
import { handleApiError } from "@/utils/apiError";
import { handleApiResponse } from "@/utils/apiResponse";
import { NextRequest } from "next/server";
import bcrypt from 'bcryptjs';


export async function POST(req:NextRequest){
    await dbConnect();
    const {mobileNumber,email,fullname,password} = await req.json();
    
    //validate data from request
    if(!mobileNumber || !email || !fullname || !password){
        return handleApiError(400,"All fields are required");
    }
    const validatedCredentials = signupSchema.safeParse({mobileNumber,email,fullname,password});
    
    if(!validatedCredentials.success){
        return handleApiError(402, "Invalid credentials", validatedCredentials);
    }
    
    //check if user is already exist

    const exrestingUserWithMobileNumber = await User.findOne({mobileNumber:validatedCredentials.data.mobileNumber})
    if (exrestingUserWithMobileNumber && exrestingUserWithMobileNumber.isEmailVarified) {
        return handleApiError(400,"User with this mobile number already exists");
    }
    const exrestingUserWithEmail = await User.findOne({email:validatedCredentials.data.email})
    if (exrestingUserWithEmail && exrestingUserWithEmail.isEmailVarified) {
        return handleApiError(400,"User with this email already exists");
    }
    const isAdminEmail = validatedCredentials.data.email === process.env.ADMIN_EMAIL;

    try {
        const hasehedPassword = await bcrypt.hash(validatedCredentials.data.password,10);
        const emailVerificationToken = await bcrypt.hash(`${validatedCredentials.data.email}${validatedCredentials.data.mobileNumber}`,10);
        // send verfication email
        // console.log(`verify email token : ${emailVerificationToken} for email :${validatedCredentials.data.email}`);
        

        // await sendVerificationEmail(validatedCredentials.data.email, emailVerificationToken);

        //create user 
        const user = await User.create({
            fullname:validatedCredentials.data.fullname,
            email:validatedCredentials.data.email,
            mobileNumber:validatedCredentials.data.mobileNumber,
            password:hasehedPassword,
            role:isAdminEmail? "admin":"guest",
            verificaionToken:emailVerificationToken
        });
        if(!user){
            return handleApiError(500,"Failed to create user");
        }
        return handleApiResponse(201,"User registered successfully",user);
    } catch (error) {
        return handleApiError(500,"Internal server error",error);
    }
}



