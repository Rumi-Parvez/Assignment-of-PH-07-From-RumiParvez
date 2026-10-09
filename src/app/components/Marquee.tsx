import Link from "next/link";
import MarqueeText from "react-marquee-text";

import { getproducts } from "../api/products";

const Marquee = async () => {
  const Products = await getproducts();

  return (
    <MarqueeText duration={45} direction="right" pauseOnHover className="gap-10">
      <div >
        <div className="flex justify-between items-center">
          {Products.map(
            (product) =>
              product.change.pct !== 0 && (
                <div key={product.id}>
                  <Link href={`/products/${product.slug}`}>
                    <div className="flex gap-3 border border-gray-100 px-5 py-1 text-sm">
                      <h1 >{product.image}</h1>
                      <h1 className="text-black">{product.nameBn}</h1>
                      <h1 className="text-black">{product.today} টাকা/{product.unit}</h1>
                      <h1
                        className={
                          product.change.dir === "up"
                            ? "text-red-600"
                            : "text-green-600"
                        }>
                        {product.change.dir === "up" ? "▲" : "▼"}{" "}
                        {String(product.change.pct).replace("-", "")}%
                      </h1>
                    </div>
                  </Link>
                </div>
              )
          )}
        </div>
      </div>
    </MarqueeText>
  );
};

export default Marquee;
