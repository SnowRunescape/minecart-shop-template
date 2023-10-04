import React from 'react';
import NotFound from '../../components/NotFound';
import { getHelmByUsername } from '../../helpers/minecraft';
import { useGetTeam } from '../../services/team';

const Team = () => {
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
      {team.map(value => {
        return (
          <div key={value.id} className="bg-gray-100">
            <div>{value.team}</div>

            <div>
              {value.members.map(member => {
                return (
                  <>
                    <img src={getHelmByUsername(member.name)} />
                    <div>{member.name}</div>
                  </>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Team;