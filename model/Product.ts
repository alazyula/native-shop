import ProductModels from "./ProductModels"
type Product = {
    id: string;
    name: string;
    category: string;
    description: string;
    models: ProductModels[];
}
export default Product;