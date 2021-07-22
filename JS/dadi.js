// NUMERI DEI GIOCATORI

var pcNumber = Math.floor((Math.random() *6) + 1);
document.getElementById("pc").innerHTML = (pcNumber);

var youNumber = Math.floor((Math.random() *6) + 1);
document.getElementById("you").innerHTML = (youNumber);

// OUTPUT VINCITORE

if (pcNumber > youNumber) {
    document.getElementById("winner").innerHTML = "è il pc!";
} else if (pcNumber < youNumber) {
    document.getElementById("winner").innerHTML = "sei tu!";
} else {
    document.getElementById("winner").innerHTML = "non  c'è, siete pari!";
}