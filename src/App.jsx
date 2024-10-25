import { useState } from "react";

import "./App.css";
import Header from "./Components/Header";
import MainSection from "./Components/MainSection";
import Footer from "./Components/Footer";

function App() {
  const [playerData, setPlayerData] = useState([]);
  const [money,setMoney]=useState(0);
  const addMoney=(tk)=>setMoney(money+tk);
  const totalMoney=()=>money;
  
  const hendlePlayerData = (player) => {
    
    
    const isDuplicate = playerData.some(
      (p) => p.id === player.id
    );
    if (!isDuplicate ) {
      if(money<=player.biddingPrice){
        alert("no money")
      }
      else{
        const addPlayer=[...playerData,player];
      setPlayerData(addPlayer);
      setMoney(money-player.biddingPrice)
      }
      

    } else {
      alert("Player is already selected.");
    }

    
    
  };
  const handleDelete=(p)=>{
    const updatePlayer=playerData.filter((player)=>player.id!==p.id);
    setPlayerData(updatePlayer)
    setMoney(money+parseInt(p.biddingPrice))
   
  }
 

  return (
    <>
      <div className="py-6 px-4 md:px-16 lg:px-40 text-[#131313]">
        <Header totalMoney={totalMoney()}></Header>
        <MainSection addMoney={addMoney}  handleDelete={handleDelete} playerData={playerData} hendlePlayerData={hendlePlayerData}></MainSection>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
