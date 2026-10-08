import { Suspense } from "react";
import { notFound } from "next/navigation";

import ProductLodae from "@/app/loadings/ProductLodae";
import { IProductType } from "@/app/types/productstype";

interface IpromisParams {
    params : Promise<{
        productsid: string
    }>
}
const page = async({params} : IpromisParams) => {
    const {productsid}= await params;

    const res = await fetch(`${process.env.ALL_PRODUCTS_URL}/?slug=${productsid}`)
    if(!res.ok){
      notFound();
    }
    const data:IProductType[] = await res.json(); 

    
    const productsData = data[0];

    if(!productsData || !productsData.markets){
      notFound();
    }

    


    const Lowestprice = Math.min(
        ...productsData.markets.map(market => market.min)
    )
    const Highestprice = Math.max(
        ...productsData.markets.map(market => market.max)
    )

    const averagePrice =
  productsData.markets.reduce(
    (sum, market) => sum + (market.min + market.max) / 2,
    0
  ) / productsData.markets.length;
    return (
    
        <>
        <Suspense fallback={<ProductLodae></ProductLodae>}>

          <div>
            <p className="text-sm flex mt-8 ">{`হোম  >  ${productsData.categoryNameBn}  >  ${productsData.nameBn}`}</p>

            <div className="bg-white w-full h-50 mt-5 rounded-2xl flex justify-between items-center gap-3 px-8  border border-gray-200">
            <div className="flex items-center gap-3  ">
                <h1 className="text-5xl bg-green-50 px-5 py-7 rounded-2xl">{productsData.image}</h1>  
            <div className="space-y-1">
                <h1 className="font-bold text-3xl ">{productsData.nameBn}</h1>
                <p className="text-sm ">প্রতি {productsData.unit} . {productsData.categoryNameBn}</p>
                {
                    productsData.change.dir === "up" ? <p className="text-sm ">গতকালের তুলনায় আজ দাম <span className="font-semibold">বেড়েছে</span> · {productsData.today - productsData.yesterday} টাকা</p> : (productsData.change.pct === 0 ? <p className="text-sm ">গতকালের তুলনায় আজ দাম <span className="font-semibold">কমেওনি / বাড়েওনি</span>।</p> : <p className="text-sm ">গতকালের তুলনায় আজ দাম <span className="font-semibold">কমেছে</span> · {productsData.yesterday - productsData.today} টাকা</p> )
                }
            </div>
            </div>
            <div className="bg-green-50 px-8
             py-5 rounded-xl flex flex-col justify-center items-center">
                <h1 className="text-sm">আজকের দাম</h1>
                <h1 className="text-3xl font-bold">{productsData.today}</h1>
                <h1>টাকা / {productsData.unit}</h1>
                <h1
                className={
                  `${productsData.change.dir === "up"
                    ? "text-red-600"
                    : (productsData.change.pct === 0 ? "" : "text-green-600")} font-semibold`
                }>
                {productsData.change.dir === "up" ? "▲" : (productsData.change.pct === 0 ? "" : "▼")}{" "}
                {String(productsData.change.pct).replace("-", "")}%
              </h1>
            </div>
            </div>

            <div className="bg-white w-full p-8 mt-5 mb-10  rounded-2xl">
                <h1 className="text-xl font-semibold mb-4">দামের সারসংক্ষেপ</h1>

                <div className="flex justify-between items-center gap-8">
                    <div className="border border-gray-200 rounded-2xl px-10 py-5 w-full">
                        <p className="text-sm ">সর্বনিম্ন দাম</p>
                        <h1 className="font-semibold text-green-600"> <span className="text-3xl font-bold">{Lowestprice}</span>  টাকা</h1>
                        <p className="text-sm">সবচেয়ে কম দামের বাজার</p>
                    </div>
                    <div className="border border-gray-200 rounded-2xl px-10 py-5 w-full">
                        <p className="text-sm ">সর্বাধিক দাম</p>
                        <h1 className="font-semibold text-red-600"> <span className="text-3xl font-bold">{Highestprice}</span>  টাকা</h1>
                        <p className="text-sm">সবচেয়ে বেশি দামের বাজার</p>
                    </div>
                    <div className="border border-gray-200 rounded-2xl px-10 py-5 w-full">
                        <p className="text-sm ">গড় দাম</p>
                        <h1 className="font-semibold text-green-600"> <span className="text-3xl font-bold">{Math.round(averagePrice)}</span>  টাকা</h1>
                        <p className="text-sm">প্রতি {productsData.unit}-এর হিসাবে</p>
                    </div>
                </div>
                
                <h1 className="text-xl my-4 font-semibold">বাজারভিত্তিক আজকের দাম</h1>
                <div className="overflow-hidden rounded-xl border border-gray-300">
  <table className="w-full text-sm">
    <thead className="bg-gray-50">
      <tr className="border-b border-gray-200">
        <th className="text-left px-4 py-3 font-medium">বাজার</th>
        <th className="text-left px-4 py-3 font-medium">বিভাগ</th>
        <th className="text-right px-4 py-3 font-medium">সর্বনিম্ন</th>
        <th className="text-right px-4 py-3 font-medium">সর্বাধিক</th>
        <th className="text-right px-4 py-3 font-medium">গড়</th>
      </tr>
    </thead>

    <tbody>
      {productsData.markets.map((market, ind) => {
        const marketAverage = Math.round(
          (market.min + market.max) / 2
        );

        return (
          <tr
            key={ind}
            className="border-b  border-gray-500 last:border-b-0"
          >
            <td className="px-4 py-3">
              {market.market}
            </td>

            <td className="px-4 py-3">
              {market.division}
            </td>

            <td className="px-4 py-3 text-right">
              {market.min} টাকা
            </td>

            <td className="px-4 py-3 text-right">
              {market.max} টাকা
            </td>

            <td className="px-4 py-3 text-right font-medium">
              {marketAverage} টাকা
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
</div>
            </div>

            
        </div>
        </Suspense>
        </>
    );
};

export default page;