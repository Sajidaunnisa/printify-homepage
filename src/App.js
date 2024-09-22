import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Features from "./components/Section1";
import Overview from "./components/section2";
import Work from "./components/section3";
import Footar from "./components/Footar";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Features />
      <Overview />
      <Work />
      <Footar />
    </div>
  );
}

export default App;
