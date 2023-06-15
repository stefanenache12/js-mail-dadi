// 1) Genera due numeri random da 1 a 6
// 2) Confronta i due numeri
// 3) In base al numeri stabilisci un vincitore



const button = document.getElementById('button')

button.addEventListener('click',
    function(){
    const userNumber = Math.floor(Math.random() * (6 - 1 + 1) ) + 1;
    const pcNumber = Math.floor(Math.random() * (6 - 1 + 1) ) + 1;

    document.getElementById('user-number').innerHTML = userNumber;
    document.getElementById('pc-number').innerHTML = pcNumber;

    const rotate = document.querySelector('.rotate-element');
    rotate.classList.add('rotate-animation');

    const rotate1 = document.querySelector('.rotate-element1');
    rotate1.classList.add('rotate-animation');
    
    if(userNumber > pcNumber){
        document.getElementById('messaggio').innerHTML = 'HAI VINTO';
    }   
        else if (userNumber == pcNumber){
            document.getElementById('messaggio').innerHTML = 'PAREGGIO';
        }
        else {
            document.getElementById('messaggio').innerHTML = 'HAI PERSO';
        }
}
    
)

