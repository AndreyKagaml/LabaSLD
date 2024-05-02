function getArrayIntersection(array1, array2) {
    const intersection = [];
    const set = new Set(array1);

    for (const item of array2) {
        if (set.has(item)) {
            intersection.push(item);
            set.delete(item);
        }
    }

    return intersection;
}

function getArrayUnion(array1, array2) {
    const unionSet = new Set([...array1, ...array2]);
    return Array.from(unionSet);
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

console.log("Intersection:", getArrayIntersection(array1, array2));

console.log("Union:", getArrayUnion(array1, array2));
