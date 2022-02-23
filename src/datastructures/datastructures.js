export const addTwoArrays = (arr1, arr2) => {
    return arr1.concat(arr2);
};

export const removeEvenNumbers = (arr) => {
    return arr.filter((value) => value % 2);
};

export const locateNumber = (arr, numberToLocate) => {
    return arr.includes(numberToLocate);
};

export const calculateTotal = (arr) => {
    return arr.reduce((sum, currentValue) => {
        return sum + currentValue;
    }, 0);
};

export const sortedArrayOfObjects = (arrayOfObjects) => {
    return arrayOfObjects.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();

        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    });
};
