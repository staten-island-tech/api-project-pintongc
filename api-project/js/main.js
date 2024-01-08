import { DOMSelectors } from "./dom";
import { players } from "./playerids";

DOMSelectors.plyrform.addEventListener("submit", async function (event) {
  event.preventDefault();
  const plyrName = DOMSelectors.plyrname.value.trim();
  try {
    const plyrID = await getPlyrID(plyrName);
    const stats = await getTableStats(plyrID, plyrName);
    addRow(plyrName, stats);
  } catch (error) {}
});

function addRow(plyrName, stats) {
  DOMSelectors.table.insertAdjacentHTML(
    "beforeend",
    `<tr>
      <td class="playerclmn">${plyrName}</td>
      <td class="PPG">${stats.pts}</td>
      <td class="APG">${stats.ast}</td>
      <td class="RPG">${stats.reb}</td>
      <td class="TO">${stats.turnover}</td>
      <td class="PF">${stats.pf}</td>
      <td class="BLK">${stats.blk}</td>
      <td class="STL">${stats.stl}</td>
      <td class="FG%">${stats.fg3_pct}</td>
      <td class="3P%">${stats.fg_pct}</td>
      <td class="FT%">${stats.ft_pct}</td>
    </tr>`
  );
}

async function getPlyrID(plyrName) {
  try {
    const URL = `https://www.balldontlie.io/api/v1/players?search=${plyrName}`;
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data.data[0].id);
    return data.data[0].id;
  } catch (error) {}
}

async function getCardStats(plyrID, plyrCard) {
  try {
    const statsURL = `https://www.balldontlie.io/api/v1/season_averages?season=2023&player_ids[]=${plyrID}`;
    const response = await fetch(statsURL);
    const data = await response.json();
    console.log(data);
    plyrCard.querySelector("h1").textContent = data.data[0].pts;
    plyrCard.querySelector("h2").textContent = data.data[0].ast;
    plyrCard.querySelector("h3").textContent = data.data[0].reb;
    return data.data[0];
  } catch (error) {}
}
async function getTableStats(plyrID) {
  try {
    const statsURL = `https://www.balldontlie.io/api/v1/season_averages?season=2023&player_ids[]=${plyrID}`;
    const response = await fetch(statsURL);
    const data = await response.json();
    console.log(data);
    return data.data[0];
  } catch (error) {}
}

getTableStats();

DOMSelectors.remove.addEventListener("click", function () {
  DOMSelectors.table.innerHTML = `
      <tr>
        <th class="player-column">Player</th>
        <th>PPG</th>
        <th>APG</th>
        <th>RPG</th>
        <th>TO</th>
        <th>PF</th>
        <th>BLK</th>
        <th>STL</th>
        <th>FG%</th>
        <th>3P%</th>
        <th>FT%</th>
      </tr>
    `;
});

DOMSelectors.playercards.forEach((card) => {
  const plyrName = card.querySelector(".player-name").textContent;
  const plyr = players.find((card) => card.name === plyrName);
  if (plyr) {
    getCardStats(plyr.id, card);
  }
});
