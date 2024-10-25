import { useState } from "react";

import "./App.css";
import Header from "./Components/Header";
import MainSection from "./Components/MainSection";
import Footer from "./Components/Footer";

function App() {
  const [playerData, setPlayerData] = useState([]);
  const hendlePlayerData = (player) => {
    const addPlayer=[...playerData,player];
    setPlayerData(addPlayer);
    
  };
  const handleDelete=(p)=>{
    const updatePlayer=playerData.filter((player)=>player.id!==p);
    setPlayerData(updatePlayer)
    console.log(updatePlayer);
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
