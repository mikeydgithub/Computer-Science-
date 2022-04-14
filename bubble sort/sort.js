// const numbers = [54, 8, 87, 88, 100, 98, 17, 72, 67, 42, 40, 34, 55, 18, 33, 94, 59, 68, 92, 2];

// two way to do a bubble sort

// first way is a for loop

// for every item in the array, we'll traverse through the array again and swap posistions as needed.
// const bubbleSort = (arr) => {
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = 0; j < arr.length - 1; j++) {
//             // comapre arr[j] to arr [j+1]

//             // swap places if needed
//         }
//     }
//     return arr;
// }

// second way

const bubbleSort = (arr) => {
    let sorted = false;

    while (!sorted) {
        sorted = true;

        for (let i = 0; i < arr.length - 1; i++) {
            // compare arr[i] to arr[i+1]
            if (arr[i] > arr[i+1]) {
                // swap using a third temp variable
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;

                // flag as not sorted to run loop again
                sorted = false;
            }
            // swap places if needed
            // if swapped, set sorted = false to run while loop again
        }
    }
    return arr;
}

// quick sort

const quickSort = (arr) => {
    // dom't quick-sort a small array; just return it immediatley
    if ( arr.length <= 1) {
        return arr;
    }

    // user first index as the pivot point
    const pivot = arr[0];
    const left = [];
    const right = [];

    // start at index 1 to ignore pivot
    for (let i = 1; i < arr.length; i++) {
        // push into different arrays based on value compared to pivot
        if (arr[i] <= pivot) {
            left.push(arr[i]);
        }
        else {
            right.push(arr[i]);
        }
    }
    //merge arrays and pivot together
    return quickSort(left).concat(pivot, quickSort(right));
};

// export along with bubble sort
module.exports = { bubbleSort, quickSort };
