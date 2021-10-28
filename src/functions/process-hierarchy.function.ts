import { Product } from "../types/product.type";
import { extractProductsWithParents } from "./extract-products-with-parents.function";

/**
 * Processes an input array of products into a proper hierarchical array
 * (in which no child product appears before its parent product).
 * @param unprocessed The input array of products from which to extract a proper hierarchical array
 * (in which no child product appears before its parent product).
 */
export function processHierarchy(unprocessed: Product[]): Product[] {
    const processed: Product[] = [];

    while (processed.length !== unprocessed.length) {
        extractProductsWithParents(processed, unprocessed);
    }

    return processed;
}
