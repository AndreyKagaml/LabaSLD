function createImmutableObject(obj) {
    const immutableObj = {};

    for (let key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            immutableObj[key] = createImmutableObject(obj[key]);
        } else {
            Object.defineProperty(immutableObj, key, {
                value: obj[key],
                writable: false,
                enumerable: true,
                configurable: false
            });
        }
    }

    return immutableObj;
}

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com",
};

const immutablePerson = createImmutableObject(person);

immutablePerson.firstName = "Jane";
immutablePerson.lastName = "K"

console.log(immutablePerson);
