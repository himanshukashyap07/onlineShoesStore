import { authOptions } from "@/app/api/(Auth)/auth/[...nextauth]/option";
import { dbConnect } from "@/db/dbConnect";
import { Address } from "@/models/Address";
import { addAddressSchema } from "@/schemas/addAddressSchema";
import { handleApiError } from "@/utils/apiError";
import { handleApiResponse } from "@/utils/apiResponse";
import { getServerSession } from "next-auth";
import { NextRequest } from "next/server";



export async function POST(req:NextRequest){
    await dbConnect();
    
    const session = await getServerSession(authOptions);
    if (!(session?.user.role==="user")  && !(session?.user.role==="admin") ) {
        return handleApiError(400,"unAuthorized request")
    }

    try {
        const body = await req.json();
        const validateBody =  addAddressSchema.safeParse(body)
        if(!validateBody.success){
            return handleApiError(400,"creadential are not in formate",validateBody.error.message)
        }
        const {fullName,phone,house,street,city,state,postalCode,nearby} = validateBody.data
        const address = await Address.create({
            userId:session.user._id,
            fullName,
            phone,
            house,
            street,
            city,
            state,
            postalCode,
            nearby
        })
        if(!address){
            return handleApiError(401,"Address is not saved")
        }
        return handleApiResponse(201,"Address created succcessfully",address)
    } catch (error) {
        return handleApiError(500,"Internal server Error in creating Address")
    }
}