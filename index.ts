import { products } from "./src/constants/input.constants";
import { processHierarchy } from "./src/functions/process-hierarchy.function";

const processed = processHierarchy(products);

console.log(processed);
