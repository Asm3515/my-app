import { Navbar } from "./Navbar/Navbar";
import Section  from "./Section/Section";
import "./App.css"
import "./MediaQueries.css"

function App() {
  return (
    <div className="App">
        <div className='body'>
        <div className="navbar">
          <Navbar/>
          <Section/>
        </div>
      </div>
    </div>
  );
}

export default App;
