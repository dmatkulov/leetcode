let count = 0;
const memoize = (fn) => {
    const cashes = {};

    return (...args) => {
        const argKeys = args.toString();
        console.log('argKey: ', argKeys);
        console.log('arguments ', ...args)
        console.log('cashes', cashes)

        if (argKeys in cashes) {
            return cashes[argKeys];
        } else {
            const result = fn(...args);
            cashes[argKeys] = result;
            count++;
            return `result is ${result}`;
        }
    };
};

const getCallCount = () => {
    return count;
};
const sum = (a, b) => a + b;
const memoizedSum = memoize(sum);

console.log(memoizedSum(2, 2));
console.log(memoizedSum(2, 2));
console.log('total: ', getCallCount());

const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
const memoFactorial = memoize(factorial);
console.log(memoFactorial(2));
console.log(memoFactorial(3));