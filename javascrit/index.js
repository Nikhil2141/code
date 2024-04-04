const accountid = 144553
let accountemail = "abc@gmail.com"
var accountpassword = "1234"
accountcity = "kochi"
let accountstate;

// accountid = 2  const not change
accountemail = "ha@gmail.com"
accountpassword = "555"  
accountcity = "raipur"

/*
prefer not to use var beacause of issue in block scope and functional scope
*/
console.table([accountemail,accountpassword,accountcity,accountstate])