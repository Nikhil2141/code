
// var c = 250
let a=100

if(true){
    let a = 10
    const b = 20
    var c = 25
    console.log(a);
}
//  var c = 222


console.log(a);
// console.log(b);
console.log(c);



 function one(){
    const username = "nikhil"
    function two(){
        const website = "name"
        console.log(username);
        console.log(website);
    }
    // console.log(website);
    two()
}
one()


if(true){
    const username = "nik"
    if (username === "nik"){
        const website = "tube"
        console.log(username + website);
    }

    // console.log(website);
}
// console.log(username);





// ++++++++++++++++++++++++++  interesteing +++++++++++++++


console.log(on(1 ))
function on (num){
    return num+1

}
// addon(1 )

// addtwo(5)
// const addtwo = function(num){
//     return num+2
// }






const user = {
    username: "nik",
    price : 3333,

welcommessge:function(){
   console.log(`${this.username},welcome website`)
   console.log(this);
}



}

// user.welcommessge()
// user.username = "sam"
// user.welcommessge()

console.log(this);




// function chai (){
//     let username = "nik"
//     console.log(this.username);
// }




// const chai =() => {
//     let username = "nik"
//     console.log(this);
// }
// chai()


const addtwo = (num1,num2) => (num1 + num2)
console.log(addtwo(2,1));


