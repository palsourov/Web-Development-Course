const products=[
      {name:'shampo', price:30},
      {name:'chironi', price:40},
      {name:'shirt', price:300},
      {name:'pent', price:430}
]

function getcost(cost){
    let sum=0;
   for(const product of cost ){
      sum=sum+product.price;
   }
   return sum;
}
const totalcost=getcost(products);
console.log(totalcost);
