import { authOptions } from "@/app/api/(Auth)/auth/[...nextauth]/option";
import { dbConnect } from "@/db/dbConnect";
import { Address } from "@/models/Address";
import { handleApiError } from "@/utils/apiError";
import { handleApiResponse } from "@/utils/apiResponse";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { NextRequest } from "next/server";

export async function GET(){
    await dbConnect();

    try {
        const session = await getServerSession(authOptions);
        if (!(session?.user.role ==="user") && !((session?.user.role ==="admin")) ) {
            return handleApiError(400,"unAuthorized request")
        }
        const address = await Address.aggregate([
            {
                $match: new mongoose.Schema.ObjectId(session.user._id!)
            }
        ])
        if (!address) {
            return handleApiError(404,"adddress not found")
        }
        return handleApiResponse(200,"address fetch successfully",address)
        
        
    } catch (error) {
        
        return handleApiError(500,"internal server error in address fetching")
    }
}