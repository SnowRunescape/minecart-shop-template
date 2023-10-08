import React from 'react';
import NotFound from '../../components/NotFound';
import { useGetTeam } from '../../services/team';
import TeamComponent from '../../components/Team';
import useDocumentTitle from '../../hooks/useDocumentTitle';

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
    )
  }

  return (
    <div className="flex flex-col gap-3">
      {team.map(team => <TeamComponent key={team.id} team={team}/>)}
    </div>
  );
}

export default Team;