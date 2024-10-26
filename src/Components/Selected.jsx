import React, { useState } from 'react'; // Add useState import
import SelectedPlayer from './SelectedPlayer';
import Available from './Available';

function Selected({ playerData, handleDelete,handleActiveBtn }) {
  

  const player = playerData;

  return (
    <div>
      <h3 className="font-bold text-xl text-center py-4">Selected Players ({playerData.length}/6)</h3>
      <div className="grid gap-3">
        {player.map(p => (
          <SelectedPlayer key={p.id} handleDelete={handleDelete} p={p} />
        ))}
      </div>
      <button onClick={()=>handleActiveBtn("Available")} className="btn btn-outline">
        Add More Player
      </button>
      
    </div>
  );
}

export default Selected;
