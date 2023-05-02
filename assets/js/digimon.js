// MAIN CONTAINER
const mainDigimon = document.createElement("main"); // contenedor principal que contiene el board de digimon
mainDigimon.className = "mainDigimon ";

// BOARD SECTION
const sectionBoardDigimon = document.createElement("section"); // board-grid 4x4 de digimon
sectionBoardDigimon.className = "board-grid";
mainDigimon.appendChild(sectionBoardDigimon);

// we create the board with all images
const imagesDigimonDouble = imagesDigimon.concat(imagesDigimon); // tenemos el array de imágenes (imagesDigimon) y lo duplicamos (imagesDigimonDouble)
shuffleArray(imagesDigimonDouble); // utilizamos la función para mezclar las imágenes duplicadas
const numCardsDigimon = 16; // máximo de cartas
const fragmentDigimon = document.createDocumentFragment(); // creamos un contenedor temporal vacío para agregar después, dinámicamente, todas las imágenes
const flippedCardsDigimon = [];
const defaultCardDigimon = "/assets/img/dorso.png";
for (let i = 1; i <= numCardsDigimon; i++) { // con este loop  añadimos a todas las cartas (divs) las clases de card y card-n. Lo guardamos en cardDigimon
    const cardDigimon = document.createElement('div');
    cardDigimon.className ='card', `card-${i}`; 

    cardDigimon.addEventListener('click', function(event) { // Agregamos un controlador de eventos para cambiar la imagen de fondo de la carta y el color de fondo correspondiente en el evento click
        
        const card = event.target.closest(".card"); //Fijamos que el objetivo de los clicks solo sean las cartas mediante la clase card, ignorando el board
        
               
       
        if(card  && flippedCardsDigimon.length<2 && !card.classList.contains("flipped")){
            card.classList.add("flipped");
            cardDigimon.style.backgroundImage = `url(${imagesDigimonDouble[i-1]})`; // cambiamos la imagen de fondo de la carta a la imagen correspondiente en el array imagesDigimonDouble
            cardDigimon.style.backgroundColor = imageColorsDigimon[imagesDigimonDouble[i-1]]; // cambiamos el color de fondo de la carta al color correspondiente en el array imageColorsDigimon
            
            flippedCardsDigimon.push(card);

            if(flippedCardsDigimon.length === 2){

                if(flippedCardsDigimon[0].style.backgroundImage === flippedCardsDigimon[1].style.backgroundImage){
                   
                    imagesDigimon.forEach((image)=>{
                       
                        if(flippedCardsDigimon[0].style.backgroundImage === `url("${image}")`){
                           
                            const position = imagesDigimon.indexOf(image);

                            flippedCardsDigimon.forEach((flippedCard)=>{

                                flippedCard.style.backgroundImage = `url(${imagesDigimonFunny[position]})`;
                                
                            })
                                                     
                        }
                       
                    });
                    flippedCardsDigimon.length = 0; //reseteamos el array flippedCardsDigimon para que nops deje seguir jugando
                }else{
                                 
                 setTimeout(()=>{

                    flippedCardsDigimon.forEach((flippedCard)=>{

                        flippedCard.style.backgroundImage = "url('/assets/img/dorso.png')";
                        flippedCard.classList.remove("flipped");

                    });

                    flippedCardsDigimon.length = 0;
                    
                 },1000);
                 
                };
    
            }
        }   
    });

    fragmentOne.appendChild(cardDigimon); // Añadimos cada cardDigimon a cada contenedor de fragmentDigimon correspondiente
}

sectionBoardDigimon.appendChild(fragmentOne); //Añadimos el conteneodor de fragmentDigimon como hijo de sectionBoardDigimon, creando el tablero