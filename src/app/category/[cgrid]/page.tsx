import { Suspense } from "react";
import { notFound } from "next/navigation";

import ProductCard from "@/app/components/ProductCard";
import CategorySort from "@/app/components/Sort";
import CategoryLoad from "@/app/loadings/CategoryLoad";
import { IProductType } from "@/app/types/productstype";

interface PromisParams {
    params: Promise<{
        cgrid: string;
    }>;
    searchParams: Promise<{
        sort?: string;
    }>;
}

const page = async ({ params, searchParams }: PromisParams) => {
    const { cgrid } = await params;
    const { sort } = await searchParams;

    const res = await fetch(`${process.env.PRODUCTS_CATEGORY_URL}${cgrid}`);

    if (!res.ok) {
        notFound();
    }

    const data: IProductType[] = await res.json();

    if (!data || data.length === 0) {
        notFound();
    }

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
            <Suspense fallback={<CategoryLoad />}>
                <div className="bg-white w-full min-h-30 mt-5 sm:mt-7 lg:mt-10 rounded-2xl flex items-center gap-3 px-3 sm:px-5 lg:px-8 py-4 border border-gray-200">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl shrink-0">
                        {allProducts[0]?.categoryIcon}
                    </h1>

                    <div className="min-w-0">
                        <h1 className="font-bold text-xl sm:text-2xl lg:text-3xl break-words">
                            {allProducts[0]?.categoryNameBn}
                        </h1>
                        <p className="text-xs sm:text-sm">
                            {allProducts.length}টি পণ্যের আজকের দাম ও পরিবর্তন
                        </p>
                    </div>
                </div>

                <div className="bg-white w-full min-h-15 mt-4 sm:mt-5 rounded-2xl flex flex-wrap justify-between items-center gap-3 px-3 sm:px-5 lg:px-8 py-3 border border-gray-200">
                    <div></div>
                    <CategorySort />
                </div>

                <h1 className="text-sm mt-5 sm:mt-6">
                    মোট {allProducts.length}টি পণ্য দেখানো হচ্ছে
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 my-4 mb-20 sm:mb-24 lg:mb-30">
                    {sortedProducts.map((products, ind) => (
                        <ProductCard key={ind} products={products} />
                    ))}
                </div>
            </Suspense>
        </>
    );
};

export default page;
