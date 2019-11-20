const simpleObject={
    sayName:()=> {
        console.log('simple Object');
    }
};

simpleObject.dynamicMethod=()=>{
    console.log("Dynamic Method");
    simpleObject.sayName();
simpleObject.dynamicMethod();
}

function FunctionObject(){
    FunctionObject.prototype.sayName=function() {
    console.log("Function Object");
    const functionObject=new FunctionObject();
functionObject.sayName();
    }
}

class CustomClass{
    sayName() {
    console.log("CustomClass");
     const custClass=new CustomClass();
customClass.sayName();
    }
}