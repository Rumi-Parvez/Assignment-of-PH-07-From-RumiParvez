import { getproducts } from "../api/products";
import ProductCard from "./ProductCard";

const Upprice = async () => {
    const products = await getproducts();

    return (
        <div className="mt-10">
            <div className="flex gap-2">
                <h1 className="text-red-600">▲</h1>
                <h1 className="text-xl font-bold">আজ দাম বেড়েছে</h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 my-4">
                {
                    products.slice(10, 21).map((products, ind) => products.change.dir === "up" && (
                        <ProductCard key={ind} products={products}></ProductCard>
                    ))
                }
            </div>
        </div>
    );
};

export default Upprice;
