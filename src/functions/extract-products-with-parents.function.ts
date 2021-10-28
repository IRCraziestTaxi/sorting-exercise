import { Product } from "../types/product.type";

export function extractProductsWithParents(processed: Product[], unprocessed: Product[]): void {
    const extracted = unprocessed.filter(u =>
        // Do not consider products that have already been processed.
        !processed.some(p => p.id === u.id)
        && (
            (
                // On first iteration, get all top level products.
                !processed.length
                && !u.parent_id
            )
            // Otherwise, get products whose parent has already been processed.
            || processed.some(p => p.id === u.parent_id)
        )
    );

    processed.push(...extracted);
}
