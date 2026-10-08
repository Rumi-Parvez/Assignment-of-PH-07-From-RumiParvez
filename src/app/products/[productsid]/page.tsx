import { IProductType } from "@/app/types/productstype";

interface IpromisParams {
    params : Promise<{
        productsid: string
    }>
}
const page = async({params} : IpromisParams) => {
    const {productsid}= await params;

    const res = await fetch(`${process.env.ALL_PRODUCTS_URL}/${productsid}`)
    const data:IProductType = await res.json(); 
    const productsData = data;
    return (
    
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

            <div className="bg-white w-full p-8 mt-5 rounded-2xl">
                <h1 className="text-xl font-semibold">দামের সারসংক্ষেপ</h1>

                <div>
                    <div>
                        <p>সর্বনিম্ন দাম</p>
                        <h1>৫৯ টাকা</h1>
                        <p>সবচেয়ে কম দামের বাজার</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;