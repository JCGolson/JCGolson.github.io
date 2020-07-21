/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Return the date and time on which the document was last modified
document.getElementById('lastupdated').textContent = document.lastModified;

//Return the current copywrite year
var date = new Date().getFullYear();
document.getElementById("year").innerHTML = date;