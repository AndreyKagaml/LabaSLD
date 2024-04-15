const DataTransformer = {
    addValues: (a, b) => {
        if (typeof a === 'number' && typeof b === 'number') {
            return a + b;
        } else if (typeof a === 'string' || typeof b === 'string') {
            return String(a) + String(b);
        } else {
            throw new Error('Addition not possible for given types');
        }
    },

    stringifyValue: (value) => {
        if (typeof value === 'object' || Array.isArray(value)) {
            return JSON.stringify(value);
        } else {
            return String(value);
        }
    },

    invertBoolean: (bool) => {
        if (typeof bool === 'boolean') {
            return !bool;
        } else {
            throw new Error('Argument must be a boolean');
        }
    },

    convertToNumber: (value) => {
        if (typeof value === 'string') {
            const num = parseFloat(value);
            if (!isNaN(num)) {
                return num;
            }
        } else if (typeof value === 'boolean') {
            return value ? 1 : 0;
        }
        throw new Error('Conversion to number not possible');
    },

    coerceToType: (value, type) => {
        switch (type.toLowerCase()) {
            case 'string':
                return String(value);
            case 'number':
                return DataTransformer.convertToNumber(value);
            case 'boolean':
                return value ? true : false;

            default:
                throw new Error(`Unsupported type: ${type}`);
        }
    }
};