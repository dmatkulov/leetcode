const createHelloWorld = () => {
    return function() {
        return "Hello World";
    };
};

const sayHelloWorld = createHelloWorld();
console.log(sayHelloWorld());