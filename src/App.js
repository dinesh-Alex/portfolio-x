import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Serv from "./components/services";
import About from "./components/about";
import Contact from "./components/contact";
// import Sample from "./components/sample"
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="section">
        <Home />
        <Serv />
        <About />
        <Contact />
        {/* <Sample/> */}
        <Footer/>
      </div>
    </div>
  );
}

export default App;
