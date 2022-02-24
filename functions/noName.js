//  ()=>{
//     console.log("Hi")
// }



// function two(){
//     console.log(2)
// }


// function one(second){
//     console.log(1)
//     second()
// }

// let two =()=>{
//     console.log(2)
// }
// one(2)
// one(()=>{console.log(2)}) // callback

// let t = 2
// one(t)



// let display = (a,b)=>{
// //    add = a+b 
// //    sub = a-b
// //    return [add,sub]

//    return [a+b , a-b]
// }
let display = (a,b) => ( [a+b , a-b])
console.log(display(10,20))