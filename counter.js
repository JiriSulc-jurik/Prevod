let counter = 0;

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').onclick = count;
    });

function count() {
    counter++;

    if (counter % 10 === 0) {
        document.querySelector("h1").classList.add('red');}
    else {
        document.querySelector("h1").classList.remove('red');
        }
    document.querySelector('h1').innerHTML = counter;
}