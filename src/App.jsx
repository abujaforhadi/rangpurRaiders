import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import Header from "./Components/Header";
import MainSection from "./Components/MainSection";
import Footer from "./Components/Footer";

function App() {
  const [playerData, setPlayerData] = useState([]);
  const [money, setMoney] = useState(0);
  const addMoney = (tk) => {
    toast.success("Credit Added.");
    setMoney(money + tk);
  };
  const totalMoney = () => money;

  const hendlePlayerData = (player) => {
    const isDuplicate = playerData.some((p) => p.id === player.id);

    if (!isDuplicate) {
      if (money <= player.biddingPrice) {
        toast.error("Insufficient credit"); 
      } else {
        const addPlayer = [...playerData, player];
        setPlayerData(addPlayer);
        setMoney(money - player.biddingPrice);
        toast.success(`${player.name} added successfully!`); 
      }
    } else {
      toast.info("player already selected."); 
    }
  };

  const handleDelete = (p) => {
    const updatePlayer = playerData.filter((player) => player.id !== p.id);
    setPlayerData(updatePlayer);
    setMoney(money + parseInt(p.biddingPrice));
    
    toast.warning(`${p.name} removed successfully!`); 
  };

  return (
    <>
      <ToastContainer />
      <div className="py-6 px-4 md:px-16 lg:px-40 text-[#131313]">
        <Header totalMoney={totalMoney()}></Header>
        <MainSection
          addMoney={addMoney}
          handleDelete={handleDelete}
          playerData={playerData}
          hendlePlayerData={hendlePlayerData}
        ></MainSection>
      </div>
      <Footer />
    </>
  );
}

export default App;
