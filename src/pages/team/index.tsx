import NotFound from "@Minecart/components/NotFound";
import TeamComponent from "@Minecart/components/Team";
import useDocumentTitle from "@Minecart/hooks/useDocumentTitle";
import { useGetTeam } from "@Minecart/services/team";

const Team = () => {
  useDocumentTitle("Equipe");

  const { data: team, isLoading } = useGetTeam();

  if (isLoading) {
    return "carregando";
  }

  if (!team?.length) {
    return (
      <NotFound
        title="Nenhuma equipe publicada"
        description="Não foi publicado nenhuma equipe ate o momento!"
      />
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {team.map((team) => (
        <TeamComponent key={team.id} team={team} />
      ))}
    </div>
  );
};

export default Team;
