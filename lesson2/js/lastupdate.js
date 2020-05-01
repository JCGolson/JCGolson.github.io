// Return the date and time on which the document was last modified
document.getElementById('lastupdated').textContent = document.lastModified;

//Return the current copywrite year
var date = new Date().getFullYear();
document.getElementById("year").innerHTML = date;