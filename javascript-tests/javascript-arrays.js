window.onload = () => {

    const numbersActionButton=document.getElementById('numbers-action');

    const numbersDisplayList=document.getElementById('numbers-display');

    const languageActionButton=document.getElementById('languageAction');

    const languageDisplayList=document.getElementById('languageDisplay');

    const languagePopularityButton=document.getElementById('languagePopularityAction');

    const languagePopularityList=document.getElementById('languagePopularityDisplay');

    const elfCode = {
        appendToList: (list, value ) => {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(value));
            list.appendChild(li);
        }
    }

    const arrays = {
        numbers: [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5]
    };


    ]

   