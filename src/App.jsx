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

    if (playerData.length < 6) {
      console.log(playerData.length);
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
    }
    else {
      toast.error("Maximum limit reached.");

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

      <Header totalMoney={totalMoney()}></Header>
      

      <div className="py-4 px-4 md:mx-16 md:py-16 lg:mx-40 text-[#131313]">

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
