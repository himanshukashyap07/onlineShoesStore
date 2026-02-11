import mongoose from "mongoose";


export interface IOrderItem extends Document {
    orderId: mongoose.Types.ObjectId;
    productId: mongoose.Types.ObjectId;
    quantity: number;
    price: number;
    totalPrice: number;
}
const orderItemSchema = new mongoose.Schema<IOrderItem>({
    orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }, 
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
}, { timestamps: true })


export const OrderItem = mongoose.models.OrderItem || mongoose.model('OrderItem', orderItemSchema)