import React, { useState } from 'react'
import { RuleProps } from './types';
import { useTranslation } from 'react-i18next';

const Product = (props: RuleProps) => {
  const { t } = useTranslation();

  const { rule, description, punishment } = props.rule;

  const [state, setState] = useState(false);

  return (
    <div className="flex flex-col items-center relative gap-3">
      <div className="font-bold">{rule}</div>

      <div>{description}</div>

      <button className="btn btn-danger" onClick={() => setState(!state)}>{t("words.punishment")}</button>

      {state && <div className="bg-gray-200 w-full max-w-[50%] p-3 rounded">
        <span className="font-bold text-red-500 uppercase">{t("words.punishment")}:</span> {punishment}
      </div>}
    </div>
  );
}

export default Product;