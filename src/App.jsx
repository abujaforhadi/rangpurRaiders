import { useState } from "react";

import "./App.css";
import Header from "./Components/Header";
import MainSection from "./Components/MainSection";
import Footer from "./Components/Footer";

function App() {
  const [playerData, setPlayerData] = useState([]);
  const hendlePlayerData = (player) => {
    const isDuplicate = playerData.some(
      (p) => p.id === player.id
    );
    if (!isDuplicate) {
      const addPlayer=[...playerData,player];
      setPlayerData(addPlayer);
    } else {
      alert("Player is already selected.");
    }

    
    
  };
  const handleDelete=(p)=>{
    const updatePlayer=playerData.filter((player)=>player.id!==p);
    setPlayerData(updatePlayer)
   
  }
 

  return (
    <>
      <div className="py-6 px-4 md:px-16 lg:px-40 text-[#131313]">
        <Header playerData={playerData}></Header>
        <MainSection handleDelete={handleDelete} playerData={playerData} hendlePlayerData={hendlePlayerData}></MainSection>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
