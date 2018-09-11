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
// Here's the event "mouseover"
    $('.box').on('mouseover', (e) => {
        
        console.log('mouseover works');
        if ($('#player1').hasClass('active')) {
            $(e.target).css('background-image', 'url(../img/o.svg)');
            $('#player2').removeClass('active');

        }
          else  if ($('#player2').hasClass('active')) {
                $(e.target).css('background-image', 'url(../img/x.svg)');
                $('#player1').removeClass('active')
            
        }
    });
                // Here's the event "mouseover"
    $('.box').on('mouseout', (e) => {

        console.log('mouseout works');
            $(e.target).css('background-image', 'none');
    });
                // dando click a los elemntos <li> de la lista <ul>
$('.box').on('click',  (e) => {
        console.log(e.target.id)
        
        switchP();

    // let li = e.target.id;
    // if ($('#player1').hasClass('active')) {
    //     $(li).addClass('box-filled-1');
    // } else if ($('#player2').hasClass('active')) {
    //     $(li).addClass('box-filled-2');
    // }
        //boxElement();
        // if ($('#player1').hasClass('active')) {
        //      $(e.target.id).addClass('box-filled-1');
        
        // } else {
        //      $('#player2').addClass('active') 
        //      $(e.target.id).addClass('box-filled-2');
        //  }
        
    });

    const boxElement = (e) => {
        let li = e.target.id;
        if ($('#player1').hasClass('active')) {
            $(li).addClass('box-filled-1');
        } else if ($('#player2').hasClass('active')) {
            $(li).addClass('box-filled-2');
        }
    }

//Funcion que intercambia el turno del jugador
    const switchP = (e) => {
        let li = e.target.id;
        if ($('#player1').hasClass('active')) {
            $(li).addClass('box-filled-1');
            $('#player1').removeClass('active');
            $('#player2').addClass('active');
            
        } else {
            $('#player2').removeClass('active');
            $('#player1').addClass('active');
            
        }  
    }

    /*
    const switchPlayer = (e) => {
        if ($('#player1').hasClass('active')) {
            $(e.target.id).css('background-image', 'url(../img/x.svg)');
            $('#player1').removeClass('active');
            $('#player2').addClass('active');

        } else {
            $('#player2').removeClass('active');
            $('#player1').addClass('active');
        }
    }
    */
   
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

    let player1 = [];
    let player2 = [];

       

});