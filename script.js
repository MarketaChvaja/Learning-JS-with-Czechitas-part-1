/*
// CONSOLE


console.log("Hello world!!!");


let vek = 31;

let jmeno;
jmeno = "Markéta";

alert("Jmenuji se " + jmeno + " a je mi " + vek + " let.");
*/


/*
// HOW OLD IS USER? - PROMPTS, CONSOLE


let vekUzivatele;
vekUzivatele = prompt("Zadej svůj věk:");

console.log("Věk uživatele je: " + vekUzivatele);

// ACCESS ONLY FOR USERS 18+

if (vekUzivatele < 18) {
    alert("Zákaz vstupu na tento web!")
} else {
    console.log("Přístup povolen!")
};
*/


/*
//WHO IS HEAVIER? - CONDITIONS, VARIABLES... 

let vahaAsterix = 55;
// user must put the weight in
let vahaObelix = prompt("Zadej váhu Obelixe v kilogramech:");

// console prints the weights of both persons
console.log("Váha Asterixe je: " + vahaAsterix);
console.log("Váha Obelixe je: " + vahaObelix);


//conditions - The program compares the weight of two characters and a druid, 
// and prints the answer of who is heavier, and based on who is heavier, 
// it provides different responses
if (vahaAsterix > vahaObelix) {
    console.log ("Asterix je těžší než Obelix.")    
} 
else if (vahaObelix > vahaAsterix) {
    console.log("Obelix je těžší než Asterix.")
} 
else {
    console.log("Oba dva Galové váží stejně.")
}
;

*/

/*
// WHO IS OLDER? - conditions

let vekAsterix = 20;

let dotazVekObelix = prompt("Zadej odhadovaný věk Obelixe:");
let vekObelix = Number(dotazVekObelix);
let vekPanoramix = 84;

console.log("Věk Asterixe je " + vekAsterix + " let, věk Obelixe je " + vekObelix + " let a věk druida Panoramixe je " + vekPanoramix + " let.")

let vekGalu = vekAsterix + vekObelix;

console.log("vekAsterix", vekAsterix);
console.log("vekObelix", vekObelix);
console.log("vekGalu", vekGalu);
console.log("vekPanoramix", vekPanoramix);
if (vekGalu < vekPanoramix) {
console.log("Panoramix je starší než oba dva Galové dohromady.")
}
else if (vekGalu === vekPanoramix) {
console.log("Panoramix je stejně starý jako oba dva Galové dohromady.")
}
else {
console.log("Věk Asterixe a Obelixe v součtu je větší než věk druida Panoramixe.")
}
;
*/

/*
//CYKLES FOR, WHILE

  for (let i = 1; i < 5; i++) {
      console.log(i + ". Říman")
  }
  ;
*/


/*
let opakuj = true;
while (opakuj) {
    let hod = Math.ceil(Math.random() * 6);   // let hod = getRandomInt (1, 6);
    console.log("hod", hod);

    if (hod == 6) {
        opakuj = false;
    }
}
;
*/

//Create a cycle (for or while) that outputs numbers from 10 to 1.


//FOR CYCLE
/*
for (let i = 10; i > 0; i = i - 1) {
     console.log(i)
}
;
*/


//WHILE CYCLE
/*
let number = 10;

while (number >= 1) {
    console.log("number", number);
    number = number - 1;
}
;
*/

// Create two variables and store a number in each, 
// representing the start and end of an interval. 
// Write a loop (for, while)
// that prints the even numbers within this interval.



// let intervalStart = 5;
// let intervalEnd = 16;



let intervalStart = 5;
let intervalEndPrompt = prompt("Zadej libovolné číslo od 10 do 20 včetně.");
let intervalEnd = Number(intervalEndPrompt);

//WHILE CYCLE

/*
console.log("intervalStart", intervalStart);
console.log("intervalEnd", intervalEnd);

let number = intervalStart;

while (number <= intervalEnd) {
    if (number % 2 === 0) {
        console.log("number", number);
        
    }
    number++
}
*/

//FOR CYCLE

for (number = intervalStart; number <= intervalEnd; number++) {
    if (number % 2 === 0) {
        console.log("No.", number)
    }

};