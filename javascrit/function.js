function myname(){
console.log("n");
console.log("i");
console.log("k");
console.log("h");
console.log("i");
}
 myname()


 function addnum(num1,num2){
//   console.log(num1+num2); 
return num1+num2
 }

 const result =addnum(3,3)
console.log(result);



function loginusermessag(username="sam"){
    if(!username){
      console.log  ("please emter a name")
       return    
    }
    
    return`${username} just logged in`
}
 console.log(loginusermessag());  



 function calculateprice(val1,val2,...num1){
    return num1
 }

 console.log(calculateprice(200,400,450))


 
 const user={
    name:"as",
    price:33

 }
 function hand(anyobject){

    console.log(`name is ${anyobject.name} and price is ${anyobject.price}`)
 }
 hand(user)

const myarray = [100,200,300]
function returnvalue(getArray){
    return getArray[1]
}

console.log(returnvalue(myarray));