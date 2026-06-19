// first method using filter

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evennumber = arr.filter(num => {
    return num % 2 === 0;
});
let oddnumbers = arr.filter(num => {
    return num % 2 !== 0;
});

console.log("Even numbers:", evennumber);
console.log("Odd numbers:", oddnumbers);


// second  method using Function to check even or odd number

function checkEvenOdd(a) {
    const remainder = a % 2;
    if (remainder === 0) {
        return "Even";
    }
    else {
        return "Odd";
    }
}
console.log(checkEvenOdd(3))


// third method using ternary operator

function checkEvenOdd(a) {
    return a % 2 === 0 ? "Even" : "Odd";
}

console.log(checkEvenOdd(5));