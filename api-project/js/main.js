    const URL = `https://www.balldontlie.io/api/v1/season_averages?season=2023&player_ids[]=237&player_ids[]=237`;

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

    document.querySelector(".player").textContent = data.data[0].ast;

