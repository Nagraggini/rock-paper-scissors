/*Ez a legfontosabb rész, mert,ha a html előtt nem töltődik be a javascript kód, akkor nem fogod látni bármit írsz ide.
 A kapcsos zárójelek közé másold be a js kódodat.*/
document.addEventListener('DOMContentLoaded', () => {
   
// Gombok kiválasztása a html-ben megadott id-k alapján.
const rockButton = document.getElementById('rock-btn');
const paperButton = document.getElementById('paper-btn');
const scissorsButton = document.getElementById('scissors-btn');

// A kiválasztott elem értékét kiírjuk alulra.
const output = document.getElementById('output');

// Ellenőrzés és eseményfigyelők hozzáadása a gombokhoz
if (rockButton) {
    rockButton.addEventListener('click', () => {
        output.textContent = 'You choose: Rock!';
    });
} else { //Ha nincs meg a gomb, akkor kiírjuk a console-ra a hibát.
    console.error('Element with id "rock-btn" not found!');
}

if (paperButton) {
    paperButton.addEventListener('click', () => {
        output.textContent = 'You choose: Paper!';
    });
} else { //Ha nincs meg a gomb, akkor kiírjuk a console-ra a hibát.
    console.error('Element with id "paper-btn" not found!');
}

if (scissorsButton) {
    scissorsButton.addEventListener('click', () => {
        output.textContent = 'You choose: Scissors!';
    });
} else { //Ha nincs meg a gomb, akkor kiírjuk a console-ra a hibát.
    console.error('Element with id "scissors-btn" not found!');
}

  // Második eseménykezelő ugyanarra az eseményre
  rockButton.addEventListener('click', () => {
    console.log('A gombra kattintottak!');
  });

});
