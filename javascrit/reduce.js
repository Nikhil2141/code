const coding =["js","ruby","java"]

// const values = coding.forEach((item)=>{
//     console.log(item);
//     return items
// })

// console.log(values);


// const num =[1,2,3,4,5,6,7,8,9,10]
// // const newnum = num.map((nums)=>nums>4)
// const nums = num.map((num)=>num>4);
// console.log(nums);

// // const num =[1,2,3,4,5,6,7,8,9,10]c
// console.log(num.map((num)=>num+10));  //num.map((num)=>num+10)



const num =[1,2,3,4,5,6,7,8,9,10]
const newnum = num.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>40)
console.log(newnum);

const numbers = [1,2,3]

const total = numbers.reduce((acc,currval)=>(acc+currval),3)
console.log(total);





const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);