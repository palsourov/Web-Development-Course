// const phone=[
//     {name:'samsung',camera:'12px',color:'black',price:1500},
//     {name:'Iphone',camera:'12px',color:'black',price:150000},
//     {name:'Vivo',camera:'12px',color:'black',price:1200},
//     {name:'Xaomi',camera:'12px',color:'black',price:1800},
//     {name:'Walton',camera:'12px',color:'black',price:1400}
// ]
// function chipPricePhone(phn){
//       let min=phone[0];
//       for (const pr of phone) {
          
//          if(min.price>pr.price){
//             min= pr;
//          }
          
//       }
//       return min;
// }
// const chipPrice=chipPricePhone(phone);
// console.log(chipPrice);

//  task
const phone=[
    {name:'samsung',camera:'12px',color:'black',price:1500},
    {name:'Iphone',camera:'12px',color:'black',price:150000},
    {name:'Vivo',camera:'12px',color:'black',price:1200},
    {name:'Xaomi',camera:'12px',color:'black',price:1800},
    {name:'Walton',camera:'12px',color:'black',price:1400}
]
function chipPricePhone(phn){
      let max=phone[0];
      for (const pr of phone) {
          
         if(max.price<pr.price){
            max= pr;
         }
          
      }
      return max;
}
const chipPrice=chipPricePhone(phone);
console.log(chipPrice);


