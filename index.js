
var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomNumber2 = Math.floor(Math.random()*6)+1;


var image1 = document.querySelectorAll("img")[0];

var image2 = document.querySelectorAll("img")[1];

// var image1 = document.querySelector(".img1");

// var image2 = document.querySelector(".img2");

//Image Selection
var randomImage_1 = "images/dice"+randomNumber1+".png";
var randomImage_2 = "images/dice"+randomNumber2+".png";

image1.setAttribute("src",randomImage_1);
image2.setAttribute("src",randomImage_2);

//Winner Selections

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🏆 Player 1 Wins";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="🏆 Player 2 Wins";
}
else if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="🏆 Draw";
}


