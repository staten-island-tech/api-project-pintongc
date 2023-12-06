import './style.css'

const URL = `'https://api-nba-v1.p.rapidapi.com/`;

async function getData(URL){
    try {
        const response = await fetch(URL);
        console.log(response);
        const data = await response.json();
        console.log(data);
        document.querySelector("h1").textContent = data.content;
        document.querySelector("h2").textContent = data.author;
    } catch (error) {

    }
}
getData(URL)