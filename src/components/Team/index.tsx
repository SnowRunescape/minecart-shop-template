import TeamMember from "@Minecart/components/TeamMember";
import { TeamProps } from "./types";

const Team = (props: TeamProps) => {
  const { team, color, members } = props.team;

  return (
    <section className="soft-panel overflow-hidden">
      <div
        className="p-4 text-center font-bold text-white"
        style={{
          backgroundColor: color,
          textShadow: "0 2px 10px rgba(0,0,0,.35)",
        }}
      >
        {team}
      </div>

      <div className="grid grid-cols-1 gap-4 p-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {members.length ? (
          members.map((member) => <TeamMember key={member.id} member={member} />)
        ) : (
          <span className="text-sm text-gray-500">
            Não foi configurado nenhum <b>{team}</b> ate o momento!
          </span>
        )}
      </div>
    </section>
  );
};

export default Team;
