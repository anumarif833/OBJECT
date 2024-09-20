// 1 . Suppose you have an array of object.
// var itemsArray = [
//    {name:"juice",price:"50", quantity:"3"},
//    {name:"juice",price:"50", quantity:"3"},
//    {name:"juice",price:"50", quantity:"3"},
//    {name:"juice",price:"50", quantity:"3"}];
//    calculate total price of each item and all items;


var itemesArray = [       
   {name : "juice",price : "100", quantity: "2"},
   {name : "cake",price : "600", quantity: "1"},
   {name : "cookis",price : "80", quantity: "3"},
   {name : "pen",price :"10", quantity: "4"}];

var total = 0;
for(var key in itemesArray){
   var items = itemesArray[key]
   var item_price = items.price*items.quantity;
   console.log(`the price of ${items.name} is ${item_price}`)
   total +=item_price;
}


console.log(`The total price of evrything is ${item_price}`);


//Q.2 create an object with propetices name, email, password, age, genter, city,country,
// check if age and country properice exist in object or not. also chexj fiestName and propatice in object.


var profiles = {
   name : "anumarif",
   email : "anumarif833@gmail.com",
   passw : "123",
   age : "32",
   genter : "female",
   city : "karachi"
}
if("age" in profiles){
   console.log("The property `age` exists in the object.")
}

console.log("country" in profiles);
console.log("firstname" in profiles);
console.log("lastname" in profiles);


// Q.3. Creat a construtor function with some propertices. Now create multiple records using the constructor.

  function student(name  ,  age,city,genter){
   this.name = name;
   this.age = name;
   this.city = name;
   this.genter = name;

  }

  var student1 = new student("anumarif",32,"khi","female");
  var student1 = new student("sanaullah",60,"isl","male");
  var student1 = new student("manahil",10,"1hr","female");
//   if you only want to add in construtor  function.
student.prototype.city = "pakistan"
console.log(student1)
console.log(student2)
console.log(student3)


// Q.4.  suppose you wantto check popultion of your area, their education and professions.create a conctructor function 
// which holds following properties:
// Name, gender, address, education, profession,
// Enter all records one by one.
// Hint:

// use select box for education and profession,
// use redio box for genter.

// Bonus  : use can use localStorage to save records.



 








 