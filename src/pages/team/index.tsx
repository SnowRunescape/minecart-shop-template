import React, { useState } from 'react';
import NotFound from '../../components/NotFound';

const Team = () => {
  const [team, setTeam] = useState([]);

  const render = () => {
    if (!team.length) {
      return (
        <NotFound
          title="Nenhuma regra publicada"
          description="Não foi publicado nenhuma regra ate o momento!"
        />
      )
    }

    return team.map(e => {
      return (
        <>equipe</>
      );
    });
  }
  return (
    <>
      {render()}
    </>
  );
}

export default Team;