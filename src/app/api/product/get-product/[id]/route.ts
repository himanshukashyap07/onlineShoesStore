import { dbConnect } from "@/db/dbConnect";
import Product from "@/models/Product";
import { handleApiError } from "@/utils/apiError";
import { handleApiResponse } from "@/utils/apiResponse";
import { isAdmin } from "@/utils/isAdmin";





export async function GET(contex: { params: Promise<{ id: String }> }) {
    await dbConnect();

    try {
        const admin = await isAdmin();
        if (!admin) {
            return handleApiError(400, "unAuthorized request")
        }
        const { id } = await contex.params;
        const product = await Product.findById(id);
        if (!product) {
            return handleApiError(404, "No product found")
        }
        return handleApiResponse(200, "Product fatched", product)
    } catch (error) {
        return handleApiError(500, "Internal server Errror in Fatching Product")

    }
}