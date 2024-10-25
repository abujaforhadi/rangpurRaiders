import React from 'react'
import SelectedPlayer from './SelectedPlayer';

function Selected({playerData,handleDelete}) {
  const player=playerData;
  return (
    <div>
        <h3 className="font-bold text-xl text-center py-4">Selected Players </h3>
        <div className='grid gap-3'>
          {
            player.map(p=><SelectedPlayer key={p.id} handleDelete={handleDelete} p={p}></SelectedPlayer>)
          }
        </div>
        <button className='btn btn-outline'>Add More Player</button>
    </div>
  )
}

export default Selected