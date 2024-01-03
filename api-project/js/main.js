import { DOMSelectors } from "./dom";

    const URL = `https://www.balldontlie.io/api/v1/season_averages?season=2023&player_ids[]=237&player_ids[]=237`;
    const URL1 = `https://www.balldontlie.io/api/v1/games?seasons[]=2023&team_ids[]=20`;

    async function getData(URL){
        try {
            const response = await fetch(URL);
            console.log(response);
            const data = await response.json();
            console.log(data.data[0]);
            document.querySelector("h1").textContent = data.data[0].pts;
            document.querySelector("h2").textContent = data.data[0].ast;
        } catch (error) {

        }
    }
    getData(URL)

    async function getData1(URL1){
        try {
            const response = await fetch(URL1);
            console.log(response);
            const data = await response.json();
            console.log(data.data[0]);
            document.querySelector("h3").textContent = data.data[0].home_team_score;
            document.querySelector(".t2").textContent = data.data[0].visitor_team_score;
        } catch (error) {

        }
    }
    getData1(URL1)
