const generateButton = document.getElementById('generate');
generateButton.addEventListener('click',
    function () {
        const userName = document.getElementById('user-name').value;
        console.log(userName)
        const userKm = parseInt( document.getElementById('user-km').value);
        console.log(userKm)
        const userAge = document.getElementById('user-age').value;
        console.log (userAge)


        const price = userKm * 0.21;
        console.log (price)


    }
)