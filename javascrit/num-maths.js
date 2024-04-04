const marks = 400
const balance = new Number(100.6554)
console.log(balance)
console.log(marks)
console.log(balance.toString().length)
console.log(balance.toFixed(2))

const num=123.8888
console.log(num.toPrecision(2))


const hundreds=100000
console.log(hundreds.toLocaleString())



// -----------------maths---------------------------------


console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.33))
console.log(Math.ceil(3.2))
console.log(Math.pow(2))
console.log(Math.random()*10 + 1)

const min = 10
const max = 20 

console.log(Math.floor(Math.random() * (max-min+1)) + min)




// dates

let date = new Date()
// console.log(date.toDateString())
let mycreated = new Date(2023,0,3)
console.log(mycreated.toDateString())
let stamp = Date.now()
console.log(Math.round(stamp/1000000))