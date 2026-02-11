import { dbConnect } from "@/db/dbConnect";
import Product from "@/models/Product";
import { handleApiError } from "@/utils/apiError";
import { handleApiResponse } from "@/utils/apiResponse";
import { isAdmin } from "@/utils/isAdmin";

export async function GET() {
    await dbConnect();
    try {
        const admin = await isAdmin();
        if (!admin) {
            return handleApiError(400, "unAuthorized request")
        }
        const products = await Product.find();
        if (!products) {
            return handleApiError(404, "No product found")
        }
        return handleApiResponse(200, "Products fetch successfull", products)
    } catch (error) {

        return handleApiError(500, "Internal server Error Occure in fetching products")
    }
}