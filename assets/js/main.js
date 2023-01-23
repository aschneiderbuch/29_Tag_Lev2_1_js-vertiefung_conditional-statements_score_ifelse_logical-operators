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
let spieler1Alter = document.querySelector("#spieler1Alter");

let spieler2Name = document.querySelector("#spieler2Name");
let spieler2Groesse = document.querySelector("#spieler2Groesse");
let spieler2Alter = document.querySelector("#spieler2Alter");

let buttonVergleich = document.querySelector("#buttonVergleich");

let outputFeld = document.querySelector("#outputFeld");


// Eventlistener
buttonVergleich.addEventListener("click", pruefeUnterschied);


// Funktion
function pruefeUnterschied(){
    console.log("pruefeUnterschied function wird aufgerufen");
    let ergebnissVergleich = 0; // = Name wer ist der Sieger
    let ergebnissPunkteSpieler1 = 0; // = wieviel Gesamtpunkte hat Spieler 1
    let ergebnissPunkteSpieler2 = 0; // = wieviel Gesamtpunkte hat Spieler 2                    

    ergebnissPunkteSpieler1 =( parseInt(spieler1Alter.value)*5 + parseInt(spieler1Groesse.value));
    console.log(spieler1Alter.value);
    console.log(spieler1Groesse.value);
    console.log(ergebnissPunkteSpieler1);
    
    ergebnissPunkteSpieler2 = ( parseInt(spieler2Alter.value)*5 + parseInt(spieler2Groesse.value));
    console.log(spieler2Alter.value);
    console.log(spieler2Groesse.value);
    console.log(ergebnissPunkteSpieler2);



        if(ergebnissPunkteSpieler1 > ergebnissPunkteSpieler2){
            ergebnissVergleich = ("Der Sieger ist " + spieler1Name.value + " und hat " + ergebnissPunkteSpieler1 + " Punkte");
        }
        else if(ergebnissPunkteSpieler1 < ergebnissPunkteSpieler2){
            ergebnissVergleich = ("Der Sieger ist " + spieler2Name.value + " und hat " + ergebnissPunkteSpieler2 + " Punkte");
        }
        else if (ergebnissPunkteSpieler1 === ergebnissPunkteSpieler2){
            ergebnissVergleich = ("Es ist unentschieder, weder " + spieler1Name.value + " noch " + spieler2Name.value + " hat gewonnen");
        }
        else {ergebnissVergleich = ("Fehler !!! Ungültig, das Spiel muss wiederholt werden.")}


        outputFeld.innerHTML = ergebnissVergleich;
        outputFeld.style.color = "green";
        outputFeld.classList.add("js_backgroundColorSieger");
}