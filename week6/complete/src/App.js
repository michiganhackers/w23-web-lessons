import logo from './logo.svg';
import './App.css';
import FootballTable from "./football";
import footballData from "./football.json";

function App() {
  return (
    <div className="App">
      <FootballTable footballData={footballData}/>
    </div>
  );
}

export default App;
