import { dbConnect } from "@/db/dbConnect";
import Product from "@/models/Product";
import { updateProductSchema } from "@/schemas/updateproductSchema";
import { handleApiError } from "@/utils/apiError";
import { handleApiResponse } from "@/utils/apiResponse";
import { isAdmin } from "@/utils/isAdmin";
import { NextRequest } from "next/server";


export async function PATCH(req: NextRequest, context: { params: Promise<{ id: String }> }) {
    await dbConnect();
    try {
        const admin = await isAdmin();
        if (!admin) {
            return handleApiError(400, "unAuthorized request")
        }
        const { id } = await context.params;
        const body = await req.json();
        const validateBody = updateProductSchema.safeParse(body);
        if (!validateBody.success) {
            return handleApiError(400, "Creadential are not valid", validateBody.error.message)
        }

        const updatedProduct = await Product.findByIdAndUpdate(id, { $set: validateBody.data }, { new: true });

        if (!updatedProduct) {
            return handleApiError(401, "product is not updated")
        }
        return handleApiResponse(201, "product updated successfully", updatedProduct)

    } catch (error) {
        return handleApiError(500, "Internal server error occure in updating product")
    }

}