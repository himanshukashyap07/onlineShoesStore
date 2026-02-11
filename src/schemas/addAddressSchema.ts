import { z } from "zod";

export const addAddressSchema = z.object({
    userId: z
        .string(),

    fullName: z
        .string()
        .min(1, "Full name is required"),

    phone: z
        .number()
        .min(1,"Number is required")
        .min(8,"Number is not valid")
        .max(12,"Enter a valid Number"),

    house: z
        .string()
        .min(1, "House is required"),

    street: z
        .string()
        .min(1, "Street is required"),

    city: z
        .string()
        .min(1, "City is required"),

    state: z
        .string()
        .min(1, "State is required"),

    postalCode: z
        .number()
        .min(1,"postal code is required"),

    nearby: z
        .string()
        .optional()
});
