function customShuffle(array) {
    const result = [...array];

    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        let k = result[i];
        result[i] = result[j];
        result[j] = k;
    }

    return result;
}

const myArray = [1, 2, 3, 4, 5];
console.log(customShuffle(myArray));
