import Image from "next/image";
import Link from "next/link";

import { IProductType } from "../types/productstype";

const ProductCard = ({ products }: { products: IProductType }) => {
  return (
    <div>
      <Link href="/">
        <div className="bg-white py-5 px-5 rounded-2xl border border-gray-200 hover:border-green-600 ">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl bg-green-50 px-2 py-2 rounded-xl">
              {products.image}
            </h1>
            <div>
              <h1 className="font-bold "> {products.nameBn} </h1>
              <p className="text-xs ">প্রতি {products.unit}</p>
            </div>
          </div>

          <div className="mt-5 flex justify-between items-center ">
            <div>
              <p className="text-xs ">আজকের দাম</p>
              <h1 className="text-sm">
                <span className="text-xl font-bold">{products.today}</span> টাকা
              </h1>
            </div>
            <div className={products.change.pct === 0 ? " bg-gray-100 text-xs px-4 py-1 rounded-xl" : "bg-green-50 text-xs px-4 py-1 rounded-xl"} >
              <h1
                className={
                  `${products.change.dir === "up"
                    ? "text-red-600"
                    : (products.change.pct === 0 ? "" : "text-green-600")} font-semibold`
                }>
                {products.change.dir === "up" ? "▲" : (products.change.pct === 0 ? "" : "▼")}{" "}
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
