import { useState } from "react";
import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { Stats } from "../components/Stats";
import { Footer } from "../components/Footer";
import "../styles/App.css"

function App() {

  const [inputInitialValue, setInitialValue] = useState("");

  return (
    <div className="App">
      <Header />
      <Banner inputInitialValue={inputInitialValue} setInitialValue={setInitialValue} />
      <Stats />
      <Footer />
    </div>
  );
}

export default App;
