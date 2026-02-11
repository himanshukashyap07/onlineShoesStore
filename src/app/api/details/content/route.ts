import { dbConnect } from "@/db/dbConnect";
import { Content } from "@/models/Content";
import { handleApiError } from "@/utils/apiError";
import { handleApiResponse } from "@/utils/apiResponse";
import { isAdmin } from "@/utils/isAdmin";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    const { details } = await req.json();
    await dbConnect();
    try {
        const admin = await isAdmin();
        if (!admin) {
            return handleApiError(400,"unAuthorized request")
        }
        const content = await Content.create({
            details
        });
        if (!content) {
            return handleApiError(400, "Failed to create content");
        }
        return handleApiResponse(201, "Content created successfully", content);
    } catch (error) {
        return handleApiError(500, "Internal Server Error");
    }
}


export async function GET() {
    await dbConnect();
    try {
        const content = await Content.findOne();
        if (!content) {
            return handleApiError(404, "Content not found");
        }
        return handleApiResponse(200, "Content fetched successfully", content);
    } catch (error) {
        return handleApiError(500, "Internal Server Error");
    }
}

export async function PUT(req: NextRequest) {
    const { slug, content } = await req.json();
    
    await dbConnect();
    try {
        console.log("valure",slug,"+",content);
        const safeContent =
            typeof content === "string" ? content : JSON.stringify(content);
        const newcontent = await Content.findOneAndUpdate(
            { "details.slug": slug }, 
            { $set: { "details.$.content": safeContent } },
            {
                new: true, 
            }

        );

        if (!newcontent) {
            return handleApiError(404, "Content not found");
        }
        return handleApiResponse(200, "Content updated successfully", newcontent);
    } catch (error) {
        console.log(error);

        return handleApiError(500, "Internal Server Error");
    }
}
