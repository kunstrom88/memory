
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
const flippedCards = [];
const defaultCardOne = "/assets/img/dorso.png";
for (let i = 1; i <= numCardsOne; i++) { // con este loop  añadimos a todas las cartas (divs) las clases de card y card-n. Lo guardamos en cardOne
    const cardOne = document.createElement('div');
    cardOne.className ='card', `card-${i}`; 

    cardOne.addEventListener('click', function(event) { // Agregamos un controlador de eventos para cambiar la imagen de fondo de la carta y el color de fondo correspondiente en el evento click
        
        const card = event.target.closest(".card"); //Fijamos que el objetivo de los clicks solo sean las cartas mediante la clase card, ignorando el board
        
               
       
        if(card  && flippedCards.length<2 && !card.classList.contains("flipped")){
            card.classList.add("flipped");
            cardOne.style.backgroundImage = `url(${imagesOnePieceDouble[i-1]})`; // cambiamos la imagen de fondo de la carta a la imagen correspondiente en el array imagesOnePieceDouble
            cardOne.style.backgroundColor = imageColorsOnePiece[imagesOnePieceDouble[i-1]]; // cambiamos el color de fondo de la carta al color correspondiente en el array imageColorsOnePiece
            
            flippedCards.push(card);

            if(flippedCards.length === 2){

                if(flippedCards[0].style.backgroundImage === flippedCards[1].style.backgroundImage){
                   
                    imagesOnePiece.forEach((image)=>{
                       
                        if(flippedCards[0].style.backgroundImage === `url("${image}")`){
                           
                            const position = imagesOnePiece.indexOf(image);

                            flippedCards.forEach((flippedCard)=>{

                                flippedCard.style.backgroundImage = `url(${imagesOnePieceFunny[position]})`;
                                
                            })
                                                     
                        }
                       
                    });
                    flippedCards.length = 0; //reseteamos el array flippedCards para que nops deje seguir jugando
                }else{
                                 
                 setTimeout(()=>{

                    flippedCards.forEach((flippedCard)=>{

                        flippedCard.style.backgroundImage = "url('/assets/img/dorso.png')";
                        flippedCard.classList.remove("flipped");

                    });

                    flippedCards.length = 0;
                    
                 },1000);
                 
                };
    
            }
        }   
    });

    fragmentOne.appendChild(cardOne); // Añadimos cada cardOne a cada contenedor de fragmentOne correspondiente
}

sectionBoardOnePiece.appendChild(fragmentOne); //Añadimos el conteneodor de fragmentOne como hijo de sectionBoardOnePiece, creando el tablero