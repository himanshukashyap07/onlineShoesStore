import mongoose,{Document} from "mongoose";

export interface ICartItem extends Document {
    cartId: mongoose.Types.ObjectId;
    productId: mongoose.Types.ObjectId;
    quantity: number;
    price: number;
}

const CartItemSchema = new mongoose.Schema<ICartItem>({
    cartId: { type: mongoose.Schema.Types.ObjectId, ref: 'Cart', required: true },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
}, {
    timestamps: true
});
export const CartItem = mongoose.models.CartItem || mongoose.model<ICartItem>('CartItem', CartItemSchema);