import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { CategoriesBarProps } from "./types";

const CategoriesBar = (props: CategoriesBarProps) => {
  const { t } = useTranslation();
  const { categories } = props;

  return (
    <aside className="soft-panel flex w-full shrink-0 flex-col gap-3 p-4 lg:w-64">
      <span className="text-sm font-bold uppercase tracking-wide text-gray-500">
        {t("words.categories")}
      </span>

      <div className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
        {categories.map((category) => {
          return (
            <Link
              key={category.id}
              to={`?category=${category.id}`}
              className="flex shrink-0 items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-gray-700 transition hover:border-gray-400 hover:text-gray-950"
            >
              <img className="h-8 w-8 object-contain" src={category.archive.url} />
              <span className="whitespace-nowrap">{category.name}</span>
            </Link>
          );
        })}
      </div>
    </aside>
  );
};

export default CategoriesBar;
