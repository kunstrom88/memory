
// AddEventListeners for each option
const header = document.querySelector("header");
const main = document.querySelector("#main");
const onePiece = document.querySelector('#onePiece');
const naruto = document.querySelector('#naruto');
const bleach = document.querySelector('#bleach');
const demonSlayer = document.querySelector('#demonSlayer');
const digimon = document.querySelector('#digimon');

onePiece.addEventListener("click", onePieceFunction);
naruto.addEventListener("click", narutoFunction);
bleach.addEventListener("click", bleachFunction);
demonSlayer.addEventListener("click", demonSlayerFunction);
digimon.addEventListener("click", digimonFunction);

// Functions for each option
function onePieceFunction() {
document.body.removeChild(header);
document.body.removeChild(main);
document.body.appendChild(mainOnePiece);
}

function narutoFunction() {
document.body.removeChild(header);
document.body.removeChild(main);
document.body.appendChild(mainNaruto);
}

function bleachFunction() {
document.body.removeChild(header);
document.body.removeChild(main);
document.body.appendChild(mainBleach);
}

function demonSlayerFunction() {
document.body.removeChild(header);
document.body.removeChild(main);
document.main.appendChild(mainDemonSlayer);
}

function digimonFunction() {
document.body.removeChild(header);
document.body.removeChild(main);
document.main.appendChild(mainDigimon);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}