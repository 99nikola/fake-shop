export interface IProduct {
    id: number,
    title: string,
    price: number,
    category: string,
    description: string,
    image: string
}

export type ProductType = typeof IProduct;
export type ProductKeys = keyof ProductType;	
export type ProductValues = ProductType[ProductKeys];