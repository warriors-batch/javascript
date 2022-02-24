// take an array with duplicate elements and
// remove all duplicate elements

 arr = [10,20,10,20,10,40,10,30,30,30,10,20]
 a1=[]
let m =  new Map()
for ( t of arr){
  m.set(t,1)
}
console.log(m)
k = 0
for( t of m){
    console.log(t)
   a1[k] = t[0] 
   k++
}
console.log(a1)