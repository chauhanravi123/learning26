import React from 'react'
import { useParams } from 'react-router-dom';

export const Play = () => {
    const teamName = useParams().name
  return (
    <div style={{textAlign:'center'
    }}>
    <h1>Playing...{teamName}</h1>
    </div>
  );
};
