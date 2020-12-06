var randomnum1 = Math.random()
var randomnum2 = Math.random()
randomnum2 = randomnum2 * 6
randomnum1 = randomnum1 * 6

randomnum2 = Math.floor(randomnum2) + 1
randomnum1 = Math.floor(randomnum1) + 1

if (randomnum1 == 6) {
    document.querySelector("img").setAttribute("src", "images/dice6.png")
} else if (randomnum1 == 5) {
    document.querySelector("img").setAttribute("src", "images/dice5.png")
} else if (randomnum1 == 4) {
    document.querySelector("img").setAttribute("src", "images/dice4.png")
} else if (randomnum1 == 3) {
    document.querySelector("img").setAttribute("src", "images/dice3.png")
} else if (randomnum1 == 2) {
    document.querySelector("img").setAttribute("src", "images/dice2.png")
} else {
    document.querySelector("img").setAttribute("src", "images/dice1.png")
}

if (randomnum2 == 1) {
    document.getElementById("dice2").setAttribute("src", "images/dice1.png")
} else if (randomnum2 == 2) {
    document.getElementById("dice2").setAttribute("src", "images/dice2.png")
} else if (randomnum2 == 3) {
    document.getElementById("dice2").setAttribute("src", "images/dice3.png")
} else if (randomnum2 == 4) {
    document.getElementById("dice2").setAttribute("src", "images/dice4.png")
} else if (randomnum2 == 5) {
    document.getElementById("dice2").setAttribute("src", "images/dice5.png")
} else {
    document.getElementById("dice2").setAttribute("src", "images/dice6.png")
}



if (randomnum1 == randomnum2) {
    document.querySelector("h1").innerHTML = "Match Tied"
} else if (randomnum1 > randomnum2) {
    document.querySelector("h1").innerHTML = "✨Player 1 Wins✨"
} else {
    document.querySelector("h1").innerHTML = "✨Player 2 Wins✨"
}