import News from '@Minecart/components/News';
import NotFound from '@Minecart/components/NotFound';
import Pagination from '@Minecart/components/Pagination';
import { NEWS_PER_PAGE } from '@Minecart/config';
import useDocumentTitle from '@Minecart/hooks/useDocumentTitle';
import usePagination from '@Minecart/hooks/usePagination';
import { useGetNews } from '@Minecart/services/news';
import { t } from 'i18next';

const Index = () => {
  useDocumentTitle("Pagina Inicial");

  const { data: news, isLoading } = useGetNews();
  const { currentPageData, currentPage, itemsPerPage, updateCurrentPage } = usePagination({
    data: news || [],
    itemsPerPage: NEWS_PER_PAGE,
  });

  if (isLoading) {
    return "carregando";
  }

  if (!news?.length) {
    return (
      <NotFound
        title={t("phrases.newsTitleNotFound")}
        description={t("phrases.newsDescriptionNotFound")}
      />
    )
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-3">
        {currentPageData().map(news => <News key={news.id} news={news} />)}
      </div>

      <div className="flex justify-center">
        <Pagination
          total={news.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          updateCurrentPage={updateCurrentPage}
        />
      </div>
    </div>
  )
}

export default Index;