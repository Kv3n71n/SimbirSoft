// Первое упражнение 
console.log("-----------------");
console.log("Первое упражнение");
console.log("-----------------");

function sumOfEvenNegative(arr) {
    return arr.reduce((acc, curr) => curr < 0 && curr % 2 === 0 ? acc + curr : acc, 0);
}

let arr = [3, -5, -2, 4, -8, 0];
console.log(sumOfEvenNegative(arr)); 


// Второе упражнение 
console.log("-----------------");
console.log("Второе упражнение");
console.log("-----------------");

function maxAbs(arr2) {
    return Math.max(...arr2.map(Math.abs));
}

let arr2 = [5, -3, 9, -2, -6];
console.log(maxAbs(arr2)); 

// Третье упражнение 
console.log("-----------------");
console.log("Третье упражнение");
console.log("-----------------");

function countPositiveNegative(arr) {
    let positive = arr3.filter(x => x > 0).length;
    let negative = arr3.filter(x => x < 0).length;
    return [positive, negative];
}

let arr3 = [10, -5, 3, 2, 0, -1, 8, 0, 10, 3];
console.log(countPositiveNegative(arr3)); 

// Четвертое упражнение 
console.log("-----------------");
console.log("Четвертое упражнение");
console.log("-----------------");

function hasDuplicates(arr) {
    return new Set(arr4).size < arr4.length;
}

let arr4 = [1, 2, 3, 4, 2, 5];
console.log(hasDuplicates(arr4));

// Пятое упражнение 
console.log("-----------------");
console.log("Пятое упражнение");
console.log("-----------------");

let arr5 = [1, 2, 3, 1, 2, 4, 5, 6, 4, 7];
let uniqueCount = new Set(arr5).size;
console.log(uniqueCount); 

// Шестое упражнение 
console.log("-----------------");
console.log("Шестое упражнение");
console.log("-----------------");

function compareArrays(arr61, arr62) {
    return JSON.stringify(arr61) === JSON.stringify(arr62);
}

let arr61 = [1, 2, 3];
let arr62 = [1, 2, 3];
console.log(compareArrays(arr61, arr62)); 
