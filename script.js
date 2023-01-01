var ageButton = document.getElementById('bt-age');
var printage = document.getElementById('print-age');


// var year = 1998;
// var age = calc(year);
// console.log(age);
ageButton.addEventListener('click', () => {
    var yearInput = document.getElementById('input-year').value;
    const age = 2023 - yearInput;
    // console.log(age);
    printage.innerHTML = age;
})
