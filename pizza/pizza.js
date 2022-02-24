// order the pizza 

// accept the order 

// pass instruction to cook 

// cook vegetables cut 

// cook pizza heat 

// finalyy pizza ready 

// order delivery start 

// order delivered 

// you ate



let orderPizza=()=>{
    console.log("Order the Pizza")
}

let pizzaProcess=(first,second)=>{
   first()
   second()
}

pizzaProcess(orderPizza, ()=>{ console.log("accept the order")})

