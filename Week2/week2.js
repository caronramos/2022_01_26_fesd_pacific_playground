var numberOfCats = prompt("How many cats do you have?");
numberOfCats = parseInt(numberOfCats);

if(numberOfCats === 3) {
    alert("We can be friends.");
}
else if(numberOfCats === 4) {
    alert("Come back when you have more cats");
}
else if(numberOfCats > 50) {
    alert("You need help")
} 
else {
    alert("Go away!");
}

// for loop
for(var i = 0; i < numberOfCats; i++) {
    console.log("I like your cat")
}

while(numberOfCats < 3) {
    numberOfCats = numberOfCats + 1;
    // numberOfCats += 1
    // numberOfCats++
    console.log("Here's another cat");
}

alert("Now you have " + numberOfCats + " cats")


// pick some number
var number = 7;
var guess;

// loop while they have the wrong answer
do {
    // ask the user to guess what number you are thinking of
    guess = prompt("Wrong answer. What number am I thinking of?");
    guess = parseInt(guess);
} while(number !== guess)

// Tell them that they got the answer correct
alert("You did it!")