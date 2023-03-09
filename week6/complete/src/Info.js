import MichiganLogo from "./umich.png";

const funFacts = [
    "Michigan is the bestest football team ever!!!11!1",
    "ohio state is the ugliest and worstest team in the whole wide world",
    "Michigan football has existed since 1892",
];

function Info() {
    return (
        <>
            <img src={MichiganLogo}/>
            <p>Fun Facts!!!</p>
            <ul>
                {funFacts.map(fact => (<li>{fact}</li>))}
            </ul>
        </>
    );
}

export default Info;
