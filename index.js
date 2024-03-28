#! /usr/bin/cnv node 
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        message: "Please Guess a Number b/w 1 to 10. ",
        name: "userGuessedNumber",
        type: "number",
    }
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You guessed a right Number!");
}
else {
    console.log("You guessed Wrong Number!");
}
