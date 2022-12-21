import React from "react";

import "./home.scss";
import { ProductObject } from "../../types";
import Aside from "../../components/aside/aside";
import SortingBlock from "../../components/sortingBlock/sortingBlock";

export const Home = () => {
  const [items, setItems] = React.useState<ProductObject[]>([]);
  const [sortType, setSortType] = React.useState<string>("");
  const [filter, setFilter] = React.useState<string>("");

  React.useEffect(() => {
    fetch(
      "https://639ee5ab5eb8889197ef47ce.mockapi.io/products" + sortType + filter
    )
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [sortType, filter]);

  return (
    <main className="container main">
      <Aside
        items={items}
        filter={filter}
        onChangeFilter={(filter: string) => setFilter(filter)}
      />
      <SortingBlock
        items={items}
        sortType={sortType}
        onChangeType={(search: string) => setSortType(search)}
      />
    </main>
  );
};
