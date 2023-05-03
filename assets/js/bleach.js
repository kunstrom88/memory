// MAIN CONTAINER
const mainBleach = document.createElement("main"); // contenedor principal que contiene el board de Bleach
mainBleach.className = "mainBleach ";

// BOARD SECTION
const sectionBoardBleach = document.createElement("section"); // board-grid 4x4 de Bleach
sectionBoardBleach.className = "board-grid";
mainBleach.appendChild(sectionBoardBleach);

// we create the board with all images
const imagesBleachDouble = imagesBleach.concat(imagesBleach); // tenemos el array de imágenes (imagesBleach) y lo duplicamos (imagesBleachDouble)
shuffleArray(imagesBleachDouble); // utilizamos la función para mezclar las imágenes duplicadas
const numCardsBleach = 16; // máximo de cartas
const fragmentBleach = document.createDocumentFragment(); // creamos un contenedor temporal vacío para agregar después, dinámicamente, todas las imágenes
const flippedCardsBleach = [];
const defaultCardBleach = "/assets/img/dorso.png";
for (let i = 1; i <= numCardsBleach; i++) { // con este loop  añadimos a todas las cartas (divs) las clases de card y card-n. Lo guardamos en cardBleach
    const cardBleach = document.createElement('div');
    cardBleach.className ='card', `card-${i}`; 

    cardBleach.addEventListener('click', function(event) { // Agregamos un controlador de eventos para cambiar la imagen de fondo de la carta y el color de fondo correspondiente en el evento click
        
        const card = event.target.closest(".card"); //Fijamos que el objetivo de los clicks solo sean las cartas mediante la clase card, ignorando el board
        
               
       
        if(card  && flippedCardsBleach.length<2 && !card.classList.contains("flipped")){
            card.classList.add("flipped");
            cardBleach.style.backgroundImage = `url(${imagesBleachDouble[i-1]})`; // cambiamos la imagen de fondo de la carta a la imagen correspondiente en el array imagesBleachDouble
            cardBleach.style.backgroundColor = imageColorsBleach[imagesBleachDouble[i-1]]; // cambiamos el color de fondo de la carta al color correspondiente en el array imageColorsBleach
            
            flippedCardsBleach.push(card);

            if(flippedCardsBleach.length === 2){

                if(flippedCardsBleach[0].style.backgroundImage === flippedCardsBleach[1].style.backgroundImage){
                   
                    imagesBleach.forEach((image)=>{
                       
                        if(flippedCardsBleach[0].style.backgroundImage === `url("${image}")`){
                           
                            const position = imagesBleach.indexOf(image);

                            flippedCardsBleach.forEach((flippedCard)=>{

                                flippedCard.style.backgroundImage = `url(${imagesBleachFunny[position]})`;
                                
                            })
                                                     
                        }
                       
                    });
                    flippedCardsBleach.length = 0; //reseteamos el array flippedCardsBleach para que nops deje seguir jugando
                }else{
                                 
                 setTimeout(()=>{

                    flippedCardsBleach.forEach((flippedCard)=>{

                        flippedCard.style.backgroundImage = "url('/assets/img/dorso.png')";
                        flippedCard.classList.remove("flipped");

                    });

                    flippedCardsBleach.length = 0;
                    
                 },1000);
                 
                };
    
            }
        }   
    });

    fragmentBleach.appendChild(cardBleach); // Añadimos cada cardBleach a cada contenedor de fragmentBleach correspondiente
}

sectionBoardBleach.appendChild(fragmentBleach); //Añadimos el conteneodor de fragmentbLsectionBoardBleach como hijo de sectionBoardBleach, creando el tablero