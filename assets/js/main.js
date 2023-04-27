
//AddEventListeners for each option
const header = document.querySelector("header");
const buttonOne = document.querySelector('#onePiece');
buttonOne.addEventListener("click", onePieceFunction);

// const buttonNar = document.querySelector('#naruto');
// buttonNar.addEventListener("click", narutoFunction);

// const buttonBle = document.querySelector('#bleach');
// buttonBle.addEventListener("click", bleachFunction);

// const buttonDig = document.querySelector('#digimon');
// buttonOne.addEventListener("click", digimonFunction);

// const buttonDem = document.querySelector('#demonSlayer');
// buttonOne.addEventListener("click", demonSlayerFunction);




//Functions for each option
function onePieceFunction() {
document.body.removeChild(header);
document.main.appendChild(sectionOnePiece);
}

// function narutoFunction() {
//     main.removeChild(sectionMemory);
//     main.appendChild(sectionNaruto);
// }

// function bleachFunction() {
//     main.removeChild(sectionMemory);
//     main.appendChild(sectionBleach);
// }

// function demonSlayerFunction() {
//     main.removeChild(sectionMemory);
//     main.appendChild(sectionDemonSlayer);
// }

// function digimonFunction() {
//     main.removeChild(sectionMemory);
//     main.appendChild(sectionDigimon);
// }