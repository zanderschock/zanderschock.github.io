window.onload = () => {

    const simpleObjectDisplay = document.getElementById('simpleObjectDisplay');

    const functionObjectDisplay = document.getElementById('functionObjectDisplay');

    const customClassAction = document.getElementById('customClassAction');

    const simpleObjectAction = document.getElementById('simpleObjectAction');

    const functionObjectAction = document.getElementById('functionObjectAction');

    const simpleObject = {
        firstName: "Zander",
        lastName: "Schock",
        sayName: function () {
            const fullName = this.firstName + " " + this.lastName;
            console.log(fullName);
            return fullName;
        }
    };
    simpleObjectAction.onclick = function () {
        simpleObjectDisplay.textContent = simpleObject.sayName();

    }
    functionObjectAction.onclick = function () {

        const functionObject = new FunctionObject();
        functionObjectDisplay.textContent = functionObject.sayName();
    }
    customClassAction.onclick = function () {
        const customClassDisplay = document.getElementById('customClassDisplay');
        const myClass = new CustomClass();

        customClassDisplay.textContent = myClass.sayName();

    }

    simpleObject.dynamicMethod = () => {
        console.log("Dynamic Method");
    }

    function FunctionObject() {
        FunctionObject.prototype.sayName = function () {

            return "Function Object";
        }
        function privateFunction() {

            return "Private Function";
        }
    }

    class CustomClass {
        sayName() {
            console.log("Custom Class");
    }