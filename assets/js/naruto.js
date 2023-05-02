// MAIN CONTAINER
const mainNaruto = document.createElement("main"); // contenedor principal que contiene el board de Naruto
mainNaruto.className = "mainNaruto ";

// BOARD SECTION
const sectionBoardNaruto = document.createElement("section"); // board-grid 4x4 de Naruto
sectionBoardNaruto.className = "board-grid";
mainNaruto.appendChild(sectionBoardNaruto);

// we create the board with all images
const imagesNarutoDouble = imagesNaruto.concat(imagesNaruto); // tenemos el array de imágenes (imagesNaruto) y lo duplicamos (imagesNarutoDouble)
shuffleArray(imagesNarutoDouble); // utilizamos la función para mezclar las imágenes duplicadas
const numCardsNaruto = 16; // máximo de cartas
const fragmentNaruto = document.createDocumentFragment(); // creamos un contenedor temporal vacío para agregar después, dinámicamente, todas las imágenes
const flippedCardsNaruto = [];
const defaultCardNaruto = "/assets/img/dorso.png";
for (let i = 1; i <= numCardsNaruto; i++) { // con este loop  añadimos a todas las cartas (divs) las clases de card y card-n. Lo guardamos en cardNaruto
    const cardNaruto = document.createElement('div');
    cardNaruto.className ='card', `card-${i}`; 

    cardNaruto.addEventListener('click', function(event) { // Agregamos un controlador de eventos para cambiar la imagen de fondo de la carta y el color de fondo correspondiente en el evento click
        
        const card = event.target.closest(".card"); //Fijamos que el objetivo de los clicks solo sean las cartas mediante la clase card, ignorando el board
        
               
       
        if(card  && flippedCardsNaruto.length<2 && !card.classList.contains("flipped")){
            card.classList.add("flipped");
            cardNaruto.style.backgroundImage = `url(${imagesNarutoDouble[i-1]})`; // cambiamos la imagen de fondo de la carta a la imagen correspondiente en el array imagesNarutoDouble
            cardNaruto.style.backgroundColor = imageColorsNaruto[imagesNarutoDouble[i-1]]; // cambiamos el color de fondo de la carta al color correspondiente en el array imageColorsNaruto
            
            flippedCardsNaruto.push(card);

            if(flippedCardsNaruto.length === 2){

                if(flippedCardsNaruto[0].style.backgroundImage === flippedCardsNaruto[1].style.backgroundImage){
                   
                    imagesNaruto.forEach((image)=>{
                       
                        if(flippedCardsNaruto[0].style.backgroundImage === `url("${image}")`){
                           
                            const position = imagesNaruto.indexOf(image);

                            flippedCardsNaruto.forEach((flippedCard)=>{

                                flippedCard.style.backgroundImage = `url(${imagesNarutoFunny[position]})`;
                                
                            })
                                                     
                        }
                       
                    });
                    flippedCardsNaruto.length = 0; //reseteamos el array flippedCardsNaruto para que nops deje seguir jugando
                }else{
                                 
                 setTimeout(()=>{

                    flippedCardsNaruto.forEach((flippedCard)=>{

                        flippedCard.style.backgroundImage = "url('/assets/img/dorso.png')";
                        flippedCard.classList.remove("flipped");

                    });

                    flippedCardsNaruto.length = 0;
                    
                 },1000);
                 
                };
    
            }
        }   
    });

    fragmentNaruto.appendChild(cardNaruto); // Añadimos cada cardNaruto a cada contenedor de fragmentNaruto correspondiente
}

sectionBoardNaruto.appendChild(fragmentNaruto); //Añadimos el conteneodor de fragmentNaruto como hijo de sectionBoardNaruto, creando el tablero