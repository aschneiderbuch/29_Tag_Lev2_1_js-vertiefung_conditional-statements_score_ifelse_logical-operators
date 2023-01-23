console.log("test?");

/* 
Frage

Spieler 1 = John        170 cm 2 j
Spieler 2 = Meike       168 cm 34 j


punkte für Größe und Alter

Alter * 5
        0. alle Variablen reinholen
        0.4 eventListener
        0.6 Funktion = pruefeUnterschied
        1. rechnet spieler 1 aus 
        2. rechnet spieler 2 aus



mit if else if else         wer mehr Punkte hat
        3. ergebnisse von spieler 1 und spieler 2 werden verglichen
        4. es findet output in html statt

Gewinner ausgeben mit Punkten
    mit Unterschiedlichen farben
*/


// Variablen
let spieler1Name = document.querySelector("#spieler1Name");
let spieler1Groesse = document.querySelector("#spieler1Groesse");
let spieler1Alter = document.querySelector("#spieler2Alter");

let spieler2Name = document.querySelector("#spieler2Name");
let spieler2Groesse = document.querySelector("#spieler2Groesse");
let spieler2Alter = document.querySelector("#spieler2Alter");

let buttonVergleich = document.querySelector("#buttonVergleich");

let outputFeld = document.querySelector("#outputFeld");


// Eventlistener
buttonVergleich.addEventListener("click", pruefeUnterschied);


// Funktion
function pruefeUnterschied(){
    
}