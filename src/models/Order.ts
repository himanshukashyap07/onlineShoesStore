import mongoose from "mongoose"

export interface IOrder extends Document {
    userId: mongoose.Types.ObjectId;
    addressId: mongoose.Types.ObjectId;
    paymentId: mongoose.Types.ObjectId;
    orderList: mongoose.Types.ObjectId[];
    totalAmount: number;
    discountAmount?: number;
    deliveryCharge?: number;
    finalAmount: number;
    paymentStatus?: string;
    orderStatus?: string;
}

const orderSchema = new mongoose.Schema<IOrder>({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    addressId: { type: mongoose.Schema.Types.ObjectId, ref: 'Address', required: true },
    paymentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Payment', required: true },
    orderList: [{ type: mongoose.Schema.Types.ObjectId, ref: 'OrderItem', required: true }],
    totalAmount: { type: Number, required: true },
    discountAmount: { type: Number, default: 0 },
    deliveryCharge: { type: Number, default: 0 },
    finalAmount: { type: Number, required: true },
    paymentStatus: { type: String, enum: ['Pending', 'Completed', 'Failed'], default: 'Pending' },
    orderStatus: { type: String, enum: ['Processing', 'Shipped', 'Delivered', 'Cancelled'], default: 'Processing' },
}, { timestamps: true })

export const Order = mongoose.models.Order || mongoose.model('Order', orderSchema)
