import React from 'react'
import { TeamProps } from './types';
import TeamMember from '../TeamMember';

const Team = (props: TeamProps) => {
  const { team, color, members } = props.team;

  return (
    <div className="bg-white border rounded">
      <div className="text-center p-3 rounded-t" style={{
        backgroundColor: color
      }}>{team}</div>

      <div className="flex gap-6 p-6 grid grid-cols-4 place-items-stretch">
        {members.map(member => <TeamMember key={member.id} member={member} />)}
      </div>
    </div>
  )
}

export default Team;