const Benchmark = require('benchmark');
const { bubbleSort, quickSort } = require('./sort');
const { mostDuplicates, optimizedDuplicates } = require('./dupes')

// numbers array logic
// if numbers are already sorted, bubble sort is our best case scenario. resulting in O(n)
// if anumbers are not already sorted quick sort is the best case scenario.
const numbers = [];
for (let i = 0; i < 10000; i++) {
  numbers.push(Math.floor(Math.random() * 10000) + 1);
}


const suite = new Benchmark.Suite;

suite
    .add('bubble sort', function () {
        const testArray = [...numbers];
        bubbleSort(testArray);
    })
    .add('quick sort', function() {
        const testArray = [...numbers];
        quickSort(testArray);
    })
    .add('js sort', function() {
        const testArray = [...numbers];
        // benchmark the built-in sort method
        testArray.sort((a, b) => {
          return a - b;
        });
    })
    .add('duplicates test', function() {
        mostDuplicates(numbers);
    })
    .add('optimized duplicates', function () {
        optimizedDuplicates(numbers);
    })
    .on('complete', function() {
        this.forEach(result => console.log(`${result.name} averaged ${result.stats.mean*1000}milliseconds.`));       
    })
    .run();