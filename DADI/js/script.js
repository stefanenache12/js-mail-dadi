// 1) Genera due numeri random da 1 a 6
// 2) Confronta i due numeri
// 3) In base al numeri stabilisci un vincitore

const userNumber = Math.floor(Math.random() * (6 - 1 + 1) ) + 1;
const pcNumber = Math.floor(Math.random() * (6 - 1 + 1) ) + 1;

console.log('user',userNumber)
console.log('pc', pcNumber)

if(userNumber > pcNumber){
    console.log('HAI VINTO')
}   
    else if (userNumber == pcNumber){
    console.log('PAREGGIO')
    }
    else {
    console.log('HAI PERSO')
    }