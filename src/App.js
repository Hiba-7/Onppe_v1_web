import React from 'react';
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar/Navbar";
import Details from "./pages/details";

function App() {
  return (
    <div className="App">
    <div className="grid grid-cols-12">
    <div className='row-auto'>
        <Navbar />
        <div>
          {/*Card*/}
          {/*Table*/}
        </div>
      </div>
    <div className="col-span-10">
      <Header />
      <Details />
    </div>

     
    </div>
    </div>

  );
}

export default App;
