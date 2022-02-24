// Take an array of size 10, and insert an element at index 5(55)

// arr = [10,20,30,40,50,60,70,80,90,100];
// index= 5

// for(i = arr.length-1; i>=index; i--){
//     arr[i+1] = arr[i]
// }
// arr[index] = 55
// console.log(arr)

// Delete the element at index 3.
arr = [10,20,30,40,50,60,70,80,90,100];
index= 3
for(i = index; i<=arr.length-2; i++){
    arr[i] = arr[i+1]
}
arr.pop()
console.log(arr)
