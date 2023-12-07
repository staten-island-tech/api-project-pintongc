    const URL = `https://www.balldontlie.io/api/v1/players`;

    async function getData(URL){
        try {
            const response = await fetch(URL);
            console.log(response);
            const data = await response.json();
            console.log(data);
            document.querySelector("h1").textContent = data[0];
            document.querySelector("h2").textContent = data[1];
        } catch (error) {

        }
    }
    getData(URL)

    document.querySelector(".player").textContent = getData.data;

