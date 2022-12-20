import React from 'react';

import './home.scss'
// import Categories from "../../components/categories/categories";
// import ItemsBlock from "../../components/products/itemsBlock";
import { ProductObject } from '../../types';
import Aside from '../../components/aside/aside';
import SortingBlock from '../../components/sortingBlock/sortingBlock';

export const Home = () => {
  const [items, setItems] = React.useState<ProductObject[]>([]);
  const [category, setCategory] = React.useState<number>(0);

  const allCategories: string[] = ['All categories'];
  items.forEach((item) => {
    if (allCategories.indexOf(item.category) === -1) {
      allCategories.push(item.category);
    }
  });

  React.useEffect(() => {
    fetch('https://639ee5ab5eb8889197ef47ce.mockapi.io/products')
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [category]);

  return (
    <main className="container main">
      <Aside />
      {SortingBlock(items)}
    </main>
  )
}
