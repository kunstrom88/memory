
// MAIN CONTAINER
const mainBleach = document.createElement("main"); // contenedor principal que contiene el board de bleach
mainBleach.className = "mainBleach";

// BOARD SECTION
const sectionBoardBleach = document.createElement("section"); // board-grid 4x4 de bleach
sectionBoardBleach.className = "board-grid";
mainBleach.appendChild(sectionBoardBleach);

// we create the board with all images
const imagesBleachDouble = imagesBleach.concat(imagesBleach); // tenemos el array de imágenes (imagesBleach) y lo duplicamos (imagesBleachDouble)
shuffleArray(imagesBleachDouble); // utilizamos la función para mezclar las imágenes duplicadas
const numCardsBleach = 16; // máximo de cartas
const fragmentBleach = document.createDocumentFragment(); // creamos un contenedor temporal vacío para agregar después, dinámicamente, todas las imágenes

const defaultCardBleach = "/assets/img/dorso.png";
for (let i = 1; i <= numCardsBleach; i++) { // con este loop  añadimos a todas las cartas (divs) las clases de card y card-n. Lo guardamos en cardBleach
    const cardBleach = document.createElement('div');
    cardBleach.className ='card', `card-${i}`; 

    cardBleach.addEventListener('click', function() { // Agregamos un controlador de eventos para cambiar la imagen de fondo de la carta y el color de fondo correspondiente en el evento click
        cardBleach.style.backgroundImage = `url(${imagesBleachDouble[i-1]})`; // cambiamos la imagen de fondo de la carta a la imagen correspondiente en el array imagesBleachDouble
        cardBleach.style.backgroundColor = imageColorsBleach[imagesBleachDouble[i-1]]; // cambiamos el color de fondo de la carta al color correspondiente en el array imageColorsBleachPiece
    });

    fragmentBleach.appendChild(cardBleach); // Añadimos cada cardBleach a cada contenedor de fragmentBleach correspondiente
}

sectionBoardBleach.appendChild(fragmentBleach); //Añadimos el conteneodor de fragmentBleach como hijo de sectionBoardBleach, creando el tablero