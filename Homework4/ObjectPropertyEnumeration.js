const product = {
    name: "Laptop",
    price: 1000,
    quantity: 5
};

console.log(product)

Object.defineProperty(product, 'price', {
    enumerable: false,
    writable: false
});
Object.defineProperty(product, 'quantity', {
    enumerable: false,
    writable: false
});

console.log(product)


function getTotalPrice(product) {
    const priceDescriptor = Object.getOwnPropertyDescriptor(product, 'price');
    const quantityDescriptor = Object.getOwnPropertyDescriptor(product, 'quantity');

    return priceDescriptor.value * quantityDescriptor.value;
}

function deleteNonConfigurable(obj, propertyName) {
    if (obj.hasOwnProperty(propertyName)) {
        const descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);
        if (!descriptor.configurable) {
            throw new Error(`Cannot delete non-configurable property: ${propertyName}`);
        }
        delete obj[propertyName];
    }
}

console.log(getTotalPrice(product));

try {
    deleteNonConfigurable(product, 'name');
} catch (error) {
    console.error(error.message);
}

console.log(product)