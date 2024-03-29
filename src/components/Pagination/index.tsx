import { PaginationProps } from "./types";

const Pagination = (props: PaginationProps) => {
  const { total, itemsPerPage, updateCurrentPage } = props;

  const totalPages = Math.ceil(total / itemsPerPage);

  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <div className="flex gap-3">
      {getPageNumbers().map(page => (
        <button key={page} className="px-3 py-1 bg-gray-400" onClick={() => updateCurrentPage(page)}>
          {page}
        </button>
      ))}
    </div>
  );
}

export default Pagination;