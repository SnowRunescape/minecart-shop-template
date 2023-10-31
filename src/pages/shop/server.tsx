import Card from '../../components/Card';
import NotFound from '../../components/NotFound';
import ServerComponent from '../../components/server';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import { useGetServers } from './../../services/servers';

const Server = () => {
  useDocumentTitle("Loja");

  const { data: servers, isLoading } = useGetServers();

  if (isLoading) {
    return "carregando";
  }

  if (servers?.length == 1) {
    const server = servers[0];

    window.location.pathname = `/shop/${server.id}`;
  }

  if (!servers?.length) {
    return (
      <NotFound
        title="Nenhum servidor publicada"
        description="Não foi publicado nenhum servidor ate o momento!"
      />
    )
  }

  return (
    <Card>
      <div className="grid grid-cols-2 w-full gap-4">
        {servers.map(server => <ServerComponent key={server.id} server={server} />)}
      </div>
    </Card>
  );
}

export default Server;