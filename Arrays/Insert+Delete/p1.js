// Take an array of size 10, and insert an element at index 5.

// let t = 100, index= 5
// arr = [1,2,3,4,5,6,7,8,9,10];
// // push and pop

// arr_last = []
// l = arr.length
// for(i = 5; i<l; i++){
    
//     x = arr.pop() //10,9,8,7
//     arr_last.push(x) //10,9,8
// }
// arr.push(t)


// for(i = arr_last.length-1; i>=0; i--){
//    x = arr_last.pop()
//     arr.push(x)
// }

// console.log(arr)
// console.log(arr_last)



// Delete the element at index 3.

arr = [10,20,30,40,50,60,70,80,90,100];
a1 = []
a3 = []
l = arr.length
t = 3
for(i = 0; i<t; i++){
    x = arr.shift()
    a1.push(x)
}
arr.shift()
arr = [...a1, ...arr]
console.log(arr)
// console.log(a1)

// spread operator 
// arr3 = [...a1,  ...arr]
// console.log(arr3)




// shift, unshift , push, pop 

// shift or Pop 