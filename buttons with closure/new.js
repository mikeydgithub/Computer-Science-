// // button counter

// const buttonEl = document.getElementById('my-button');

// const clickHandler = function() {
//     let count = parseInt(this.getAttribute('data-count'));
//     count++;

//     this.setAttribute('data-count', count);
//     this.textContent = `Clicks: ${count}`;
// };

// buttonEl.addEventListener('click', clickHandler)
// -------------------------------------------------
// using a closure

// const buttonEl = document.getElementById('my-button');

// const clickHandler = function() {
//     let count = 0;

//     return function() {
//         count++;
//         this.textContent = `Clicks: ${count}`;
//     };
// };

// const buttons = document.getElementsByTagName('button');

// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', clickHandler());
// }

// buttonEl.addEventListener('click', clickHandler());

// -------------------------------------------------

// click multiple buttons

const containterEl = document.getElementById('container');

const clickHandler = function(event) {
    if (event.target.matches('button')) {
        event.target.textContent = 'Clicked!';
    }
};

containterEl.addEventListener('click', clickHandler);