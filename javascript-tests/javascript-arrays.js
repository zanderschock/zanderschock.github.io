window.onload = () => {
<<<<<<< HEAD

    const numbersActionButton=document.getElementById('numbers-action');

    const numbersDisplayList=document.getElementById('numbers-display');

    const languageActionButton=document.getElementById('languageAction');

    const languageDisplayList=document.getElementById('languageDisplay');

    const languagePopularityButton=document.getElementById('languagePopularityAction');

    const languagePopularityList=document.getElementById('languagePopularityDisplay');

    const elfCode = {
        appendToList: (list, value ) => {
=======
    const numbersAction = document.getElementById('numbers-action');
    const numbersDisplay = document.getElementById('numbers-display');

    const elfCode = {
        appendToList: (list, value) => {
>>>>>>> 3956c53854197d6e57b20426aa9fb8fd564194f0
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(value));
            list.appendChild(li);
        }
<<<<<<< HEAD
    }

    const arrays = {
        numbers: [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5]
    };


    ]

   
=======
    };




    const arrays = {
        numbers: [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5]

    };

    arrays.numbers.sort((a, b)  => a - b);


    numbersAction.onclick = () => {
        for (let number of arrays.numbers) {
            console.log(number);
            elfCode.appendToList(numbersDisplay, number);
        }
    }

}
>>>>>>> 3956c53854197d6e57b20426aa9fb8fd564194f0
