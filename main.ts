#! /usr/bin/env node 

import inquirer from "inquirer";

const randomNUmber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([{

    name: "userGuessedNumber",
    type: "number",
    message: "PLease guess a number between 1-6: ",
},
])

if (answer.userGuessedNumber === randomNUmber){


    console.log("Congrats! you guessed the correct number");
}

else{
    console.log("You guessed the wrong number!");
    console.log("The correct number was: ", randomNUmber);
}
