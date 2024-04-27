function observeObject(obj, callback) {
    return new Proxy(obj, {
        get(target, property, receiver) {
            callback(property, 'get');
            return Reflect.get(target, property, receiver);
        },
        set(target, property, value, receiver) {
            callback(property, 'set');
            return Reflect.set(target, property, value, receiver);
        }
    });
}

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com"
};

function logCallback(property, action) {
    console.log(`Property "${property}" was ${action}.`);
}

const observedPerson = observeObject(person, logCallback);

console.log(observedPerson.firstName);
observedPerson.age = 35; 

console.log(observedPerson);
