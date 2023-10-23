const createCounter = (init) => {
    return {
        count: init,
        increment: function () {
            this.count++;
            return this.count;
        },
        decrement: function () {
            this.count--;
            return this.count;
        },
        reset: function () {
            this.count = init;
            return this.count;
        }
    };
};

const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());