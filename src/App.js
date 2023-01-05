import './App.css';
import Header from "./Component/Header/Header"
import Nav from './Component/Nav/Nav';
import About from './Component/About/About';
import Experience from './Component/Experience/Experience';
import Portfolio from './Component/portfolio/Portfolio';
import Contact from './Component/Contact/Contact';
function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
