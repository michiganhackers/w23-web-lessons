import logo from './logo.svg';
import './App.css';
import FootballTable from "./FootballTable";
import footballData from "./football.json";
import Info from "./Info";

function App() {
    return (
        <div className="App">
            <img src={logo} className="App-logo"/>
            <Info/>
            <FootballTable footballData={footballData}/>
            <FootballTable footballData={footballData.filter(data => !(data.year % 5))}/>
        </div>
    );
}

export default App;
