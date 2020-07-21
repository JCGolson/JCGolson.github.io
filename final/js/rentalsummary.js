const requestURL = 'data/rental.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {

    const rentals = jsonObject['rentals'];
    for (let i = 0; i < rentals.length; i++ ) {
      let card = document.createElement('div');
let h3 = document.createElement('h3');
const myPara1 = document.createElement('p');
const myPara2 = document.createElement('p');
const myPara3 = document.createElement('p');

h3.textContent = rentals[i].type;
myPara1.textContent = 'Holds: ' + rentals[i].passengers;
myPara2.textContent = 'Price: ' + rentals[i].range;
myPara3.textContent = 'Rentals: ' + rentals[i].length;

card.appendChild(h3);
card.appendChild(myPara1);
card.appendChild(myPara2);
card.appendChild(myPara3);

document.querySelector('div.cards').appendChild(card);}
  });

 