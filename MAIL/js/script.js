// 1- Chiedi al utente la mail con un form di tipo text
// 2- Controlla che nella lista delle mail ci sia anche la mail inserita dal utente
// 3- In base alla mail inserita
//          - SE è presente nella lista delle mail stampa un messagio con Aprovato
//          - ALTRIMENTI stampa Non Aprovato


const emails = [
    'myemail1@gmail.com',
    'myemail2@gmail.com',
    'myemail3@gmail.com',
    'myemail4@gmail.com',
    'myemail5@gmail.com',
    'myemail6@gmail.com',
];

console.log(emails);

const loginButton = document.getElementById('login-button');

loginButton.addEventListener('click',
    function(event){

        //event.defaultPrevented()

        const userEmail = document.getElementById('email-input').value;

        console.log(userEmail)

        for (let i = 0; i < emails.length; i++) {
            const element = emails[i];

            if(userEmail == emails[i]){
                console.log('APROVATO')
            }
              else {
                console.log('NON APROVATO')
              }
            
        }

    }
)

