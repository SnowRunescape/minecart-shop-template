import NotFound from '../../components/NotFound';
import News from '../../components/News';
import { useGetNews } from '../../services/news';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import usePagination from '../../hooks/usePagination';
import Pagination from '../../components/Pagination';

const Index = () => {
  useDocumentTitle("Pagina Inicial");

  const { data: news, isLoading } = useGetNews();
  const { currentPageData, currentPage, itemsPerPage, updateCurrentPage } = usePagination({
    data: news || [],
    itemsPerPage: 2,
  });

  if (isLoading) {
    return "carregando";
  }

  if (!news?.length) {
    return (
      <NotFound
        title="Nenhuma noticia publicada"
        description="Não foi publicado nenhuma noticia ate o momento!"
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