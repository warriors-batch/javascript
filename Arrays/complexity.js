
// Time, space

// Best 
// worst 
// avg

// let arr = [10,20,30,40,50......60,70,80,90,100] // n -> length of array
let x

// b = 1 step 
// w = n step 
// a = (b+w)/2

for(i=1; i<=n;i++){
    console.log("Hello")  //n => O(n)
}

for(i=1; i<=2*n;i++){
    console.log("Hello") //2n => O(n)
}

for(i=1; i<=n;i=i+2){
    console.log("Hello") // n/2 => O(n)
}

for(i=1; i<=n/99999999999;i++){
    console.log("Hello")   // n/99999999999 => O(n)
}

for(i=1; i<=10;i++){
    console.log("Hello") // 10 => O(1)
}





for(i=1; i<=n;i++){
    console.log("Hello")  
}
for(j=1; j<=n;j++){
    console.log("Hello")  
}

//  n, n => 2n => O(n)
// o(n), o(n) => O(n)


for(i=1; i<=n;i++){
    for(j=1; j<=n;j++){
        console.log("Hello")  
    }
}

for(i=1; i<=n;i++){
    for(j=1; j<=i;j++){
        console.log("Hello")  
    }
    for(k=1; j<=n;k++){
        console.log("Hello")  
    }
}

for(i=1; i<=n;i++){
    for(j=1; j<=i;j++){
        for(k=1; j<=n;k++){
            console.log("Hello")  
        }
    }
}