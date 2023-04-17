import "./App.css";
import Navbar from "./components/navbar"
import Home from "./components/home"
import Serv from "./components/services"
import About from "./components/about"


function App() {
  return (
    <div className="App">
   <Navbar/>
   <Home/>
   <Serv/>
   <About/>
    </div>
  );
}

export default App;
