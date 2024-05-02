function measureArrayPerformance(func, array) {
    const start = performance.now();
    func(array);
    const end = performance.now();
    return end - start;
}

function customFilterEven(array) {
    return array.filter(num => num % 2 === 0);
}

const myArray = Array.from({ length: 100000 },  i => i + 1);

const filterPerformance = measureArrayPerformance(array => array.filter(num => num % 2 === 0), myArray);
console.log("Filter method performance:", filterPerformance, "milliseconds");

const customFilterPerformance = measureArrayPerformance(customFilterEven, myArray);
console.log("Custom filter method performance:", customFilterPerformance, "milliseconds");