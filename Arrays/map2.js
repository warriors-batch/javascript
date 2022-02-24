// take an array with duplicate elements and
// count number of times an element is present
arr = [10,20,10,20,10,40,10,30,30,30,10,20]

let m = new Map() 

for( t of arr){
    if(m.has(t)){
       value = m.get(t)
       m.set(t, value+1)
    }
    else{
        m.set(t,1)
    }

    
}
console.log(m)