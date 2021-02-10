let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomDiceImg1 = "images/dice"+randomNumber1+".png";
let randomDiceImg2 = "images/dice"+randomNumber2+".png";

document.querySelector(".img1").setAttribute("src", randomDiceImg1);

document.querySelector(".img2").setAttribute("src", randomDiceImg2);

if(randomNumber1 > randomNumber2){
document.querySelector("h1").innerText="🚩 Player 1 Wins";
} else if(randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerText="Player 2 Wins 🚩";
} else {
  document.querySelector("h1").innerText="Draw";
}