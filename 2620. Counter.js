const createCounter = (n) => {
    let number = n;
    const counter = () => {
        return number++;
    };
    return counter;
};

const counter = createCounter(10);

counter();
counter();
counter();