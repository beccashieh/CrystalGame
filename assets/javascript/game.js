//create global variables
var wins = 0;
var losses = 0;
var buttons = (
    btn1 = Math.floor((Math.random() * 12) + 1),
    btn2 = Math.floor((Math.random() * 12) + 1),
    btn3 = Math.floor((Math.random() * 12) + 1),
    btn4 = Math.floor((Math.random() * 12) + 1),
);
var score;
var guess = Math.floor((Math.random() * 120) + 19);
//reset function so game starts with new random value
$(document).ready(function(){
//random number generator for the guess variable. (visible on click)
    $("#random-number").click(function (){
    document.getElementById("random-number").innerHTML = guess;
        console.log(guess);
    });



//random number generator for each crystal button. (hidden)
//I think an object could be used here? Not sure on the syntax...trying to attach a random value to each of the buttons indiv.
crystal.attr("data-crystalvalue", buttons);

    //on click, each number is added in the "score" variable.
    $(".crystal").click(function (){
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
        score += crystalValue;
      });


    });
//if score === guess, "you win" displayed and a win is added to win var.
if (score === guess){
    document.getElementById("message").innerHTML("You Win!");
    wins++;
    console.log(wins)
}
//else if score > guess, "you lose" displayed and a loss is added to loss var. 
else if (score > guess){
    document.getElementById("message").innterHTML("You Lose!");
    losses++;
}
//when win/lose is populated, new random numbers are generated.
    //score is back to 0, new random number shown in guess var.
