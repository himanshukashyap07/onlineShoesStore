import { z } from "zod";

export const productSchema = z.object({
    productname: z
        .string()
        .min(1, "Product name is required")
        .transform((val) => val.toUpperCase()),

    brand: z
        .string()
        .trim(),

    description: z
        .string()
        .trim(),

    price: z
        .number()
        .min(0, "Price cannot be negative")
        .default(0),

    salePrice: z
        .number()
        .min(0, "Sale price cannot be negative")
        .default(0),

    gender: z.enum(["men", "women", "boy", "girl", "child"]),

    shoeType: z
        .enum(["sport", "casual", "formal"])
        .default("casual"),

    quantity: z
        .number()
        .int("Quantity must be an integer")
        .min(1, "Quantity is required"),

    varient: z
        .array(
            z.object({
                size: z.number().min(1, "Size is required"),
                color: z.string().optional(),
            })
        )
        .optional(),

    imageUrl: z
        .string()
        .url("Invalid image URL")
        .min(1, "Image URL is required"),
});
