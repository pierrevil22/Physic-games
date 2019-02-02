var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

var losses = 0;
var wins = 0;
var numGuesses = 9;
var guessChoices = [];

document.onkeyup = function(event) {

    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w","x", "y", "z",]; 
    
    var userGuess = event.key;

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    

   if (options.indexOf(userGuess) > -1) {

        if (numGuesses === 0) {
            numGuesses = 9;
            losses ++;
            guessChoices = [];
        }
        
        if (userGuess === computerGuess) {
           wins++;
           numGuesses = 9;
           guessChoices = [];
       }

       if (userGuess != computerGuess) {
           numGuesses --;
           guessChoices.push(userGuess);
       }

       

   var html = 
   "<p>Guess what letter I'm thinking of!</p>" +
   "<h1> The Psychic Game </h1>" +
   "<p>Losses: " + losses + "</p>" +
   "<p>Wins: " + wins + "</p>" +
   "<p>Guesses Left: " + numGuesses + "</p>" +
   "<p>Your Guesses so far: " + guessChoices.join(", ") + "</p>";

   document.querySelector("#game").innerHTML = html;

   
   }
};