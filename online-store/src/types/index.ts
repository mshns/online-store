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

export type SortingProps = {
  brand: string[];
  category: string[];
  minPrice: number;
  maxPrice: number;
  minStock: number;
  maxStock: number;
};

export interface ISortContext {
  sort: SortingProps;
  setSort: React.Dispatch<React.SetStateAction<SortingProps>>;
}

export interface IProps {
  items: IProductItem[];
  setItems: (items: IProductItem[]) => void;
}
