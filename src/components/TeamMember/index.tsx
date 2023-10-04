import React from 'react'
import { TeamMemberProps } from './types';
import { getHelmByUsername } from '../../helpers/minecraft';

const TeamMember = (props: TeamMemberProps) => {
  const { name } = props.member;

  return (
    <div className="grid place-items-center p-3 gap-2 bg-gray-100 rounded">
      <img className="rounded" src={getHelmByUsername(name)} />
      <div className="font-bold">{name}</div>
    </div>
  )
}

export default TeamMember;