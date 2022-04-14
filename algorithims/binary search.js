// binary search

const data = [12, 23, 38, 40, 54, 62, 71, 87, 99];

const binarySearch = (arr, num) => {
    let left = 0;
    let right = arr.length - 1;
    let middle = Math.floor((left + right) / 2);

    if (num === arr[middle]) {
        return 'found it';
    }
    else if (num < arr[middle]) {
        right = middle;
        return `bring right down to ${right}`;
    }
    else if (num > arr[middle]) {
        left = middle + 1;
        return `bring left up to ${left}`;
    }
};

console.log(binarySearch(data, 38));
// will print bring right down to 4

console.log(binarySearch(data, 71));
// will print bring left up to 5

console.log(binarySearch(data, 54));
// will return found it

