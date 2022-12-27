import { useEffect, useState } from "react";

import "./home.scss";
import { ProductObject } from "../../types";
import Aside from "../../components/aside/aside";
import SortingBlock from "../../components/sortingBlock/sortingBlock";
import storeItems from "../../storeProducts/storeProducts";
import useSort from "../../hooks/useSort";

const Home = () => {
  const [items, setItems] = useState<ProductObject[]>(storeItems);
  const { sort } = useSort();

  useEffect(() => {
    if (!!sort.category.length) {
      setItems(() =>
        items.filter((item) => {
          if (sort.category.includes(item.category)) {
            return item;
          }
        })
      );
    } else {
      setItems(storeItems);
    }
  }, [sort]);
  console.log(items);

  return (
    <main className="container main">
      <Aside items={items} setItems={setItems} />
      <SortingBlock items={items} />
    </main>
  );
};

export default Home;
