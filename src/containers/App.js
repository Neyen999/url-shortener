import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { Stats } from "../components/Stats";
import { Footer } from "../components/Footer";
import "../styles/App.css"

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Stats />
      <Footer />
    </div>
  );
}

export default App;
