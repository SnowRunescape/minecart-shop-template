import React from 'react'
import { CategoriesBarProps } from './types';

const CategoriesBar = (props: CategoriesBarProps) => {
  const { categories } = props;

  return (
    <div className="relative bg-gray-100">
      Categoerias

      {categories.map(category => {
        return (
          <>
            teste
          </>
        );
      })}
    </div>
  );
}

export default CategoriesBar;