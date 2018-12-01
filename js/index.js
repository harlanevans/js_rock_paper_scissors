var userChoice;
var choice = ["Rock", "Paper", "Scissors"];
var computerResult;
var result;


var rock = document.body.querySelector(".rock");
rock.addEventListener("click", function(){
  userChoice = "rock";
  // alert("you picked rock");
  computerChoice();
});

var paper = document.body.querySelector(".paper");
paper.addEventListener("click", function(){
  userChoice = "paper";
  // alert("you picked paper");
  computerChoice();
});

var scissors = document.body.querySelector(".scissors");
scissors.addEventListener("click", function(){
  userChoice = "scissors";
  // alert("you picked scissors");
  computerChoice();
});

function computerChoice(){
  computerResult = choice[Math.floor(Math.random()*choice.length)];
  compare();
};

function compare(){
  switch(computerResult) {
    case "Rock":
    if(userChoice === computerResult) {
      result = "Draw Idiot"
    } else if(userChoice === "scissors") {
      result = "You suck"
    } else {
      result = "WINNER WINNER CHICKEN DINNER"
    }
    break;
  case "Paper":
    if(userChoice === computerResult) {
      result = "Draw Idiot"
    } else if(userChoice === "scissors") {
      result = "WINNER WINNER CHICKEN DINNER"
    } else {
      result = "You suck"
    }
  break;
  case "Scissors":
    if(userChoice === computerResult) {
      result = "Draw Idiot"
    } else if(userChoice === "paper") {
      result = "You suck"
    } else {
      result = "WINNER WINNER CHICKEN DINNER"
    }
  break;
  } 
  displayResult()  
};

function displayResult() {
  var resultContainer = document.body.querySelector("#result");
  resultContainer.innerHTML = result;
  var choiceContainer = document.body.querySelector("#choice");
  choiceContainer.innerHTML = `The computer chose ${computerResult}`;
};