import { IProduct } from "./Products";

export interface ICartUser {
    id: number,
    userId: number,
    date: any,
    products: IProduct[]
}
