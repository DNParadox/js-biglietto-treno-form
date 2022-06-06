const generateButton = document.getElementById('generate');
generateButton.addEventListener('click',
    function () {
        const userName = document.getElementById('user-name').value;
        console.log(userName)
        const userKm = parseInt( document.getElementById('user-km').value);
        console.log(userKm)
        const userAge = document.getElementById('user-age').value;
        console.log(userAge)


        const price = userKm * 0.21;
        console.log (price)
        let discount = 0;

        if (userAge === 'minorenne') {
            discount = price * 0.2
        } else if (userAge === 'over') {
            discount = price * 0.4
        }

        const finalprice = price - discount
        console.log (finalprice)

    }
)