let score = 33

console.log(typeof(score)) // to know the type of a variable

console.log("The score is:", score)
let scoreInString = String(score) // to change number into stirngs

console.log(typeof scoreInString);

let name = "Zee1"

let nameInNumber = Number(name) // to change string into Number but its value is gonna be "NaN"

console.log(typeof nameInNumber); // it will return NaN (Not a Number) because Zee is not a number
console.log(nameInNumber)

 let value = 415
 let valueInBoolean = Boolean(value) // to change number into boolean 
  
 console.log(valueInBoolean)

 let value2 = 0
 let valueInBoolean2 = Boolean(value2) // to change number into boolean "0" or "empty" wil be converted to "False"
  
 console.log(valueInBoolean2)

 // same way number can be converted to string and srting oprations will be performed on it