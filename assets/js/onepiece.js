
// MAIN CONTAINER
const mainOnePiece = document.createElement("main"); // contenedor principal que contiene el board de one piece
mainOnePiece.className = "mainOnePiece ";

// BOARD SECTION
const sectionBoardOnePiece = document.createElement("section"); // board-grid 4x4 de one piece
sectionBoardOnePiece.className = "board-grid";
mainOnePiece.appendChild(sectionBoardOnePiece);

// we create the board with all images
const imagesOnePieceDouble = imagesOnePiece.concat(imagesOnePiece); // tenemos el array de imágenes (imagesOnePiece) y lo duplicamos (imagesOnePieceDouble)
shuffleArray(imagesOnePieceDouble); // utilizamos la función para mezclar las imágenes duplicadas
const numCardsOne = 16; // máximo de cartas
const fragmentOne = document.createDocumentFragment(); // creamos un contenedor temporal vacío para agregar después, dinámicamente, todas las imágenes

const defaultCardOne = "/assets/img/dorso.png";
for (let i = 1; i <= numCardsOne; i++) { // con este loop  añadimos a todas las cartas (divs) las clases de card y card-n. Lo guardamos en cardOne
    const cardOne = document.createElement('div');
    cardOne.className ='card', `card-${i}`; 

    cardOne.addEventListener('click', function() { // Agregamos un controlador de eventos para cambiar la imagen de fondo de la carta y el color de fondo correspondiente en el evento click
        cardOne.style.backgroundImage = `url(${imagesOnePieceDouble[i-1]})`; // cambiamos la imagen de fondo de la carta a la imagen correspondiente en el array imagesOnePieceDouble
        cardOne.style.backgroundColor = imageColorsOnePiece[imagesOnePieceDouble[i-1]]; // cambiamos el color de fondo de la carta al color correspondiente en el array imageColorsOnePiece
    });

    fragmentOne.appendChild(cardOne); // Añadimos cada cardOne a cada contenedor de fragmentOne correspondiente
}

sectionBoardOnePiece.appendChild(fragmentOne); //Añadimos el conteneodor de fragmentOne como hijo de sectionBoardOnePiece, creando el tablero


// // SCORE SECTION
// const sectionScore = document.createElement("section");
// sectionScore.className = "sectionScore";
// mainOnePiece.appendChild(sectionScore);

// // title score section
// const titleScore = document.createElement("title");
// titleScore.className = "titleScore";
// titleScore.textContent =  "Your score";
// sectionScore.appendChild(titleScore);

// // CLIKS SECTION
// const divClicks = document.createElement("div");
// divClicks.className = "divClicks";
// sectionScore.appendChild(divClicks);

// // TIMER DIV
// const divTimer = document.createElement("div");
// divTimer.className = "divTimer";
// sectionScore.appendChild(divTimer);

// // CARD DIV-1
// const divCardOnepiece1 = document.createElement("div");
// divCardOnepiece1.className = "divCard";
// divCardOnepiece1.id = "divCard1";
// sectionBoardOnepiece.appendChild(divCardOnepiece1);

// const img = document.createElement('img');
// img.src = 'assets/img/onepiece/chopper.png';
// sectionBoardOnepiece.appendChild(img);

// imgBack = document.createElement('img')
// mainOnePiece.appendChild(divCardOnepiece1);
// imgBack = document.createElement('img')

// // CARD DIV-2
// const divCardOnepiece2 = document.createElement("div");
// divCardOnepiece2.className = "divCard";
// divCardOnepiece2.id = "divCardOp2";
// mainOnePiece.appendChild(divCardOnepiece2);

// // CARD DIV-3
// const divCardOnepiece3 = document.createElement("div");
// divCardOnepiece3.className = "divCard";
// divCardOnepiece3.id = "divCardOp3";
// mainOnePiece.appendChild(divCardOnepiece3);

// // CARD DIV-4
// const divCardOnepiece4 = document.createElement("div");
// divCardOnepiece4.className = "divCard";
// divCardOnepiece4.id = "divCardOp4";
// mainOnePiece.appendChild(divCardOnepiece4);

// // CARD DIV-5
// const divCardOnepiece5 = document.createElement("div");
// divCardOnepiece5.className = "divCard";
// divCardOnepiece5.id = "divCardOp5";
// mainOnePiece.appendChild(divCardOnepiece5);

// // CARD DIV-6
// const divCardOnepiece6 = document.createElement("div");
// divCardOnepiece6.className = "divCard";
// divCardOnepiece6.id = "divCardOp6";
// mainOnePiece.appendChild(divCardOnepiece6);

// // CARD DIV-7
// const divCardOnepiece7 = document.createElement("div");
// divCardOnepiece7.className = "divCard";
// divCardOnepiece7.id = "divCardOp7";
// mainOnePiece.appendChild(divCardOnepiece7);

// // CARD DIV-8
// const divCardOnepiece8 = document.createElement("div");
// divCardOnepiece8.className = "divCard";
// divCardOnepiece8.id = "divCardOp8";
// mainOnePiece.appendChild(divCardOnepiece8);

// // CARD DIV-9
// const divCardOnepiece9 = document.createElement("div");
// divCardOnepiece9.className = "divCard";
// divCardOnepiece9.id = "divCardOp9";
// mainOnePiece.appendChild(divCardOnepiece9);

// // CARD DIV-10
// const divCardOnepiece10 = document.createElement("div");
// divCardOnepiece10.className = "divCard";
// divCardOnepiece10.id = "divCardOp10";
// mainOnePiece.appendChild(divCardOnepiece10);

// // CARD DIV-11
// const divCardOnepiece11 = document.createElement("div");
// divCardOnepiece11.className = "divCard";
// divCardOnepiece11.id = "divCardOp11";
// mainOnePiece.appendChild(divCardOnepiece11);

// // CARD DIV-12
// const divCardOnepiece12 = document.createElement("div");
// divCardOnepiece12.className = "divCard";
// divCardOnepiece12.id = "divCardOp12";
// mainOnePiece.appendChild(divCardOnepiece12);

// // CARD DIV-13
// const divCardOnepiece13 = document.createElement("div");
// divCardOnepiece13.className = "divCard";
// divCardOnepiece13.id = "divCardOp13";
// mainOnePiece.appendChild(divCardOnepiece13);

// // CARD DIV-14
// const divCardOnepiece14 = document.createElement("div");
// divCardOnepiece14.className = "divCard";
// divCardOnepiece14.id = "divCardOp14";
// mainOnePiece.appendChild(divCardOnepiece14);

// // CARD DIV-15
// const divCardOnepiece15 = document.createElement("div");
// divCardOnepiece15.className = "divCard";
// divCardOnepiece15.id = "divCardOp15";
// mainOnePiece.appendChild(divCardOnepiece15);

// // CARD DIV-16
// const divCardOnepiece16 = document.createElement("div");
// divCardOnepiece16.className = "divCard";
// divCardOnepiece16.id = "divCardOp16";
// mainOnePiece.appendChild(divCardOnepiece16);
