import Link from "next/link";
import MarqueeText from "react-marquee-text";

import { getproducts } from "../api/products";

const Marquee = async () => {
  const Products = await getproducts();
  return (
    <MarqueeText 
    duration={45}
    direction="right"
    pauseOnHover className="gap-10">
    <div>
      <div className="flex justify-between items-center  ">
        {Products.map((product) => {
        return (
          <>
            {
                product.change.pct !== 0 && <div>
                    <Link href=''>
              <div key={product.id} className="flex gap-3 border border-gray-100  px-5 py-1 text-sm">
                <h1>{product.image}</h1>
                <h1>{product.nameBn}</h1>
                <h1>{product.today} টাকা/কেজি</h1>
                <h1 className={product.change.dir === "up" ? "text-red-600" : "text-green-600"}>{
                    product.change.dir === "up" ? "▲": "▼" 
                    } {String(product.change.pct).replace("-", "")}%</h1>
              </div>
            </Link>
                </div>
            }
          </>
        );
      })}
      </div>
    </div>
    </MarqueeText>
  );
};

export default Marquee;
