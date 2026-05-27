import Img from "@Minecart/components/Img";
import { getHelmByUsername } from "@Minecart/helpers/minecraft";
import { TeamMemberProps } from "./types";

const TeamMember = (props: TeamMemberProps) => {
  const { username } = props.member;

  return (
    <div className="grid place-items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 p-4 text-center">
      <Img
        src={getHelmByUsername(username)}
        className="h-16 w-16 rounded-lg"
        effect="opacity"
        placeholderSrc="https://cdn.minecart.com.br/assets/img/steve_head_64x64.png"
      />

      <div className="font-bold text-gray-950">{username}</div>
    </div>
  );
};

export default TeamMember;
