// const readline = require("readline-sync")

import readline from "readline-sync";

let fullName = readline.question("what is your name ? :")
console.log(`my name is ${fullName}`);

let age = readline.questionInt("what is yuor age ?")
if(age>100){
    console.log("invalid age ");
}
let email = readline.questionEMail("type your emal")
console.log(`MY EMAIL IS  ${email} `);
let colledge=readline.question("name of college")
console.log(`my clg name is  ${colledge}`);