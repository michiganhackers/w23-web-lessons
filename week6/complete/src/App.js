import logo from './logo.svg';
import './App.css';
import FootballTable from "./football";
import footballData from "./football.json";

function App() {
    return (
        <div className="App">
            <img src={logo} className="App-logo"/>
            <FootballTable footballData={footballData.filter(data => data.year % 2)}/>
            <FootballTable footballData={footballData.filter(data => data.year % 2)}/>
        </div>
    );
}

export default App;
