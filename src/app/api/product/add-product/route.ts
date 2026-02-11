import { dbConnect } from "@/db/dbConnect";
import Product from "@/models/Product";
import { productSchema } from "@/schemas/addProductSchema";
import { handleApiError } from "@/utils/apiError";
import { handleApiResponse } from "@/utils/apiResponse";
import { isAdmin } from "@/utils/isAdmin";
import { NextRequest } from "next/server";


export async function POST(req: NextRequest) {
    await dbConnect();
    const body = await req.json();
    const validateBody = productSchema.safeParse(body)
    if (!validateBody.success) {
        return handleApiError(400, "validation error", validateBody.error.message)
    }
    try {
        const admin = await isAdmin();
        if (!admin) {
            return handleApiError(400, "unAuthorized request")
        }
        const { productname, brand, description, price, salePrice, gender, shoeType, quantity, varient, imageUrl } = validateBody.data

        const product = await Product.create({
            productname,
            brand,
            description,
            price,
            salePrice,
            gender,
            shoeType,
            quantity,
            varient,
            imageUrl
        })
        if (!product) {
            return handleApiError(401, "product not created")
        }
        return handleApiResponse(201, "Product created", product)
    } catch (error) {
        return handleApiError(500, "Internal server error in creating Product")
    }
}