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
        console.log(box);
    }

//  const ckeckWin = (e) => {
        
//         const li = document.querySelectorAll('li');
//         console.log(li);
//         for (let i = 0; i < i; i++ ){
//             if (li.hasClass('box-filled1')){


//             }

//         }

         
//         let counter = 0;
//         let player1 = [];
//         let player2 = [];

//         const combos = [
//             [0, 1, 2],
//             [3, 4, 5],
//             [6, 7, 8],
//             [0, 3, 6],
//             [1, 4, 7],
//             [2, 5, 8],
//             [0, 4, 8],
//             [2, 4, 6]
//         ];
//     }
     
    // dando click a los elemntos <li> de la lista <ul>
    $('.box').on('click', (e) => {
        console.log(`element with ID ${e.target.id} clicked`);
        
        if (!$(e.target).hasClass('box-filled-1') && !$(e.target).hasClass('box-filled-2')) { 

            fillingBox(e);
            switchP(e);
        //checkWin()  
        if ($('#player1').hasClass('active') ) {
            if ($(e.target).hasClass('box-filled-1') && $(e.target).hasClass('box-filled-2') ) {  // Both have to be TRUE
            $('#player2').addClass('active')
            
        } else {
            $('#player1').addClass('active')
        }
    }

        if ($('#player2').hasClass('active')) {
            if ($(e.target).hasClass('box-filled-1') && $(e.target).hasClass('box-filled-2')) {  // Both have to be TRUE
                $('#player1').addClass('active')

            } else {
                $('#player2').addClass('active')
            }
        }

        
    }
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

    let counter = 0;
    let player1 = [];
    let player2 = [];

    if (!$(e.target).hasClass('box-filled-1') && !$(e.target).hasClass('box-filled-2')) {   
    
        if ($('#player1').hasClass('active')) {
            $(e.target).addClass('box-filled-1').css('background-image', 'url(./img/o.svg)');
            player1.push(e.target.id); 
            console.log(`1 ${player1}`);

        } else if ($('#player2').hasClass('active')) {
            $(e.target).addClass('box-filled-2').css('background-image', 'url(./img/x.svg)');
            player2.push(e.target.id);
            console.log(`2 ${player2}`);

        } 
       
    }
}
const boxElement = (e) => {
    console.log('boxElement function works');

     if ($('#player1').hasClass('active')) {
            $(e.target).addClass('box-filled-1').css('background-image', 'url(./img/o.svg)');
        } else if ($('#player2').hasClass('active')) {
            $(e.target).addClass('box-filled-2').css('background-image', 'url(./img/x.svg)');
        }
    }

//Funcion que intercambia el turno del jugador
const switchP = (e) => {

   
    console.log('switchPlayer function works');
        
    //if (!$(e.target).hasClass('box-filled-1') && !$(e.target).hasClass('box-filled-2')) {
            if ($('#player1').hasClass('active') ) {
                console.log('switchP 1')
             $('#player1').removeClass('active');
             $('#player2').addClass('active');
            
            } else {
            //if ($('#player2').hasClass('active')) {
                console.log('switchP 2')

                $('#player2').removeClass('active');
                $('#player1').addClass('active');
            
            } if ($('#player1').hasClass('active') && $(e.target).hasClass('box-filled-1')){
                console.log('switchP 3');
                $('#player2').removeClass('active')
            } else if ($('#player2').hasClass('active') && $(e.target).hasClass('box-filled-2')) {
                console.log('switchP 4');
                $('#player1').removeClass('active')
            }
        //} 
    }
   
    $('.button').on('click', () => {
           if (valName() ) {
                startGame(); 
           }           
    });
       
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
});