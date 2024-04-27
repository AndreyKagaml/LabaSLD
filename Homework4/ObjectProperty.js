person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com"
}

Object.defineProperty(person, 'firstName', { writable: false });
Object.defineProperty(person, 'lastName', { writable: false });
Object.defineProperty(person, 'age', { writable: false });
Object.defineProperty(person, "email", {writable: false});

person.updateInfo = function(newInfo) {
    for (let key in newInfo) {
        if (this.hasOwnProperty(key)) {
            Object.defineProperty(this, key, {
                value: newInfo[key],
                writable: false
            });
        }
    }
};

Object.defineProperty(person, 'address', {
    value: {},
    enumerable: false,
    configurable: false
});

console.log(person);
person.updateInfo({ firstName: "Jane", age: 32 });
console.log(person);