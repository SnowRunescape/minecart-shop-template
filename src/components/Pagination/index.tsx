import { PaginationProps } from "./types";

const Pagination = (props: PaginationProps) => {
  const { total, itemsPerPage, currentPage, updateCurrentPage } = props;

  const totalPages = Math.ceil(total / itemsPerPage);

  const getPageNumbers = () => {
    return Array.from({
      length: totalPages
    }, (_, index) => index + 1);
  };

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {getPageNumbers().map(page => (
        <button
          key={page}
          className={`h-10 min-w-10 rounded-lg border border-primary px-3 text-sm font-bold transition ${(currentPage == page) ? "bg-primary text-white" : "bg-white text-gray-700 hover:bg-gray-50"}`}
          onClick={() => updateCurrentPage(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
