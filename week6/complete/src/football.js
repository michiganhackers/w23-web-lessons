function FootballTable(props) {
    return (
        <table>
            <tr>
                <th>Year</th>
                <th>Conference</th>
                <th>Wins</th>
                <th>Losses</th>
                <th>Ties</th>
                <th>Win/Loss %</th>
                <th>Coach</th>
            </tr>
            {props.footballData.map(data => (
                <tr>
                    <td>{data.year}</td>
                    <td>{data.conference}</td>
                    <td>{data.wins}</td>
                    <td>{data.losses}</td>
                    <td>{data.ties}</td>
                    <td>{data.winLossPercent}</td>
                    <td>{data.coach}</td>
                </tr>
            ))}
        </table>
    );
}

export default FootballTable;
