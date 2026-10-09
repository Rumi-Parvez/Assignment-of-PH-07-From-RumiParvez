import { Suspense } from "react";
import { notFound } from "next/navigation";

import ProductLodae from "@/app/loadings/ProductLodae";
import { IProductType } from "@/app/types/productstype";

interface IpromisParams {
    params: Promise<{
        productsid: string;
    }>;
}

const page = async ({ params }: IpromisParams) => {
    const { productsid } = await params;

    const res = await fetch(
        `${process.env.ALL_PRODUCTS_URL}/?slug=${productsid}`
    );

    if (!res.ok) {
        notFound();
    }

    const data: IProductType[] = await res.json();

    const productsData = data[0];

    if (!productsData || !productsData.markets) {
        notFound();
    }

    const Lowestprice = Math.min(
        ...productsData.markets.map((market) => market.min)
    );

    const Highestprice = Math.max(
        ...productsData.markets.map((market) => market.max)
    );

    const averagePrice =
        productsData.markets.reduce(
            (sum, market) => sum + (market.min + market.max) / 2,
            0
        ) / productsData.markets.length;

    return (
        <>
            <Suspense fallback={<ProductLodae />}>
                <div>
                    <p className="text-sm flex flex-wrap mt-5 sm:mt-6 lg:mt-8">
                        {`হোম  >  ${productsData.categoryNameBn}  >  ${productsData.nameBn}`}
                    </p>

                   
                    <div className="bg-white w-full min-h-50 lg:h-50 mt-4 sm:mt-5 rounded-2xl flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 sm:gap-3 px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-0 border border-gray-200">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 min-w-0">
                            <h1 className="text-4xl sm:text-5xl shrink-0 bg-green-50 px-4 sm:px-5 py-5 sm:py-7 rounded-2xl">
                                {productsData.image}
                            </h1>

                            <div className="space-y-1 min-w-0">
                                <h1 className="font-bold text-2xl sm:text-2xl lg:text-3xl break-words">
                                    {productsData.nameBn}
                                </h1>

                                <p className="text-sm">
                                    প্রতি {productsData.unit} . {productsData.categoryNameBn}
                                </p>

                                {productsData.change.dir === "up" ? (
                                    <p className="text-sm">
                                        গতকালের তুলনায় আজ দাম{" "}
                                        <span className="font-semibold">
                                            বেড়েছে
                                        </span>{" "}
                                        · {productsData.today - productsData.yesterday} টাকা
                                    </p>
                                ) : productsData.change.pct === 0 ? (
                                    <p className="text-sm">
                                        গতকালের তুলনায় আজ দাম{" "}
                                        <span className="font-semibold">
                                            কমেওনি / বাড়েওনি
                                        </span>
                                        ।
                                    </p>
                                ) : (
                                    <p className="text-sm">
                                        গতকালের তুলনায় আজ দাম{" "}
                                        <span className="font-semibold">
                                            কমেছে
                                        </span>{" "}
                                        · {productsData.yesterday - productsData.today} টাকা
                                    </p>
                                )}
                            </div>
                        </div>

                        
                        <div className="bg-green-50 w-full sm:w-auto shrink-0 px-5 sm:px-8 py-4 sm:py-5 rounded-xl flex flex-col justify-center items-center">
                            <h1 className="text-sm">আজকের দাম</h1>

                            <h1 className="text-3xl font-bold">
                                {productsData.today}
                            </h1>

                            <h1>টাকা / {productsData.unit}</h1>

                            <h1
                                className={`${
                                    productsData.change.dir === "up"
                                        ? "text-red-600"
                                        : productsData.change.pct === 0
                                          ? ""
                                          : "text-green-600"
                                } font-semibold`}
                            >
                                {productsData.change.dir === "up"
                                    ? "▲"
                                    : productsData.change.pct === 0
                                      ? ""
                                      : "▼"}{" "}
                                {String(productsData.change.pct).replace("-", "")}%
                            </h1>
                        </div>
                    </div>

                    
                    <div className="bg-white w-full p-4 sm:p-6 lg:p-8 mt-4 sm:mt-5 mb-8 sm:mb-10 rounded-2xl">
                        <h1 className="text-xl font-semibold mb-4">
                            দামের সারসংক্ষেপ
                        </h1>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-8">
                           
                            <div className="border border-gray-200 rounded-2xl px-5 sm:px-6 lg:px-10 py-5 w-full min-w-0">
                                <p className="text-sm">সর্বনিম্ন দাম</p>

                                <h1 className="font-semibold text-green-600">
                                    <span className="text-3xl font-bold">
                                        {Lowestprice}
                                    </span>{" "}
                                    টাকা
                                </h1>

                                <p className="text-sm">
                                    সবচেয়ে কম দামের বাজার
                                </p>
                            </div>

                            
                            <div className="border border-gray-200 rounded-2xl px-5 sm:px-6 lg:px-10 py-5 w-full min-w-0">
                                <p className="text-sm">সর্বাধিক দাম</p>

                                <h1 className="font-semibold text-red-600">
                                    <span className="text-3xl font-bold">
                                        {Highestprice}
                                    </span>{" "}
                                    টাকা
                                </h1>

                                <p className="text-sm">
                                    সবচেয়ে বেশি দামের বাজার
                                </p>
                            </div>

                           



                            <div className="border border-gray-200 rounded-2xl px-5 sm:px-6 lg:px-10 py-5 w-full min-w-0 sm:col-span-2 lg:col-span-1">
                                <p className="text-sm">গড় দাম</p>

                                <h1 className="font-semibold text-green-600">
                                    <span className="text-3xl font-bold">
                                        {Math.round(averagePrice)}
                                    </span>{" "}
                                    টাকা
                                </h1>

                                <p className="text-sm">
                                    প্রতি {productsData.unit}-এর হিসাবে
                                </p>
                            </div>
                        </div>

                        
                        <h1 className="text-lg sm:text-xl my-4 font-semibold">
                            বাজারভিত্তিক আজকের দাম
                        </h1>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-3 sm:gap-4">
                            {productsData.markets.map((market, ind) => {
                                const marketAverage = Math.round(
                                    (market.min + market.max) / 2
                                );

                                return (
                                    <div
                                        key={ind}
                                        className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5 space-y-3"
                                    >
                                        <div className="border-b border-gray-100 pb-3">
                                            <h2 className="font-semibold text-base sm:text-lg">
                                                {market.market}
                                            </h2>

                                            <p className="text-sm text-gray-500 mt-1">
                                                {market.division}
                                            </p>
                                        </div>

                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="bg-green-50 rounded-xl p-3">
                                                <p className="text-xs sm:text-sm text-gray-600">
                                                    সর্বনিম্ন দাম
                                                </p>

                                                <p className="text-lg sm:text-xl font-bold text-green-700">
                                                    {market.min} টাকা
                                                </p>
                                            </div>

                                            <div className="bg-red-50 rounded-xl p-3">
                                                <p className="text-xs sm:text-sm text-gray-600">
                                                    সর্বাধিক দাম
                                                </p>

                                                <p className="text-lg sm:text-xl font-bold text-red-700">
                                                    {market.max} টাকা
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex justify-between items-center gap-2 border-t border-gray-100 pt-3">
                                            <span className="text-sm text-gray-600">
                                                গড় দাম
                                            </span>

                                            <span className="font-semibold text-base sm:text-lg">
                                                {marketAverage} টাকা
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                      
                        <div className="hidden lg:block overflow-x-auto rounded-xl border border-gray-300">
                            <table className="w-full text-sm">
                                <thead className="bg-gray-50">
                                    <tr className="border-b border-gray-200">
                                        <th className="text-left px-4 py-3 font-medium">
                                            বাজার
                                        </th>

                                        <th className="text-left px-4 py-3 font-medium">
                                            বিভাগ
                                        </th>

                                        <th className="text-right px-4 py-3 font-medium">
                                            সর্বনিম্ন
                                        </th>

                                        <th className="text-right px-4 py-3 font-medium">
                                            সর্বাধিক
                                        </th>

                                        <th className="text-right px-4 py-3 font-medium">
                                            গড়
                                        </th>
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
                                                className="border-b border-gray-500 last:border-b-0"
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
