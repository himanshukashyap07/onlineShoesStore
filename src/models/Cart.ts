import mongoose, { Document } from "mongoose";

export interface ICart extends Document {
    userId: mongoose.Types.ObjectId;
    cartItems: mongoose.Types.ObjectId[];
    totalPrice: number;
}

const cartSchema = new mongoose.Schema<ICart>({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    cartItems: [{ type: mongoose.Schema.Types.ObjectId, ref: 'CartItem' }],
    totalPrice: { type: Number, required: true, default: 0 },
}, {
    timestamps: true
});
export const Cart = mongoose.models.Cart || mongoose.model<ICart>('Cart', cartSchema);

