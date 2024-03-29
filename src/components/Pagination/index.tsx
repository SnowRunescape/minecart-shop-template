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
    <div className="flex gap-3">
      {getPageNumbers().map(page => (
        <button
          key={page}
          className={`px-3 py-1 border-solid border-2 border-primary rounded ${(currentPage == page) ? "bg-primary" : ""}`}
          onClick={() => updateCurrentPage(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
}

export default Pagination;