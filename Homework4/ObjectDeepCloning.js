function deepCloneObject(obj, clonedObjects = new WeakMap()) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    if (clonedObjects.has(obj)) {
        return clonedObjects.get(obj);
    }

    const cloned = Array.isArray(obj) ? [] : {};

    clonedObjects.set(obj, cloned);

    for (let key in obj) {
        cloned[key] = deepCloneObject(obj[key], clonedObjects);
    }

    return cloned;
}

