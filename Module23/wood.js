// task
function counter(shirt , pent , shoe){
    const shirtprice=500
    const pentprice=1000
    const shoeprice=1500
    const totalpricepent=pent*pentprice;
    const totalpriceshirt=shirt*shirtprice;
    const totalpriceshoe=shoe*shoeprice;
    const total=pentprice+shirtprice+shoeprice;
    return total;
}
const totalwood=counter(10,3,2);
console.log(totalwood);
