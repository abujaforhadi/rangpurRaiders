import React, { useEffect, useState } from 'react'
import Player from './Player';

function Available({hendlePlayerData}) {
    const [player,setPlayer]=useState([]);
    useEffect(() => {
        fetch("/players.json")
          .then((response) => response.json())
          .then((data) => {
            const shuffledPlayers = data.sort(() => 0.5 - Math.random()); 
            const limitedPlayers = shuffledPlayers.slice(0, 6);
            setPlayer(limitedPlayers);
          });
      }, []);

  return (
   
    <div>
        <h3 className="font-bold text-xl text-center py-5">Available Players </h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
            {
                player.map(player=><Player hendlePlayerData={hendlePlayerData} player={player}></Player>)
            }
        </div>
    </div>
  )
}

export default Available