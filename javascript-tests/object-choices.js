const simpleObject = {
sayName: function() {
    console.log("Simple object");
}


};

simpleObject.dynamicMethod = function() {
    console.log('Dynamic Method');
}

function FunctionObject() {
    FunctionObject.prototype.sayName = function() {
        console.log('Function Object');
    }
}


simpleObject.sayName();
simpleObject.dynamicMethod();

const functionObject = new FunctionObject();
functionObject.sayName();
