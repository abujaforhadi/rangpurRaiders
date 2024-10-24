import { useState } from "react";

import "./App.css";
import Header from "./Components/Header";
import MainSection from "./Components/MainSection";
import Footer from "./Components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="py-6 px-4 md:px-16 lg:px-40 text-[#131313]" >
        <Header></Header>
        <MainSection></MainSection>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
