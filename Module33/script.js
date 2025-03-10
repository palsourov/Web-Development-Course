const  person = {
    name:"sourov",
    id:70,
    age:23
}

const newPerson= JSON.stringify(person);
 console.log(newPerson);
const newPerson1= JSON.parse(newPerson);
console.log(newPerson1);

