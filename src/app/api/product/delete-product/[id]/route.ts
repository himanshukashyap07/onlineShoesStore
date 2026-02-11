import { dbConnect } from "@/db/dbConnect";
import Product from "@/models/Product";
import { handleApiError } from "@/utils/apiError";
import { handleApiResponse } from "@/utils/apiResponse";
import { isAdmin } from "@/utils/isAdmin";


export async function DELETE(context: { params: Promise<{ id: String }> }) {
    await dbConnect();
    try {
        const admin = await isAdmin();
        if (!admin) {
            return handleApiError(400, "unAuthorized request")
        }
        const { id } = await context.params;
        const deleteProduct = await Product.findByIdAndDelete(id);
        if (!deleteProduct) {
            return handleApiError(400, "Error occur in deleting product")
        }
        return handleApiResponse(200, "Product deleted successfully", deleteProduct)
    } catch (error) {
        return handleApiError(500, "Internal server error in deleting Product")
    }
}