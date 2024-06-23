import Img from '@Minecart/components/Img';
import { getHelmByUsername } from '@Minecart/helpers/minecraft';
import { TeamMemberProps } from './types';

const TeamMember = (props: TeamMemberProps) => {
  const { name } = props.member;

  return (
    <div className="grid place-items-center p-3 gap-2 bg-gray-100 rounded">
      <Img
        src={getHelmByUsername(name)}
        className="rounded"
        effect="opacity"
        placeholderSrc="https://cdn.minecart.com.br/assets/img/steve_head_64x64.png"
      />

      <div className="font-bold">{name}</div>
    </div>
  )
}

export default TeamMember;