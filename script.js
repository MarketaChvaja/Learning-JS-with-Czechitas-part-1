// console.log("Hello world!!!");

// let vek = 31;

//let jmeno;
//jmeno = "Markéta";

// alert("Jmenuji se " + jmeno + " a je mi " + vek + " let.");


/*
// HOW OLD IS USER? 
let vekUzivatele;
vekUzivatele = prompt("Zadej svůj věk:");

console.log("Věk uživatele je: " + vekUzivatele);

// ACCESS ONLY FOR USERS 18+
if (vekUzivatele < 18) {
    alert("Zákaz vstupu na tento web!")
} else {
    console.log("Přístup povolen!")
};

//WHO IS HEAVIER?
let vahaAsterix = 55;
let vahaObelix = prompt("Zadej váhu Obelixe v kilogramech:");

console.log("Váha Asterixe je: " + vahaAsterix);
console.log("Váha Obelixe je: " + vahaObelix);

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

// WHO IS OLDER? -- WHERE IS BUG?

let vekAsterix = 20;
let vekObelix = prompt("Zadej odhadovaný věk Obelixe:");
let vekPanoramix = 84;

console.log("Věk Asterixe je " + vekAsterix + " let, věk Obelixe je " + vekObelix + "let a věk druida Panoramixe je " + vekPanoramix + "let.")

let vekGalu = vekAsterix + vekObelix;

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


//CYKLY FOR, WHILE

for (let i = 1; i < 5; i++) {
    console.log(i + ". Říman")
}
;
