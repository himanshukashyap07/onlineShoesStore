import mongoose,{Document,Schema} from "mongoose";

export interface IProduct extends Document{
    productname:string;
    brand:string;
    description:string;
    price:number;
    salePrice:number;
    gender:string;
    shoeType:string;
    quantity:number;
    varient:object;
    imageUrl:string;
}

const ProductSchema = new Schema<IProduct>({
    productname:{
        type:String,
        uppercase:true,
        required:true
    },
    brand:{
        type:String,
        trim:true
    },
    description:{
        type:String,
        trim:true
    },
    price:{
        type:Number,
        default:0
    },
    salePrice:{
        type:Number,
        default:0
    },
    gender:{
        type:String,
        enum:["men","women","boy","girl","child"]
    },
    shoeType:{
        type:String,
        enum:["sport","casual","formal"],
        default:"casual"
    },
    quantity:{
        type:Number,
        required:true
    },
    varient:[
        {
            size:{
                type:Number,
                required:true
            },
            color:{
                type:String
            }
        }
    ],
    imageUrl:{
        type:String,
        required:true,
        trim:true
    }
},{timestamps:true});


const Product = mongoose.models.Product || mongoose.model("Product",ProductSchema);

export default Product;