import { z } from "zod";

export const restaurantFormSchema = z.object({
  restaurantName: z
    .string()
    .nonempty({ message: "Restaurant name is required" }),
  city: z.string().nonempty({ message: "City is required" }),
  country: z.string().nonempty({ message: "Country is required" }),
  deliveryTime: z
    .number()
    .min(0, { message: "Delivery time cannot be negative" }),
  cuisines: z.array(z.string()), // Fixed typo from `z.stirng()` to `z.string()`
  imageFile: z
    .instanceof(File)
    .optional() // Marking it optional
    .refine((file) => file?.size !== 0, { message: "Image file is required" }),
});

// Infers the TypeScript type from the Zod schema
export type RestaurantFormSchema = z.infer<typeof restaurantFormSchema>;
