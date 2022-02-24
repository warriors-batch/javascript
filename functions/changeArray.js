function changeArray(a){
    for( i = 0; i<5; i++){
       a[i] = a[i] ** 2
    }
    // return a
}

a = [1,2,3,4,5]
changeArray(a)
console.log(a)

