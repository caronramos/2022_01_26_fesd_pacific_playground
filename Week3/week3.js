
// Racing

function startRiggedRace(riggedWinner, riggedLoser) {
  var racers = [riggedWinner];

  // Other ways we could add the rigged Winner
  //racers.splice(0, 0, riggedWinner);
  //racers.unshift(riggedWinner);
  //racers.push(riggedWinner);

  racers.push("Simone");
  racers.push("Maria");
  racers.push("Jose");
  racers.push("Bob");

  racers.splice(racers.length, 0, riggedLoser);
  // Other ways we could add the rigged loser
  //racers.push(riggedLoser);

  var winner = racers[0];
  var loser = racers[ racers.length - 1 ];
  alert(winner + " won the race! " + loser + " lost the race!");

  var message = "Here are the results:\n\n";

  for(let i = 0; i < racers.length; i++) { // i = 0, 1, 2, 3, 4, 5
      var racer = racers[i];
      message += (i + 1) + " - " + racer +"\n";
  }

  for(var racer of racers) {
      message += (i + 1) + " - " + racer +"\n";
  }

  alert(message);

  console.log(racers);
}

// Cooking

var wantDinner = prompt("Do you want dinner?");
if(wantDinner === "yes") {
  var dinner = cookChickenDinner();
  alert(dinner);
}

function cookRecipe(ingredients) {
  var dinner = "";
  for(var food of ingredients) {
      dinner += cookInInstantPot( food, 10) +"\n";
  }
  return dinner;
}

function cookChickenDinner() {
  var chicken = "chicken";
  var rice = "rice";
  chicken = cookInInstantPot(chicken, 10); 
  rice = cookInInstantPot(rice, 20);
  return "Dinner:\n" + chicken + "\n" + rice;
}

function cookInInstantPot(food, time) { // var food = "chicken"; var time = 10;
  var cookedFood = food + " cooked for " + time + " minutes";
  return cookedFood;
}

var chicken = cookInInstantPot("chicken", 10);

console.log(chicken);

// Saying Hello

function sayHi() {
  return "Hello!";
}

alert( sayHi() );