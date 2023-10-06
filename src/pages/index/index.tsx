import React from 'react';
import NotFound from '../../components/NotFound';
import News from '../../components/News';
import { useGetRules } from '../../services/news';

const Index = () => {
  const { data: news, isLoading } = useGetRules();

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

  return news.map(news => <News key={news.id} news={news} />);
}

export default Index;