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
    console.log(productsData);
    return (
    
        <div>
            <h1>{productsData.nameBn}</h1>
        </div>
    );
};

export default page;