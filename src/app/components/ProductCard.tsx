import Link from "next/link";

import { IProductType } from "../types/productstype";

const ProductCard = ({ products }: { products: IProductType }) => {
  return (
    <div>
      <Link href={`/products/${products.slug}`}>
        <div className="bg-white py-3 sm:py-4 lg:py-5 px-3 sm:px-4 lg:px-5 rounded-2xl border border-gray-200 hover:border-green-600">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <h1 className="text-2xl sm:text-3xl bg-green-50 px-2 py-2 rounded-xl shrink-0">
              {products.image}
            </h1>
            <div className="min-w-0">
              <h1 className="font-bold break-words">
                {products.nameBn}
              </h1>
              <p className="text-xs">প্রতি {products.unit}</p>
            </div>
          </div>

          <div className="mt-4 sm:mt-5 flex justify-between items-center gap-2">
            <div className="min-w-0">
              <p className="text-xs">আজকের দাম</p>
              <h1 className="text-sm">
                <span className="text-lg sm:text-xl font-bold">
                  {products.today}
                </span>{" "}
                টাকা
              </h1>
            </div>

            <div
              className={
                products.change.pct === 0
                  ? "bg-gray-100 text-xs px-2 sm:px-4 py-1 rounded-xl shrink-0"
                  : "bg-green-50 text-xs px-2 sm:px-4 py-1 rounded-xl shrink-0"
              }
            >
              <h1
                className={`${
                  products.change.dir === "up"
                    ? "text-red-600"
                    : products.change.pct === 0
                    ? ""
                    : "text-green-600"
                } font-semibold`}
              >
                {products.change.dir === "up"
                  ? "▲"
                  : products.change.pct === 0
                  ? ""
                  : "▼"}{" "}
                {String(products.change.pct).replace("-", "")}%
              </h1>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
