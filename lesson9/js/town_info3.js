const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); //temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {

            if (i == 1 || i == 4 || i == 5) {

                const myArticle = document.createElement('article');
                const myH2 = document.createElement('h2');
                const myH3 = document.createElement('h3');
                const myPara1 = document.createElement('p');
                const myPara2 = document.createElement('p');
                const myPara3 = document.createElement('p');

                h3.textContent = towns[i].name;
                h4.textContent = towns[i].motto;
                myPara1.textContent = 'Year Founded:  ' + towns[i].yearFounded;
                myPara2.textContent = 'Population:  ' + towns[i].currentPopulation;
                myPara3.textContent = 'Annual Rain Fall:  ' + towns[i].averageRainfall;


            }


        }
    });