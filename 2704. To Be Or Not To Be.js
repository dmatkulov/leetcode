function expect(val) {
    return {
        toBe: function (otherVal) {
            if (val === otherVal) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: function (otherVal) {
            if (val !== otherVal) {
                return true;
            } else {
                throw new Error("Equal");
            }
        },
    };
}

// Example usage:
try {
    expect(5).toBe(15);
    expect(5).toBe(5);
} catch (error) {
    console.error(error.message);
}