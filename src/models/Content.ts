import mongoose, { Document } from "mongoose";
interface IDetail {
    slug: string;
    title: string;
    content: string;
}


export interface IContent extends Document {
    details: IDetail[];
}
const contentSchema = new mongoose.Schema<IContent>({
    details: [
        {
            slug: {
                type: String,
            },
            title: {
                type: String,
            },
            content: {
                type: String,
            }
        }
    ]
}, { timestamps: true });

export const Content = mongoose.models.Content || mongoose.model('Content', contentSchema);
