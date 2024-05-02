function customFilterUnique(array, callback) {
    const result = [];
    const uniqueKeys = [];

    array.forEach(item => {
        const key = callback(item);

        if (!uniqueKeys.includes(key)) {
            uniqueKeys.push(key);
            result.push(item);
        }
    });
    return result;
}

const arrayOfObjects = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Alice' },
    { id: 3, name: 'John' },
    { id: 4, name: 'Bob' }
];

const uniqueObjects = customFilterUnique(arrayOfObjects, obj => obj.name);
console.log(uniqueObjects);