function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

document.getElementById("checkButton").addEventListener("click", function() {
    const userInput = document.getElementById("numberInput").value;
    const num = parseInt(userInput, 10);
    const resultDiv = document.getElementById("result");

    if (isNaN(num)) {
        resultDiv.textContent = "Please enter a valid number.";
    } else {
        if (isPrime(num)) {
            resultDiv.textContent = num + " is prime.";
        } else {
            resultDiv.textContent = num + " is not prime.";
        }
    }
});
