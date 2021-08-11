import { useState } from "react";
import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { Stats } from "../components/Stats";
import { Footer } from "../components/Footer";
import "../styles/App.scss"

function App() {

  const [inputInitialValue, setInitialValue] = useState("");
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false);

  return (
    <div className="App">
      <Header />
      <Banner inputInitialValue={inputInitialValue} setInitialValue={setInitialValue} setData={setData} data={data} loading={loading} setLoading={setLoading}/>
      <Stats loading={loading} data={data}/>
      <Footer />
    </div>
  );
}

export default App;
