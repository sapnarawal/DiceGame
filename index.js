var player1Name = prompt("Enter player1 name :");
var player2Name = prompt("Enter player2 name :");

document.getElementById("player1").innerHTML=player1Name;
document.getElementById("player2").innerHTML=player2Name;

function play()   {

  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var image1Source="images/dice" + randomNumber1 + ".png";

  document.querySelector(".img1").setAttribute("src", image1Source);

  var randomNumber2 = Math.floor((Math.random() * 6) + 1);
  var imageSource2="images/dice"+randomNumber2+ ".png";
  document.querySelector(".img2").setAttribute("src", imageSource2);

  if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
  } else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩"+player1Name+" Wins!";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = player2Name+" Wins!🚩";
  }

}
