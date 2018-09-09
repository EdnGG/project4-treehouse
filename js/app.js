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
// Aqui es el Evento mouse over

    $('.box').on('mouseover', (e) => {
        //  let that = $(this).first().attr('id');
        //let that = e.target.id;

        //console.log(e.target);

        if ($('#player1').hasClass('active')) {
            $(e.target).css('background-image', 'url(../img/o.svg)');
            //$('#player2').removeClass('active');

        }
          else  if ($('#player2').hasClass('active')) {
                $(e.target).css('background-image', 'url(../img/x.svg)');
                //$('#player1').removeClass('active')
            
        }
    }).mouseout((e) => {

        //let that = e.target.id;

        if ($('#player1').hasClass('active')) {
            $(e.target).css('background-color', 'EFEFEF');

        } else if ($('#player2').hasClass('active')) {
            $(e.target).css('background-color', 'EFEFEF');

        }
});

    //  $('.box').on('mouseover keypress',  (e)=> {
    //     //  let that = $(this).first().attr('id');
    //     let that = e.target.id;

    //      console.log(that);
         
    //      if ($('#player1').hasClass('active')) {
    //             $(e.target).css('background-image', 'url(../img/o.svg)');
    //             //$('#player2').removeClass('active')
    //      } else if ($('#player2').hasClass('active')) {
    //             $(e.target).css('background-image', 'url(../img/x.svg)');
    //             //$('#player1').removeClass('active')

    //     }
    // });


    // $('.box').on('mouseout', (e) => {
         
    //     let that = e.target.id;

    //         if ($('#player1').hasClass('active')) {
    //             $(that).css('background-color', 'EFEFEF');
            
    //         } else if ($('#player2').hasClass('active')){
    //             $(that).css('background-color', 'EFEFEF');

    //         }
    //     //console.log(square2);
    // })
    const switchPlayer = () => {
        if (player1box.classList.contains('active')) {
            player1box.classList.remove('active');
            player2box.classList.add('active');
        } else {
            player2box.classList.remove('active');
            player1box.classList.add('active');
        }
    }
   $('.button').on('click', (e) => {
           if (valName() ) {
                startGame();  
                return true;
           }           
                e.preventDefault();      
        });

   




    

//    
//     const onClick = (e) => {
//         let evento = e.target;
//         console.log('target', evento);
//     }

    
    
//     boxes.addEventListener('click', onClick ); 
            
//     const boxes = document.querySelectorAll('.box');   
//    // })

    
    const winningCombos = [
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