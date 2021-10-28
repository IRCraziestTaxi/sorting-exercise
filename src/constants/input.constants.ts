import { Product } from "../types/product.type";

export const products: Product[] = [
    {
        id: 1,
        name: "Accessories",
        parent_id: 20
    },
    {
        id: 57,
        name: "Watches",
        parent_id: 1
    },
    {
        id: 20,
        name: "Men",
        parent_id: null
    }
];
