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
    setItems(() =>
      storeItems.filter((item) => {
        if (sort.category.length) {
          return sort.category.includes(item.category);
        } else {
          return storeItems;
        }
      })
    );
  }, [sort]);
  console.log(sort);
  console.log(items);

  return (
    <main className="container main">
      <Aside items={items} setItems={setItems} />
      <SortingBlock items={items} />
    </main>
  );
};

export default Home;
