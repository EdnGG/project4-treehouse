$( document ).ready ( () => {
    console.log('Page already loaded');
        const start = $('#start');
        const board = $('#board');   
        const winner = $('#finish');    
            board.hide();
            winner.hide();
    const valName = () => {
        const nameRegex = /^[A-Za-z\s]{3,20}$/i;
        let name1 = $('#name1').val();
        let name2 = $('#name2').val(); 
        
        if ( !nameRegex.test(name1) || !nameRegex.test(name2) ) {

            console.log('Name invalid');
            $('#name1').addClass('error');
            $('#name2').addClass('error');
            $("#name1").focus();

            return false;
        }  
            $('#userName1').html(name1);
            $('#userName2').html(name2);
            start.hide();
            board.show();
            
            console.log(' Both names are valid ');
            $('#name1').removeClass('error');
            $('#name2').removeClass('error');
        return true;
    }

    const startGame = () => {
        let randomNumber = Math.floor(Math.random() * 2  +  1); // number between 0 and 2
        if (randomNumber === 1) {
            if ($('#player1').hasClass('active')) {
                $('#player2').removeClass('active');
            }
                
        } else if ($('#player2').hasClass('active')) {
            $('#player1').removeClass('active');
        }
    }
   
// Aqui estoy recorreindo la <ul> con todas las <li> agregando IDs dinamicamente
const ulBoxes = document.querySelector('.boxes');
const liBoxes = ulBoxes.querySelectorAll('li');

    for (let i = 0; i < liBoxes.length; i++) {
        let box;
        box = liBoxes[i].id = i;
        //console.log(box);
    }

 //const ckeckWin = (e) => {


   
     const ckeckWhoWon = (e) => {

        const combos = [
             [0, 1, 2],
             [3, 4, 5],
             [6, 7, 8],
             [0, 3, 6],
             [1, 4, 7],
             [2, 5, 8],
             [0, 4, 8],
             [2, 4, 6]
         ];
playerClass1 = $(e.target).hasClass("box-filled-1");       
playerClass2 = $(e.target).hasClass("box-filled-2");

         const cuadricula = document.querySelectorAll('li.box');
         let acum = 0;
         for (let i = 0; i < combos.length; i++) { // Recorre el Array bidimensinal combos en el index del primer objeto
             acum = 0;
             for (let j = 0; j < combos[i].length; j++) { // Recorre el Array bidimensional combos el cual recorre el primer objetos del array 
                 if (!$(cuadricula[combos[i][j]]).hasClass('box-filled-1')  ) {
                    console.log('recorriendo el array combos')
                        //acum++;
                       break;
                        //acum++;
                 
                if (acum === 3) {
                // if () {} 
                
                console.log('winner');
                 //winner
                // break;
                }
             }
            }
      } 
    }
        
    
    //ckeckWhoWon();
        
    //  const player1 = $(e.target).hasClass('box-fill-1')
    //  const player2 = $(e.target).hasClass('box-fill-2') 
    
    //  const ulBoxes = document.querySelector('.boxes'); // <ul>
    //  const liBoxes = ulBoxes.querySelectorAll('li'); // todos los <li> de <ul>
    
    // let counter = 0;
    // const combos = [
    //      [0, 1, 2],
    //      [3, 4, 5],
    //      [6, 7, 8],
    //      [0, 3, 6],
    //      [1, 4, 7],
    //      [2, 5, 8],
    //      [0, 4, 8],
    //      [2, 4, 6]
    //  ];
     
    //  for (let i = 0; i < combos.length; i++) {
    //         let acum = 0; 
    //     for (let j = 0; combos[i].length; j++) {
    //          if (!$(liBoxes).hasClass('box-filled-1'))
    //              break;
    //          acum++;

    //      }
    //      if (acum == 3){
    //      console.log('works')
    //     }

    //     }
    //  for (let i = 0; i < liBoxes.length; i++) {
            //      let box1;
            //      box1 = liBoxes;
            //      console.log(box1);
             

            //      if ($(e.target.id[0]).hasClass('box-filled-1') && $(e.target.id[1]).hasClass('box-filled-1') && $(e.target.id[2]).hasClass('box-filled-1')  ) {
            //         console.log('funciona box1 [0,1,2]')
            //  }
           // }
    //  if (counter > 1) {
    //      start.hide();
    //  }
    //  if (counter > 4) {

    //  }

     
     
     
            //if ($(element.id).hasClass('box-filled-1') === $(element.id[0]).hasClass('box-filled-1') && $(element.id[1]).hasClass('box-filled-1') && $(element.id[2]).hasClass('box-filled-1')){
            // console.log(`works ckecWin  ${element.id}`)
        // if ($(element.id).hasClass('box-filled-1') === $(element.id[1]).hasClass('box-filled-1')) {
        //      if ($(element.id).hasClass('box-filled-1') === $(element.id[2]).hasClass('box-filled-1')) {
             
        //      }
        // }
    //}
//}
    // ckeckWin(e);
    // dando click a los elemntos <li> de la lista <ul>
    $('.box').on('click', (e) => {
        console.log(`element with ID ${e.target.id} has been clicked`);
        
        if (!$(e.target).hasClass('box-filled-1') && !$(e.target).hasClass('box-filled-2')) { 

            fillingBox(e);
            
            switchP(e);
            ckeckWhoWon(e);
        //checkWin()  
        if ($('#player1').hasClass('active') ) {
            if ($(e.target).hasClass('box-filled-1') && $(e.target).hasClass('box-filled-2') ) {  // Both have to be TRUE
            $('#player2').addClass('active')
            
        } else {
            $('#player1').addClass('active')
        }
            // ckeckWhoWon(e);
    }

        if ($('#player2').hasClass('active')) {
            if ($(e.target).hasClass('box-filled-1') && $(e.target).hasClass('box-filled-2')) {  // Both have to be TRUE
                $('#player1').addClass('active')

            } else {
                $('#player2').addClass('active')
            }
            // ckeckWhoWon(e);
        }
            //ckeckWhoWon(e);
        
    }
         //ckeckWhoWon(e);
    });


// Here's the event "mouseover"
const mouseOver = ()=> {
$('.box').on('mouseover', (e) => {
        
    if (!$(e.target).hasClass('box-filled-1') && !$(e.target).hasClass('box-filled-2') ) { // negacion
       
        if ($('#player1').hasClass('active') ) {
            $(e.target).css('background-image', 'url(./img/o.svg)');
            

            if ($('#player1').hasClass('active') && $(e.target).hasClass('box-filled-1')) {
                $(e.target).css('background-image', 'url(./img/o.svg)');
            }
        }
        else if ($('#player2').hasClass('active') ) {
                $(e.target).css('background-image', 'url(./img/x.svg)');
                
            if ($('#player2').hasClass('active') && $(e.target).hasClass('box-filled-2')) {
                $(e.target).css('background-image', 'url(./img/x.svg)');
            }
        }
       
    }
  })
}
mouseOver()

// Here's the event "mouseout"
const mouseOut = () => { 
$('.box').on('mouseout', (e) => {
        if (!$(e.target).hasClass('box-filled-1') && !$(e.target).hasClass('box-filled-2')) {
            if($(e.target).hasClass('box-filled-1')){
                $(e.target).css('background-image', 'url(./img/o.svg)');
                console.log("condicion filled-1 works");
            } else if ($(e.target).hasClass('box-filled-2')){
                $(e.target).css('background-image', 'url(./img/x.svg)');
                console.log("condicion filled-2 works");
            } else {
                //console.log('else statement works')
                $(e.target).css('background-image', 'none');
            }
        }
    })
}

mouseOut()
const fillingBox = (e) => {  // esta funcion se ejecuta cuando se da click al tablero

    //let counter = 0;
    let player1 = [];
    let player2 = [];

    if (!$(e.target).hasClass('box-filled-1') && !$(e.target).hasClass('box-filled-2')) {   
    
        if ($('#player1').hasClass('active')) {
            $(e.target).addClass('box-filled-1').css('background-image', 'url(./img/o.svg)');
            player1.push(e.target.id); 
            console.log(`player1 (o) has been clicked element with ID${player1}`);

        } else if ($('#player2').hasClass('active')) {
            $(e.target).addClass('box-filled-2').css('background-image', 'url(./img/x.svg)');
            player2.push(e.target.id);
            console.log(`player2  (x) has been clicked element with ID${player2}`);

        } 
       
    }
}

//Funcion que intercambia el turno del jugador
const switchP = (e) => {
        
    
            if ($('#player1').hasClass('active') ) {
                //console.log('switchP 1')
             $('#player1').removeClass('active');
             $('#player2').addClass('active');
            
            } else {
            
                //console.log('switchP 2')

                $('#player2').removeClass('active');
                $('#player1').addClass('active');
            
            } if ($('#player1').hasClass('active') && $(e.target).hasClass('box-filled-1')){
               // console.log('switchP 3');
                $('#player2').removeClass('active')
            } else if ($('#player2').hasClass('active') && $(e.target).hasClass('box-filled-2')) {
                //console.log('switchP 4');
                $('#player1').removeClass('active')
            }
       
    }
   
    $('.button').on('click', () => {
           if (valName() ) {
                startGame(); 
           }           
    });
       
    
});