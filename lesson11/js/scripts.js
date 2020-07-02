//load webfonts 
WebFont.load({
    google: {
      families: [
         'Roboto', 'Fatface'
      ]
    }
  });


//Toggles the hamburger menu on and off

const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

function myFunction(x) {
	x.classList.toggle("change");
  }

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);
  

// The footer must display the current date using JavaScript 
// in this format Wednesday, 24 July 2020

const daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
const d = new Date();
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();
const fulldate = dayName + ", " + d.getDate() + " " + monthName + " " + year;
document.getElementById("currentdate").textContent = fulldate;


//Adjusting the value for the slider on the Storm Center page
function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}

