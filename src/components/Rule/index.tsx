import React from 'react'
import { RuleProps } from './types';

const Product = (props: RuleProps) => {
  const { rule, description, punishment } = props.rule;

  return (
    <div className="relative bg-gray-100">
      <div>{rule}</div>
      <div>{description}</div>
      <div>{punishment}</div>
    </div>
  );
}

export default Product;