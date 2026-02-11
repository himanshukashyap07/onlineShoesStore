import mongoose,{Document} from "mongoose";

export interface IAddress extends Document{
    userId: mongoose.Types.ObjectId;
    fullName: string;
    phone: number;
    house: string;
    street: string;
    city: string;
    state: string;
    postalCode: number;
    nearby?: string;
}
const AddressSchema = new mongoose.Schema<IAddress>({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    fullName: {type: String, required: true},
    phone: {type: Number, required: true},
    house: {type: String, required: true},
    street: {type: String, required: true},
    city: {type: String, required: true},
    state: {type: String, required: true},
    postalCode: {type: Number, required: true},
    nearby: {type: String}
},{ timestamps: true });

export const Address = mongoose.models.Address || mongoose.model<IAddress>('Address', AddressSchema); 
