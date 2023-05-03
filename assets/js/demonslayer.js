// MAIN CONTAINER
const mainDemon = document.createElement("main"); // contenedor principal que contiene el board de Demon
mainDemon.className = "mainDemon ";

// BOARD SECTION
const sectionBoardDemon = document.createElement("section"); // board-grid 4x4 de Demon
sectionBoardDemon.className = "board-grid";
mainDemon.appendChild(sectionBoardDemon);

// we create the board with all images
const imagesDemonDouble = imagesDemon.concat(imagesDemon); // tenemos el array de imágenes (imagesDemon) y lo duplicamos (imagesDemonDouble)
shuffleArray(imagesDemonDouble); // utilizamos la función para mezclar las imágenes duplicadas
const numCardsDemon = 16; // máximo de cartas
const fragmentDemon = document.createDocumentFragment(); // creamos un contenedor temporal vacío para agregar después, dinámicamente, todas las imágenes
const flippedCardsDemon = [];
const defaultCardDemon = "/assets/img/dorso.png";
for (let i = 1; i <= numCardsDemon; i++) { // con este loop  añadimos a todas las cartas (divs) las clases de card y card-n. Lo guardamos en cardDemon
    const cardDemon = document.createElement('div');
    cardDemon.className ='card', `card-${i}`; 

    cardDemon.addEventListener('click', function(event) { // Agregamos un controlador de eventos para cambiar la imagen de fondo de la carta y el color de fondo correspondiente en el evento click
        
        const card = event.target.closest(".card"); //Fijamos que el objetivo de los clicks solo sean las cartas mediante la clase card, ignorando el board
        
               
       
        if(card  && flippedCardsDemon.length<2 && !card.classList.contains("flipped")){
            card.classList.add("flipped");
            cardDemon.style.backgroundImage = `url(${imagesDemonDouble[i-1]})`; // cambiamos la imagen de fondo de la carta a la imagen correspondiente en el array imagesDemonDouble
            cardDemon.style.backgroundColor = imageColorsDemon[imagesDemonDouble[i-1]]; // cambiamos el color de fondo de la carta al color correspondiente en el array imageColorsDemon
            
            flippedCardsDemon.push(card);

            if(flippedCardsDemon.length === 2){

                if(flippedCardsDemon[0].style.backgroundImage === flippedCardsDemon[1].style.backgroundImage){
                   
                    imagesDemon.forEach((image)=>{
                       
                        if(flippedCardsDemon[0].style.backgroundImage === `url("${image}")`){
                           
                            const position = imagesDemon.indexOf(image);

                            flippedCardsDemon.forEach((flippedCard)=>{

                                flippedCard.style.backgroundImage = `url(${imagesDemonFunny[position]})`;
                                
                            })
                                                     
                        }
                       
                    });
                    flippedCardsDemon.length = 0; //reseteamos el array flippedCardsDemon para que nops deje seguir jugando
                }else{
                                 
                 setTimeout(()=>{

                    flippedCardsDemon.forEach((flippedCard)=>{

                        flippedCard.style.backgroundImage = "url('/assets/img/dorso.png')";
                        flippedCard.classList.remove("flipped");

                    });

                    flippedCardsDemon.length = 0;
                    
                 },1000);
                 
                };
    
            }
        }   
    });

    fragmentDemon.appendChild(cardDemon); // Añadimos cada cardDemon a cada contenedor de fragmentDemon correspondiente
}

sectionBoardDemon.appendChild(fragmentDemon); //Añadimos el conteneodor de fragmentbLsectionBoardDemon como hijo de sectionBoardDemon, creando el tablero