
let userNumber = prompt('Ente ryour number 1 - 100, please');
console.log(`User numaber ${userNumber}`);

if (userNumber === null) {
    alert('ok, bye');
    console.log('ok, bye');
}
else if (!userNumber.trim() || isNaN(userNumber) || !Number.isInteger(+userNumber) || +userNumber <= 1) {
    alert('Error: invalid number, try egain...!!!');
    console.log('Error: invalid number, try egain...!!!');
}

else {
    let isPrime = true;
    let number = +userNumber;

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        alert(`Cool: Your number is prime...!!! ${number}`);
        console.log(`Cool: Your number is prime...!!! ${number}`);
    } else {
        alert(`Your number is not prime...!!! ${number}`);
        console.log(`Your number is not prime...!!! ${number}`);
    }
}


