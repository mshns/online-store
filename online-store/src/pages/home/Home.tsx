import React from 'react';

import './home.scss'
import Categories from "../../components/categories/categories";
import ItemsBlock from "../../components/products/itemsBlock";
import { ProductObject } from '../../types';

export const Home = () => {
  const [items, setItems] = React.useState<ProductObject[]>([]);
  const [category, setCategory] = React.useState<number>(0);

  React.useEffect(() => {
    fetch('https://639ee5ab5eb8889197ef47ce.mockapi.io/products?category=' + category)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [category]);

  const categories: string[] = ['All categories'];
  items.forEach((item) => {
    if (categories.indexOf(item.category) === -1) {
      categories.push(item.category);
    }
  });

  return (
    <main className="container main">
      <section className="container filter">
        {Categories(categories)}
      </section>
      <section className="container content">
        {ItemsBlock(items)}
      </section>
    </main>
  )
}
