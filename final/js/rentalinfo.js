const requestURL = 'data/rental.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {

    const rentals = jsonObject['rentals'];
    console.log(rentals);
    for (let i = 0; i < rentals.length; i++) {
      const rentalList = rentals[i].list;
      for (let j = 0; j < rentalList.length; j++) {

        let tbList = document.createElement('article');
        let title = document.createElement('title');
        let seats = document.createElement('seats');
        let reserve = document.createElement('reserve');
        let half1 = document.createElement('half1');
        let full1 = document.createElement('full1');
        let walk = document.createElement('walk');
        let half2 = document.createElement('half2');
        let full2 = document.createElement('full2');

        let h3 = document.createElement('h3');

        const h41 = document.createElement('h5');
        const myPara1 = document.createElement('p');

        const h42 = document.createElement('h4');
        const h51 = document.createElement('h5');
        const myPara2 = document.createElement('p');
        const h52 = document.createElement('h5');
        const myPara3 = document.createElement('p');

        const h43 = document.createElement('h4');
        const h53 = document.createElement('h5');
        const myPara4 = document.createElement('p');
        const h54 = document.createElement('h5');
        const myPara5 = document.createElement('p');
        const image = document.createElement('img');


        h3.textContent = rentals[i].list[j].name;
        h41.textContent = 'Max Seatings';
        myPara1.textContent = rentals[i].list[j].seating;

        h42.textContent = 'Reservations';
        h51.textContent = 'Half-Day\n (3 hrs)';
        myPara2.textContent = rentals[i].list[j].reservehalf;
        h52.textContent = 'Full Day';
        myPara3.textContent = rentals[i].list[j].reservefull;

        h43.textContent = 'Walk-In';
        h53.textContent = 'Half-day/n (3hrs)';
        myPara4.textContent = rentals[i].list[j].walkinhalf;
        h54.textContent = 'Full-day';
        myPara5.textContent = rentals[i].list[j].walkinfull;

        image.setAttribute('src', rentals[i].list[j].imageurl);
        image.setAttribute('alt', rentals[i].list[j].name);



        tbList.appendChild(title);
        tbList.appendChild(seats);
        tbList.appendChild(reserve);
        tbList.appendChild(walk);
        tbList.appendChild(image);
        document.querySelector('div.tbLists').appendChild(tbList);
        title.appendChild(h3);

        seats.appendChild(h41);
        seats.appendChild(myPara1);

        half1.appendChild(h51);
        half1.appendChild(myPara2);
        full1.appendChild(h52);
        full1.appendChild(myPara3);

        reserve.appendChild(h42);
        reserve.appendChild(half1);
        reserve.appendChild(full1);

        half2.appendChild(h53);
        half2.appendChild(myPara4);
        full2.appendChild(h54);
        full2.appendChild(myPara5);

        walk.appendChild(h43);
        walk.appendChild(half2);
        walk.appendChild(full2);


      }
    }
  });