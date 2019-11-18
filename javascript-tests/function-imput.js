window.onload = () => {
    const feetToInchesAction = 
        document.getElementById('feetToInchesAction');

    feetToInchesAction.onclick = () => {
        const feetToInchesInput = document.getElementById('feetToInchesInput');
        const feetToInchesDisplay = document.getElementById('feetToInchesDisplay');

        feetToInchesDisplay.textContent = feetToInches(feetToInchesInput.value);
    };
};

const feetToInches = (feet) => {
    return feet * 12;
};



const milesToFeet = (miles) => {
    return miles * 5280;
};



const areaOfTriangle = (base, height) => {
    return base, height * 12;
};



const areaOfCircle = (radius) => {
    return radius * 12;
};