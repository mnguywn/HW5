var inputNum = prompt("Please enter five numbers separated by spaces (from 1-48):", "");
var inputBall = prompt("Please enter a Lucky Ball number (from 1-18):", "");

//function to randomize numbers
var randomNumber = function(min, max) {
    var num = Math.floor(Math.random()*(max-min +1)+min);
    return num;
}
//put the numbers into an array while randomizing
var lotNums = [randomNumber(01,48), randomNumber(01,48), randomNumber(01,48), randomNumber(01,48), 
    randomNumber(01,48)];

    lotNums.sort();

//randomize lucky ball number
var luckyNum = [randomNumber(01,18)];

//create loop to go through entered numbers to match with array numbers
var inputLot = inputNum.split(" ");
var count = 0; //count the number of number that are the same

//loop to compare normal numbers
for (var i = 0; i < lotNums.length; i++) { //goes through randomized array
    for (var j = 0; j < inputLot.length; j++) { //goes through input string
        if (lotNums[i] == inputLot[j]) {
            count += 1;
            break;
        }
    }
}


