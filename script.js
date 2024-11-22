document.addEventListener('DOMContentLoaded', () => {

    // Tároló változó a felhasználó választására
    let userChoice = "";
    let computerChoice = "";
    let Result = "";
 
    // Gombok kiválasztása a html-ben megadott id-k alapján
    const rockButton = document.getElementById('rock-btn');
    const paperButton = document.getElementById('paper-btn');
    const scissorsButton = document.getElementById('scissors-btn');

    // A kiválasztott elem értékét kiírjuk alulra.
    const outputChoiceUser = document.getElementById('outputChoiceUser');
    const outputChoiceComputer = document.getElementById('outputChoiceComputer');
    const outputResult = document.getElementById('outputResult');
    
    // Ellenőrzés és eseményfigyelők hozzáadása a gombokhoz
    if (rockButton) {
        rockButton.addEventListener('click', () => {
            userChoice = "rock"; // Beállítjuk a választást
            displayChoice(userChoice); // Visszajelzés a választásról

            // A felhasználó választása
            console.log("User chose: " + userChoice);
            checking();
        });
    } else { 
        console.error('Element with id "rock-btn" not found!');
    }

    if (paperButton) {
        paperButton.addEventListener('click', () => {
            userChoice = "paper"; // Beállítjuk a választást
            displayChoice(userChoice);

            // A felhasználó választása
            console.log("User chose: " + userChoice);
            checking();
        });
    } else { 
        console.error('Element with id "paper-btn" not found!');
    }

    if (scissorsButton) {
        scissorsButton.addEventListener('click', () => {
            userChoice = "scissors"; // Beállítjuk a választást
            displayChoice(userChoice);

            // A felhasználó választása
            console.log("User chose: " + userChoice);
            checking();
        });
    } else { 
        console.error('Element with id "scissors-btn" not found!');
    }

    // Funkció a választás kijelzésére
    function displayChoice(choice) {
    document.getElementById("outputChoiceUser").innerText = `You chose: ${choice}`;
    }

    function displayChoiceComputer(choice) {
        document.getElementById("outputChoiceComputer").innerText = `Computer chose: ${choice}`;
    }


    // Gépi választás véletlenszerű generálása
    function getComputerChoice() {
    // Lehetőségek listája
    const choices = ["rock", "paper", "scissors"];

    // Véletlenszerű index kiválasztása a choices tömbből
    const randomIndex = Math.floor(Math.random() * choices.length);

    // A választás visszaadása
    return choices[randomIndex];
    }

    // Leellenőrizzük az eredményt.
    function checking() {
        computerChoice = getComputerChoice();
        // Tesztelés: a gép választása
        console.log("Computer chose: " + computerChoice);

    
        // Eredmény meghatározása
        if (userChoice == computerChoice) {
            // Kiíratom a gép választását.
            displayChoiceComputer(computerChoice);

            console.log("Draw!");
            outputResult.innerText = "Draw!";

        } else if (userChoice == "rock" && computerChoice == "paper" ||
            userChoice == "paper" && computerChoice == "scissors" ||
            userChoice == "scissors" && computerChoice == "rock") {
            // Kiíratom a gép választását.
            displayChoiceComputer(computerChoice);

            console.log("Computer is win!");          
            /*Az innerText-el frissítjük a HTML elem tartalmát, hogy az eredményt láthassa a felhasználó. 
            Frissíteni kell a DOM elemet, hogy az megjelenjen az oldalon.*/
            outputResult.innerText = "Computer is win!";            
        } else {
            // Kiíratom a gép választását.
            displayChoiceComputer(computerChoice);

            console.log("You win!");

            //innerText -> Frissíti a DOM-ot.
            outputResult.innerText = "You win!";
        }
    }
    
    
});