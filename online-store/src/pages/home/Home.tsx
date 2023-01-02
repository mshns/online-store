import { useEffect, useState } from "react";

import "./home.scss";
import { IProductItem } from "../../types";
import Aside from "../../components/aside/aside";
import SortingBlock from "../../components/sortingBlock/sortingBlock";
import storeItems from "../../storeProducts/storeProducts";
import useSort from "../../hooks/useSort";

const Home = () => {
  const [items, setItems] = useState<IProductItem[]>(storeItems);
  const { sort } = useSort();

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
      return filtredItems.filter((item) => {
        return (
          item.price >= sort.minPrice &&
          item.price <= sort.maxPrice &&
          item.stock >= sort.minStock &&
          item.stock <= sort.maxStock
        );
      });
    });
  }, [sort]);

  return (
    <main className="container main">
      <Aside items={items} setItems={setItems} />
      <SortingBlock items={items} />
    </main>
  );
};

export default Home;
