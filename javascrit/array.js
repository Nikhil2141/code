const arr = [1,2,3,4,5]
arr.push(6)
arr.pop()
arr.unshift(6)
arr.shift()
arr.includes(5) //true
arr.includes(6) //false
arr.indexOf(4) //display index ==> 3
arr.join()    // convert into string
arr.slice(1,3) // [2,3]
arr.splice(1,3) // [2,3,4] and return deleted elemnts main array [1,2,3,4,5] ==> [1,5]


const arr1 = [1,2,3,4,5]
const arr2 = [6,7,8]
arr1.push(arr2)       //
arr1.concat(arr2)    //   ==> [1,2,3,4,5,[6,7,8]]
console.log([...arr1,...arr2]);   //==> [1,2,3,4,5,6,7,8]


const anotherarray = [1,2,3,[4,5,6,[7,8,9]]]
console.log(anotherarray.flat(Infinity));     //  ==> [1,2,3,4,5,6,7,8,9]


console.log(Array.isArray("nikhil")) //==> false
console.log(Array.from("nikhil"));  //===> 'n','i', 'k','h','i','l' 
console.log(Array.from({name:"nikhil"}));  //==>   []

let score1="nik"
let score2=200
let score3=true
console.log(Array.of(score1,score2,score3))   //==>>   ["nik",200,true]


