function change(a){
  a = a+10 
  console.log("Inside function", a)
}

let a = 2 
console.log("Before call", a)
change(a)
console.log("After call", a)