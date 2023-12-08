    const URL = `https://www.balldontlie.io/api/v1/season_averages?season=2023&player_ids[]=237&player_ids[]=238`;

    async function getData(URL){
        try {
            const response = await fetch(URL);
            console.log(response);
            const data = await response.json();
            console.log(data.data);
            document.querySelector("h1").textContent = data;
            document.querySelector("h2").textContent = data;
        } catch (error) {

        }
    }
    getData(URL)

    document.querySelector(".player").textContent = getData.data;

