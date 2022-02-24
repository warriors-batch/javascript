//1: Take a number and check it is Prime or not

// 2: Instead of one number check all numbers from 1-100, if prime print the number

//3: instead of prinitng a prime no: if a number is prime find the sum of its digit.

function prime(n){
    // let f = 0
    
    if(n == 1){
      return false
    }
    
    for(let i = 2; i<n; i++){
        if(n%i == 0){
            return false
            // f = 1
            // break
        }
    }
    
      return true
    
}

for(let i = 1; i<=100; i++){
    if(prime(i)){
      console.log(i , "digits sum is", sumOfDigits(i))
    }
}


function sumOfDigits(n){
    let sum = 0
    while(n>0){
        let a = n%10
        sum = sum+ a
        n = parseInt(n/10)
    }
    return sum
}