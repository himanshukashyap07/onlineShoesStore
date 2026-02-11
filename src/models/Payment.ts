import { Schema, model, Document, models } from 'mongoose';

export interface IPayment extends Document {
    orderId: string;
    userId: string;
    amount: number;
    currency: string;
    gateway: string;
    paytmOrderId?: string;
    paytmTxnId?: string;
    paytmBankTxnId?: string;
    status: 'initiated' | 'pending' | 'success' | 'failed' | 'cancelled';
    paytmStatus?: string;
    responseCode?: string;
    responseMessage?: string;
    checksumHash?: string;
    isVerified: boolean;
    paymentMethod?: string;
    failureReason?: string;
    refundId?: string;
    refundAmount?: number;
    refundStatus?: string;
    refundDate?: Date;
    paytmResponse?: object;
}
const PaymentSchema: Schema = new Schema<IPayment>({
    orderId: { type: String, required: true },
    userId: { type: String, required: true },
    amount: { type: Number, required: true },
    currency: { type: String, required: true },
    gateway: { type: String, required: true },
    paytmOrderId: { type: String },
    paytmTxnId: { type: String },
    paytmBankTxnId: { type: String },
    status: { type: String, enum: ['initiated', 'pending', 'success', 'failed', 'cancelled'], default: 'initiated' },
    paytmStatus: { type: String },
    responseCode: { type: String },
    responseMessage: { type: String },
    checksumHash: { type: String },
    isVerified: { type: Boolean, default: false },
    paymentMethod: { type: String },
    failureReason: { type: String },
    refundId: { type: String },
    refundAmount: { type: Number },
    refundStatus: { type: String },
    refundDate: { type: Date },
    paytmResponse: { type: Schema.Types.Mixed },
}, { timestamps: true });


export const Payment = models.Payment || model<IPayment>('Payment', PaymentSchema);













