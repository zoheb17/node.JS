import readline from "readline-sync";


let fname= readline.question("🧑‍🦰 enter your namee")
let age = readline.questionInt("🍰 enter your age")
let coding = readline.question("🧑‍💻 do you like coding? [y/n]")
console.log("--------summary----");
console.log(`name ${fname} `);
console.log(`age ${age} `);
if(coding == "y"){
    console.log("i like coding : yes");
}else {
    console.log("likes codin :no");
}



