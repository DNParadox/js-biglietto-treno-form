// Var che al click di "Generate" da la possibilità di ricevere i seguenti dati
const generateButton = document.getElementById('generate');

generateButton.addEventListener('click',
    function () {
        const userName = document.getElementById('user-name').value;
        const userKm = parseInt( document.getElementById('user-km').value);
        const userAge = document.getElementById('user-age').value;

        const price = userKm * 0.21;
   
        let discount = 0;
        let offer =  'Biglietto Standard';

        if (userAge === 'minorenne') {
            discount = price * 0.2;
            offer = 'Biglietto Minore';
        } else if (userAge === 'over') {
            discount = price * 0.4;
            offer = 'Biglietto Over 65';
        }

        // Prezzo Finale 
        const finalprice = price - discount
      
        // Numeri casuali per carrozza e numero CP
        const carrozza = Math.floor(Math.random() * 7) + 1;
        const cpnumber =  Math.floor(Math.random() * 10000) + 1000;
   
        // Document che verrano stampati all'interno degli Span
        document.getElementById('ticket-name').innerHTML = userName;
        document.getElementById('ticket-price').innerHTML = finalprice.toFixed(2) + '\u20AC';
        document.getElementById('card2').classList.add('active');
        document.getElementById('ticket-type').innerHTML = offer;
        document.getElementById('carrozza').innerHTML = carrozza;
        document.getElementById('cpnumber').innerHTML = cpnumber;
    }
)

const cancelticket = document.getElementById('annull');
cancelticket.addEventListener('click',
        function() {
        document.getElementById('user-name').value = ' '
        document.getElementById('user-km').value = ' '
        document.getElementById('user-age').value = 'maggiorenne'
        document.getElementById('card2').classList.remove('active');
        }



)