import NotFound from '../../components/NotFound';
import News from '../../components/News';
import { useGetNews } from '../../services/news';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const Index = () => {
  useDocumentTitle("Pagina Inicial");

  const { data: news, isLoading } = useGetNews();

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
      {news.map(news => <News key={news.id} news={news} />)}
    </div>
  )
}

export default Index;