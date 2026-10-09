import { getproducts } from "../api/products";
import ProductCard from "./ProductCard";

const Allproducts = async () => {
    const products = await getproducts();

    return (
        <div className="mt-15" id="সব-পণ্য">
            <div>
                <h1 className="text-xl font-bold">সব পণ্য</h1>
                <p>মোট {products.length} টি পণ্য দেখানো হচ্ছে</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 my-4">
                {
                    products.map((products, ind) => (
                        <ProductCard key={ind} products={products}></ProductCard>
                    ))
                }
            </div>
        </div>
    );
};

export default Allproducts;
