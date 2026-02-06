import React from 'react'
import { Link } from 'react-router-dom'

export const TeamDetail = () => {
    var teams = [
        {teamId:1,teamName:'Mi'},
        {teamId:1,teamName:'CSK'},
        {teamId:1,teamName:'RR'},
        {teamId:1,teamName:'GL'},
        {teamId:1,teamName:'RCB'},
        {teamId:1,teamName:'GT'},
        {teamId:1,teamName:'RR'},
        {teamId:1,teamName:'KKR'},
        {teamId:1,teamName:'RC'},
        {teamId:1,teamName:'MI'},
    ];
  return (
    <div style={{textAlign:'center'}}>
        <h1>TeamDetail</h1>
            {
                teams.map((team)=>{
                    return <li>
                        <Link to={`/teamdetail/${team.teamName}`}>{team.teamName}</Link>
                    </li>
                })
            }
    </div>
  );
};

