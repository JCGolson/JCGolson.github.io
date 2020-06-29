const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); //temporary checking for valid response and data parsing

        const towns = jsonObject['towns'];
        const home = towns.filter(town => (town.name == 'Preston'));
 
        home.forEach(town => {
            let prestonEvents = document.createElement('article');
            let eventList = document.createElement('ul');

            const townEvents = town.events;
            for (let j = 0; j < townEvents.length; j++) {
                const listItem = document.createElement('li');
                listItem.textContent = townEvents[j];
                eventList.appendChild(listItem);
            }
            console.log(townEvents);

             prestonEvents.appendChild(eventList);
        })
        });
 