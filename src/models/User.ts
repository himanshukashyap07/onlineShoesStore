import mongoose,{Document, Schema} from "mongoose";

export interface IUser extends Document{
    fullname:string;
    mobileNumber:number;
    email:string;
    role:string;
    password:string;
    accountStatus:string;
    createdAt:Date;
    isEmailVarified:boolean;
    verificaionToken?:string;
}

const UserSchema:Schema = new Schema<IUser>({
    fullname:{
        type:String,
        required:[true,"fullname is required"],
        trim:true
    },
    mobileNumber:{
        type:Number,
        required:[true,"mobile number is required"],
        minLength:8,
        maxLength:12,
        trim:true
    },
    email:{
        type:String,
        trim:true,
        required:[true,"email is required"],
        lowercase:true,
        index:true
    },
    role:{
        type:String,
        enum:["admin","user","guest"],
        default:"guest"
    },
    accountStatus:{
        type:String,
        enum:["active","block"],
        default:"active"
    },
    password:{
        type:String,
        trim:true,
        required:true
    },
    isEmailVarified:{
        type:Boolean,
        default:false
    },
    verificaionToken:{
        type:String,
        expires:3600*24*15 //15days
    }
},{timestamps:true})


const User = mongoose.models.User || mongoose.model<IUser>("User",UserSchema)

export default User