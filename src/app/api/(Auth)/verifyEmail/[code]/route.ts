import { dbConnect } from "@/db/dbConnect";
import User from "@/models/User";
import { handleApiError } from "@/utils/apiError";
import { handleApiResponse } from "@/utils/apiResponse";
import bcrypt from "bcryptjs";
import { NextRequest } from "next/server";
import { z } from "zod";


export async function PATCH(req:NextRequest, context:{params:Promise<{code:string}>}){
    const params = await context.params;
    const verificationCode = params.code;
    const email = req.nextUrl.searchParams.get('email');

    const validateEmail = z.string().email().safeParse(email);
    
    if(!verificationCode || !email){
        return handleApiError(400,"Verification code and email are required");
    }
    if(!validateEmail.success){
        return handleApiError(400,"Invalid email format");
    }
    try {
        await dbConnect();
        const exestingUser = await User.findOne({email:validateEmail.data});
        if(!exestingUser){
            return handleApiError(404,"User not exist");
        }
        if (!exestingUser.verificaionToken && !exestingUser.isEmailVarified) {
            return handleApiError(400,"Verification token expired, please request a new one");
        }
        if (exestingUser.isEmailVarified) {
            return handleApiError(400,"Email is already Verified");
        }
        const isValidCode = await bcrypt.compare(`${exestingUser.email}${exestingUser.mobileNumber}`,verificationCode);
        if(!isValidCode){
            return handleApiError(400,"Invalid verification code");
        }
        exestingUser.isEmailVarified = true;
        exestingUser.verificaionToken = undefined;
        await exestingUser.save();
        return handleApiResponse(200,"Email verified successfully",exestingUser);
    } catch (error) {
        console.error('verifyEmail error:', error);
        return handleApiError(500,"Internal server error");
    }
}   