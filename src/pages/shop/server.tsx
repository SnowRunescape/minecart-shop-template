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
    <Card>
      <CardContent className="grid grid-cols-2 w-full gap-4">
        {servers.map((server) => (
          <ServerComponent key={server.id} server={server} />
        ))}
      </CardContent>
    </Card>
  );
};

export default Server;
