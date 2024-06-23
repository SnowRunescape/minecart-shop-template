import TeamMember from '@Minecart/components/TeamMember';
import { TeamProps } from './types';

const Team = (props: TeamProps) => {
  const { team, color, members } = props.team;

  return (
    <div className="bg-white border rounded">
      <div className="text-center p-3 rounded-t" style={{
        backgroundColor: color
      }}>{team}</div>

      <div className={`flex gap-6 p-6 grid place-items-stretch ${members.length && "grid-cols-4"}`}>
        {members.length ? members.map(member => <TeamMember key={member.id} member={member} />) : <span>Não foi configurado nenhum <b>{team}</b> ate o momento!</span>}
      </div>
    </div>
  )
}

export default Team;