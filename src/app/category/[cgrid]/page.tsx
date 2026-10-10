import { Suspense } from "react";
import { notFound } from "next/navigation";

import CategoryProducts from "@/app/components/CategoryProducts";
import CategoryLoad from "@/app/loadings/CategoryLoad";
import { IProductType } from "@/app/types/productstype";

interface PromisParams {
  params: Promise<{
    cgrid: string;
  }>;
}

const Page = async ({ params }: PromisParams) => {
  const { cgrid } = await params;

  const res = await fetch(
    `${process.env.PRODUCTS_CATEGORY_URL}${cgrid}`
  );

  if (!res.ok) {
    notFound();
  }

  const data: IProductType[] = await res.json();

  if (!data || data.length === 0) {
    notFound();
  }

  const allProducts = data;

  return (
    <>
      <Suspense fallback={<CategoryLoad />}>
        <div className="bg-white w-full min-h-30 mt-5 sm:mt-7 lg:mt-10 rounded-2xl flex items-center gap-3 px-3 sm:px-5 lg:px-8 py-4 border border-gray-200">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl shrink-0">
            {allProducts[0]?.categoryIcon}
          </h1>

          <div className="min-w-0">
            <h1 className="font-bold text-xl sm:text-2xl lg:text-3xl wrap-break-words">
              {allProducts[0]?.categoryNameBn}
            </h1>

            <p className="text-xs sm:text-sm">
              {allProducts.length}টি পণ্যের আজকের দাম ও পরিবর্তন
            </p>
          </div>
        </div>

        <CategoryProducts allProducts={allProducts} />
      </Suspense>
    </>
  );
};

export default Page;