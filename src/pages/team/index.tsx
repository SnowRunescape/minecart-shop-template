import React, { useMemo, useState } from 'react';
import NotFound from '../../components/NotFound';
import { Team as TeamType, minecart } from 'minecart-sdk';
import { getHelmByUsername } from '../../helpers/minecraft';

const Team = () => {
  const [team, setTeam] = useState<TeamType[]>([]);

  useMemo(() => {
    const fetchTeam = async () => {
      const team = await minecart.team.all();

      setTeam(Object.values(team));
    }

    fetchTeam();
  }, []);

  if (!team.length) {
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
              {Object.values(value.members).map(member => {
                return (
                  <>
                    <img src={getHelmByUsername(member)} />
                    <div>{member}</div>
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