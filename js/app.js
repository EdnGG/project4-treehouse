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

    let counter = 0;

    let player1 = [];
    let player2 = [];

    // dando click a los elemntos <li> de la lista <ul>
    $('.box').on('click', (e) => {
        console.log(e.target.id)
        console.log('click element works');
        
        switchP();  // Function que cambia entre jugador

        fillingBox(e);
        boxElement(e); // function que al dar clic pone el caracter correspondiente al elemento seleccionado
        

    });


// Here's the event "mouseover"
    $('.box').on('mouseover', (e) => {
        
        console.log('mouseover works');
        if ($('#player1').hasClass('active')) {
            $(e.target).css('background-image', 'url(./img/o.svg)');
            $('#player2').removeClass('active');

        }
          else  if ($('#player2').hasClass('active')) {
                $(e.target).css('background-image', 'url(./img/x.svg)');
                $('#player1').removeClass('active')
            
        }
    });
                // Here's the event "mouseout"
    $('.box').on('mouseout', (e) => {
        
          if ($('#player1').hasClass('box.filled-1')) {
            $('#player2').removeClass('box.filled-2')
            $(e.target).css('background-image', 'url(./img/x.svg)');
            
        } else if ($('#player2').hasClass('box.filled-2')) {
            $('#player1').removeClass('box.filled-1')
            $(e.target).css('background-image', 'url(./img/o.svg)');
        } else  if (!$('#player1').hasClass('box.filled-1') && !$('#player2').hasClass('box.filled-2')) {

            console.log('mouseout works');
            $(e.target).css('background-image', 'none');
        }

        
    });

     const fillingBox = (e) => {

        console.log('fillingBox function works');

        
        if ($('#player1').hasClass('active')) {
            $('#player1').addClass('box.filled-1')
            $(e.target).css('background-image', 'url(./img/o.svg)');
            //$('#player2').removeClass('active')

        } else if ($('#player2').hasClass('active')) {
            $('#player2').addClass('box.filled-2')

            $(e.target).css('background-image', 'url(./img/x.svg)');
            //$('#player1').removeClass('active')

        } else if (!$('#player1').hasClass('box-filled-1') && !$('#player2').hasClass('box-filled-2') === false) {
            console.log('mouseout works');

            $(e.target).css('background-image', 'none');
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
const switchP = () => {

    console.log('switchPlayer function works');

    
        if ($('#player1').hasClass('active')) {
           
            $('#player1').removeClass('active');
            $('#player2').addClass('active');
            
        } else {
            $('#player2').removeClass('active');
            $('#player1').addClass('active');
            
        }  
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