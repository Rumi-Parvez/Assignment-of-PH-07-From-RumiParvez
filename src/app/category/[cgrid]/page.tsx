import { Suspense } from "react";
import { notFound } from "next/navigation";

import ProductCard from "@/app/components/ProductCard";
import CategorySort from "@/app/components/Sort";
import CategoryLoad from "@/app/loadings/CategoryLoad";
import { IProductType } from "@/app/types/productstype";

interface PromisParams {
    params : Promise<{
        cgrid : string;
    }>
    searchParams: Promise<{
    sort?: string;
  }>;
}
const page = async ({params , searchParams} : PromisParams) => {
    const {cgrid} = await params;
    const {sort} = await searchParams;
    const res = await fetch(`${process.env.PRODUCTS_CATEGORY_URL}${cgrid}`);
    
    const data:IProductType[] = await res.json();
    const allProducts = data;

    
    const sortedProducts = [...allProducts];

if (sort === "low-high") {
  sortedProducts.sort((a, b) => a.today - b.today);
}

if (sort === "high-low") {
  sortedProducts.sort((a, b) => b.today - a.today);
}


    return (
        <>
        <Suspense fallback={<CategoryLoad></CategoryLoad>}>
            <div className="bg-white w-full h-30 mt-10 rounded-2xl flex items-center gap-3 px-8 border border-gray-200">
            <h1 className="text-5xl">{allProducts[1]?.categoryIcon}</h1>  
            <div>
                <h1 className="font-bold text-3xl">{allProducts[1]?.categoryNameBn}</h1>
                <p className="text-xs ">{allProducts.length}টি পণ্যের আজকের দাম ও পরিবর্তন</p>
            </div>
        </div>

        <div className="bg-white w-full h-15 mt-5 rounded-2xl flex justify-between items-center gap-3 px-8 border border-gray-200">
            <div></div>
            <CategorySort></CategorySort>
        </div>

        <h1 className="text-sm mt-6">মোট {allProducts.length}টি পণ্য দেখানো হচ্ছে</h1>
        <div className="grid grid-cols-3 gap-4 my-4 mb-30">
            
                {
                sortedProducts.map((products , ind) => <ProductCard key={ind} products={products}></ProductCard>)
            }
           
        </div>
        </Suspense>
        </>
    );
};

export default page;