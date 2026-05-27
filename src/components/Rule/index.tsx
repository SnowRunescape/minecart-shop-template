import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  CSSTransition,
} from 'react-transition-group';
import './index.css';
import { RuleProps } from './types';

const Product = (props: RuleProps) => {
  const { t } = useTranslation();

  const { id, rule, description, punishment } = props.rule;

  const [state, setState] = useState(false);

  const nodeRef = useRef(null);

  return (
    <div className="flex flex-col gap-4 rounded-lg border border-gray-200 bg-white p-4">
      <div className="flex flex-col gap-1">
        <h2 className="font-bold text-gray-950">{rule}</h2>

        <div className="text-sm text-gray-600">{description}</div>
      </div>

      <div>
        <button className="btn btn-danger" onClick={() => setState(!state)}>
          {t("words.punishment")}
        </button>
      </div>

      <CSSTransition
        timeout={500}
        classNames="rule-node"
        in={state}
        nodeRef={nodeRef}
        key={id}
        unmountOnExit
      >
        <div ref={nodeRef} className="w-full rounded-lg border border-red-100 bg-red-50 p-4 text-sm text-red-950">
          <span className="font-bold uppercase text-red-600">
            {t("words.punishment")}:
          </span>{" "}
          {punishment}
        </div>
      </CSSTransition>
    </div>
  );
}

export default Product;
