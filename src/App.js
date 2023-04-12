import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
    <div className="grid grid-cols-12">
    <div className='col-span-2'>
        <Navbar />
        <div>
          {/*Card*/}
          {/*Table*/}
        </div>
      </div>
    <div className="col-span-10">
      <Header />
      </div>

     
    </div>
    </div>

  );
}

export default App;
