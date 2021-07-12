var randomNumber1=Math.floor(Math.random()*6+1);
var randomNumber2=Math.floor(Math.random()*6+1);

var randomDiceImage="dice"+randomNumber1+".png";
var randomDiceImage2="dice"+randomNumber2+".png";
var randomImageSource="images/"+randomDiceImage;
var randomImageSource2="images/"+randomDiceImage2;

// var image1=document.querySelectorAll("img")[0];
//
// image1.setAttribute("src",randomImageSource);
//
// var image2=document.querySelectorAll("img")[1];
// image2.setAttribute("src",randomImageSource);
function locationreload() {
    location.reload();
}

for(let i=0; i<document.querySelectorAll("img").length; i++){
   var image=document.querySelectorAll("img")[i];
   if(i===0){
   console.log(i);
   image.setAttribute("src",randomImageSource);
   }
   if(i===1){
   console.log(i);
   image.setAttribute("src",randomImageSource2);
   }
}


if(randomNumber1>randomNumber2){
      document.querySelector("h1").innerHTML = "Player1 won!";
}
if(randomNumber1==randomNumber2){
     document.querySelector("h1").innerHTML = "Draw!";
}
if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML = "Player2 won!";
}

var checking=document.querySelector("button");
if(checking == "locationreload()"){
    checking.innerHTML="Refresh Me";
}
