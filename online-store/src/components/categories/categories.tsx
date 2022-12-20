import './categories.scss';
import React from 'react';

function Categories(allCategories: string[]) {

  const [activeCategory, setActiveCategory] = React.useState(0);

  const categoryHandler: (index: number) => void = (index) => {
    setActiveCategory(index);
  }

  return (
    <ul>
      {allCategories.map((category: string, index: number) => (
        <li
          key = {index}>
            <button
              onClick={() => categoryHandler(index)}
              className={`${activeCategory === index ? 'active' : ''} category__btn btn`}>
              {category}
            </button>
        </li>
      ))}
    </ul>
  )
}

export default Categories;
