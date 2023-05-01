import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar/Navbar";
import Table from "./components/Table/Table";

function App() {
  return (
    <div className="App">
    <div className="grid grid-cols-12 grid-rows-12">
    
      <div className="col-span-10">
        <Header />
        <Table/>
   
      </div>
      
      <div className="col-span-2">
        <Navbar /> 
      </div>
      
     
    </div>
    
    
    </div>

  );
}

export default App;
