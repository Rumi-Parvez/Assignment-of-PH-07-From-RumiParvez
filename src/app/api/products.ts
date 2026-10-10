import { IProductType } from "../types/productstype";

export const getproducts = async (): Promise<IProductType[]> => {
  const res = await fetch(`${process.env.ALL_PRODUCTS_URL}`);
  const data = await res.json();
  return data;
};