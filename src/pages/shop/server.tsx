import { Card, CardContent } from "@Minecart/components/Card";
import NotFound from "@Minecart/components/NotFound";
import ServerComponent from "@Minecart/components/server";
import useDocumentTitle from "@Minecart/hooks/useDocumentTitle";
import { useGetServers } from "@Minecart/services/servers";
import { Navigate } from "react-router-dom";

const Server = () => {
  useDocumentTitle("Loja");

  const { data: servers, isLoading } = useGetServers();

  if (isLoading) {
    return "carregando";
  }

  if (servers?.length == 1) {
    const server = servers[0];

    return <Navigate to={`/shop/${server.id}`} />;
  }

  if (!servers?.length) {
    return (
      <NotFound
        title="Nenhum servidor publicada"
        description="Não foi publicado nenhum servidor ate o momento!"
      />
    );
  }

  return (
    <div className="page-stack">
      <div>
        <h1 className="section-title">Escolha um servidor</h1>
        <p className="mt-1 text-sm text-gray-500">
          Selecione onde deseja receber seus produtos.
        </p>
      </div>

      <Card>
        <CardContent className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {servers.map((server) => (
            <ServerComponent key={server.id} server={server} />
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default Server;
