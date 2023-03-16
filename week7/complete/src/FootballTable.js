import { useState } from "react";

function FootballTable(props) {
  const { footballData, pageSize } = props;
  const [page, setPage] = useState(0);
  const pageCount = footballData.length / pageSize;

  const getData = () =>
    footballData.slice(pageSize * page, pageSize * (page + 1));
  const nextPage = () => setPage(Math.min(page + 1, Math.floor(pageCount)));
  const prevPage = () => setPage(Math.max(page - 1, 0));

  return (
    <div>
      <div>
        <button onClick={prevPage}>&lt;</button>
        <span>
          Page {page + 1}/{Math.floor(pageCount)}
        </span>
        <button onClick={nextPage}>&gt;</button>
      </div>
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
        {getData().map((data) => (
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
    </div>
  );
}

export default FootballTable;
