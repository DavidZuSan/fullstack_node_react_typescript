import { object, string, number, boolean, InferOutput, array } from "valibot";

export const DraftProductSchema = object({
    name: string(),
    price: number()
})

export const ProductSchema = object({
    id: number(),
    name: string(),
    price: number(),
    availability: boolean()  // Si el producto está disponible o no
})

export const ProductsSchema = array(ProductSchema);
export type Product = InferOutput<typeof ProductSchema>;