import { getproducts } from "../api/products";
import ProductCard from "./ProductCard";

const Downprice = async () => {
    const products = await getproducts();

    return (
        <div className="mt-15">
            <div className="flex gap-2">
                <h1 className="text-green-600">▼</h1>
                <h1 className="text-xl font-bold">আজ দাম কমেছে</h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 my-4">
                {
                    products.slice(1, 21).map((products, ind) => products.change.dir === "down" && (
                        <ProductCard key={ind} products={products}></ProductCard>
                    ))
                }
            </div>
        </div>
    );
};

export default Downprice;
