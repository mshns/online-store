import { ReactNode } from "react";

export interface IProductItem {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface ISortContext {
  sort: SortingProps;
  setSort: React.Dispatch<React.SetStateAction<SortingProps>>;
}

export interface ICartItem {
  item: IProductItem;
  amount: number;
}

export interface ICartListContext {
  cartList: ICartItem[];
  setCartList: (cartList: ICartItem[]) => void;
}

export interface IProps {
  items: IProductItem[];
  setItems: (items: IProductItem[]) => void;
}

export interface IProductsList {
  items: IProductItem[];
}

export interface ICategory {
  category: string;
  items: IProductItem[];
}

export interface IPayment {
  paymentVisible: boolean;
  setPaymentVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ITableItem {
  item: IProductItem;
  tableState: boolean;
}

export interface IBlockItem {
  items: IProductItem[];
  tableState: boolean;
}

export interface ISortingHeader {
  items: IProductItem[];
  tableState: boolean;
  setTableState: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IChildrenReactNode {
  children: ReactNode;
}

export interface IPaymentVisible {
  setPaymentVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
export enum CardIcon {
  visa = 4,
  master,
  union,
}

export type SortingProps = {
  brand: string[];
  category: string[];
  minPrice: number;
  maxPrice: number;
  minStock: number;
  maxStock: number;
  sortBy: string;
  search: string;
  itemsView: string;
};

export type mathOperator = "min" | "max";

export type itemKey = "stock" | "price";
