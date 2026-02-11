import { z } from "zod";

export const updateProductSchema = z.object({
    productname: z.string().transform(v => v.toUpperCase()).optional(),
    brand: z.string().trim().optional(),
    description: z.string().trim().optional(),
    price: z.number().min(0).optional(),
    salePrice: z.number().min(0).optional(),
    gender: z.enum(["men", "women", "boy", "girl", "child"]).optional(),
    shoeType: z.enum(["sport", "casual", "formal"]).optional(),
    quantity: z.number().int().min(0).optional(),
    imageUrl: z.string().url().optional(),

    varient: z.array(
        z.object({
            size: z.number(),
            color: z.string().optional(),
        })
    ).optional(),
})
    .refine(
        (data) =>
            data.salePrice === undefined ||
            data.price === undefined ||
            data.salePrice <= data.price,
        {
            message: "Sale price cannot be greater than price",
            path: ["salePrice"],
        }
    );
