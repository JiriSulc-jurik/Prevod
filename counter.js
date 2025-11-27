document.addEventListener('DOMContentLoaded', function () {

    const input = document.querySelector("input#number");

    input.addEventListener("input", function () {
        const number = document.querySelector('#number').value;
        const f = (Number(number) * (9 / 5)) + 32;
        const v = Math.round((f + Number.EPSILON) * 100) / 100;

        
        document.querySelector('h1').innerHTML = `${number}°C = ${v}°F`;
    });

});
