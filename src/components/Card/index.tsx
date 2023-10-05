import React from 'react'
import { CardProps } from './types';

const Card = (props: CardProps) => {
  const {
    title,
    backgroundTitle = 'bg-gray-50',
    children
  } = props;

  return (
    <div className="w-full border">
      {title && (
        <h2 className={`border-b p-3 ${backgroundTitle}`}>
          {title}
        </h2>
      )}

      <div className="p-3">
        {children}
      </div>
    </div>
  );
}

export default Card;