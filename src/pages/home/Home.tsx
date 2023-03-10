import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import "./home.scss";

import Aside from "../../components/aside/aside";
import SortingBlock from "../../components/sortingBlock/sortingBlock";

import useSort from "../../hooks/useSort";

import storeItems from "../../StoreProducts/StoreProducts";

import { IProductItem } from "../../types";

const Home = () => {
  const [items, setItems] = useState<IProductItem[]>(storeItems);
  const { sort } = useSort();
  const [, setSearchParams] = useSearchParams();
  useEffect(() => {
    const params: {
      brand?: string;
      category?: string;
      search?: string;
      sortBy?: string;
      itemsView?: string;
      minPrice?: string;
      maxPrice?: string;
      minStock?: string;
      maxStock?: string;
    } = {};

    if (sort.brand.length) {
      params.brand = sort.brand.join("%");
    }
    if (sort.category.length) {
      params.category = sort.category.join("%");
    }
    if (sort.search) {
      params.search = sort.search;
    }
    if (sort.sortBy) {
      params.sortBy = sort.sortBy;
    }
    if (sort.itemsView) {
      params.itemsView = sort.itemsView;
    }
    if (sort.minPrice) {
      params.minPrice = sort.minPrice.toString();
    }
    if (sort.itemsView) {
      params.maxPrice = sort.maxPrice.toString();
    }
    if (sort.minStock) {
      params.minStock = sort.minStock.toString();
    }
    if (sort.maxStock) {
      params.maxStock = sort.maxStock.toString();
    }
    setSearchParams(params);
  }, [setSearchParams, sort]);

  useEffect(() => {
    setItems(() => {
      const filtredItems: IProductItem[] = storeItems.filter((item) => {
        if (sort.category.length || sort.brand.length) {
          if (sort.category.length && sort.brand.length) {
            return (
              sort.category.includes(item.category) &&
              sort.brand.includes(item.brand)
            );
          } else if (sort.category.length) {
            return sort.category.includes(item.category);
          } else {
            return sort.brand.includes(item.brand);
          }
        } else {
          return storeItems;
        }
      });
      const newList: IProductItem[] = filtredItems.filter((item) => {
        return (
          item.price >= sort.minPrice &&
          item.price <= sort.maxPrice &&
          item.stock >= sort.minStock &&
          item.stock <= sort.maxStock
        );
      });
      if (sort.sortBy === "") {
        return newList;
      }
      return newList.sort((a, b) => {
        if (sort.sortBy === "priceToLower") {
          return b.price - a.price;
        } else if (sort.sortBy === "priceToHigher") {
          return a.price - b.price;
        } else if (sort.sortBy === "ratingToLower") {
          return b.rating - a.rating;
        }
        return a.rating - b.rating;
      });
    });
    setItems((prev) => {
      if (sort.search === "") {
        return prev;
      } else {
        return prev.filter((item) => {
          return (
            item.title.toLowerCase().includes(sort.search) ||
            item.description.toLowerCase().includes(sort.search) ||
            item.price.toString().includes(sort.search) ||
            item.rating.toString().includes(sort.search) ||
            item.stock.toString().includes(sort.search) ||
            item.brand.toLowerCase().includes(sort.search) ||
            item.category.toLowerCase().includes(sort.search)
          );
        });
      }
    });
  }, [sort]);

  return (
    <main className="main">
      <Aside items={items} setItems={setItems} />
      <SortingBlock items={items} />
    </main>
  );
};

export default Home;
