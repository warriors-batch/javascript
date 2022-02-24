let hashmap =  new Map()
let arr = [10,20,30,40,50,60,70,80,90,100]
let x = 600
// convert array to map 
for(let i=0; i<arr.length; i++){
    hashmap.set(arr[i], i)
}

// logic 
console.log(hashmap.get(40))
