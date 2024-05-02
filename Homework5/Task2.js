function chunkArray(array, size) {
    const result = [];
    let index = 0;

    while (index < array.length) {
        result.push(array.slice(index, index + size));
        index += size;
    }

    return result;
}

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
console.log(chunkArray(myArray, 4));