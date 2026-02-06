function countPrimeNumbers() {
    let count = 0;
    
    for (let num = 2; num <= 100; num++) {
        let isPrime = true;
        
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        
        if (isPrime) {
            count++;
        }
    }
    
    return count;
}

const start = performance.now();
countPrimeNumbers();
const end = performance.now();

console.log("Execution time of printing countPrimeNumbers was " + (end - start) + " milliseconds.");