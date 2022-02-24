function change(b){
    b[0] = b[0]+10 
    console.log("Inside function", b)
  }
  
  let a = [1,2,3,4] 
  console.log("Before call", a)
  change(a)
  console.log("After call", a)

// arr = [10,20,30]
// brr = arr 
// brr[0] = 100 
// console.log(arr)
// console.log(brr)