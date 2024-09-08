import { useState } from "react";

type PaginationProps<T> = {
  data: T[];
  currentPage?: number;
  itemsPerPage?: number;
};

const usePagination = <T>(props: PaginationProps<T>) => {
  const { data, itemsPerPage = 5 } = props;

  const [currentPage, setCurrentPage] = useState<number>(
    props.currentPage || 1
  );

  const currentPageData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  const updateCurrentPage = (page: number) => {
    setCurrentPage(page);
  };

  return {
    currentPage,
    itemsPerPage,
    currentPageData,
    updateCurrentPage,
  };
};

export default usePagination;
