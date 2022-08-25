
// const value = 0;
// const arr = [1, 9, 17, 22]
// const sumReduce = arr.reduce((acc, item) =>{
//     return acc + item;
// }, value)

// console.log(sumReduce);

const people = [
    {name: 'meena', age: 20},
    {name: 'Rina', age:15},
    {name:'suchorita', age:22}
]
const value = 0;
const ageSum = people.reduce((acc, item)=>{
    // console.log(acc, item)
    return acc + item.age;
}, value)

console.log(ageSum);