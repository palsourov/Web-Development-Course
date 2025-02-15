const array=[10,30,40,45,69,48,30]
function getmax(num){
    let max =num[0];
    for(const number of num){
        if(max<number){

            max=number;
        }
    }
    return max;
}
const maxmum=getmax(array);
console.log('the max value is : '+maxmum);



