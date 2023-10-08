import { CategoriesBarProps } from './types';
import { useTranslation } from 'react-i18next';

const CategoriesBar = (props: CategoriesBarProps) => {
  const { t } = useTranslation();
  const { categories } = props;

  return (
    <div className="flex flex-col gap-2" style={{
      width: 280,
    }}>
      <span className="font-bold text-center">{t("words.categories")}</span>

      <div className="flex flex-col gap-2">
        {categories.map(category => {
          return (
            <div className="flex items-center gap-2 bg-gray-400 rounded px-2 py-1 cursor-pointer">
              <img src="https://cdn.minecart.com.br/assets/img/cube-category.png" alt="" />
              {category.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CategoriesBar;