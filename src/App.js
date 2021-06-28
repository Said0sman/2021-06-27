import Navbar from "./components/Navbar.js";
import './App.css';
import AnställdaInfo from "./components/AnställdaInfo.js";
import ResInfo  from "./components/ResInfo.js";

function App() {
  return (
    <>
    <Navbar/>
    <AnställdaInfo/> 
    
     <ResInfo/>
    </>
  );
}

export default App;