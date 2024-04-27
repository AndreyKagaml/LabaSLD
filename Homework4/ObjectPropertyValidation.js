function validateObject(obj, schema) {
    for (let key in schema) {
        if (schema[key].required && !(key in obj)) {
            return false;
        }

        if (typeof obj[key] !== schema[key].type) {
            return false;
        }

        if (schema[key].validate && !schema[key].validate(obj[key])) {
            return false;
        }
    }

    return true;
}

const validationSchema = {
    name: { type: 'string', required: true },
    age: { type: 'number', required: true, validate: (value) => value >= 18 }
};

const validObject = { name: 'John', age: 25 };
const invalidObject = { name: 'Jane', age: 12 };

console.log(validateObject(validObject, validationSchema));
console.log(validateObject(invalidObject, validationSchema));
