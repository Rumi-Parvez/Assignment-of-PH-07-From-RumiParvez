import ProductCard from "@/app/components/ProductCard";
import { IProductType } from "@/app/types/productstype";

interface PromisParams {
    params : Promise<{
        cgrid : string;
    }>
}
const page = async ({params} : PromisParams) => {
    const {cgrid} = await params;
    const res = await fetch(`${process.env.PRODUCTS_CATEGORY_URL}${cgrid}`);
    const data:IProductType[] = await res.json();
    const allProducts = data;


    return (
        <>
        <div className="bg-white w-full h-30 mt-10 rounded-2xl flex items-center gap-3 px-8 border border-gray-200">
            <h1 className="text-5xl">{allProducts[1].categoryIcon}</h1>  
            <div>
                <h1 className="font-bold text-3xl">{allProducts[1].categoryNameBn}</h1>
                <p className="text-xs ">{allProducts.length}টি পণ্যের আজকের দাম ও পরিবর্তন</p>
            </div>
        </div>

        <div className="bg-white w-full h-15 mt-5 rounded-2xl flex items-center gap-3 px-8 border border-gray-200">

        </div>

        <h1 className="text-sm mt-6">মোট {allProducts.length}টি পণ্য দেখানো হচ্ছে</h1>
        <div className="grid grid-cols-3 gap-4 my-4 mb-30">
            {
                allProducts.map((products , ind) => <ProductCard key={ind} products={products}></ProductCard>)
            }
        </div>
        </>
    );
};

export default page;