//alert('File linked');
/*I am going to look at the afew
of the functions,*/
// Number
// Strings
// Arrays
// Object
/*let number1 ='35'; //in this case add each two tohether
let number2 = '40';
alert ('My favorite number is' + number1);*/
//Varriabbles: letters, numbers,
//underscores, dollar sign
// begin with a letters
//you cant begin with _ $.
//Case sensitive
//example
/*let test = 'this is the test';
let Test = 'this is the a nother test';
alert(Test);*/
// camel case
//example
/*let myFavoriteNumber;
//Partiel case
// example
var my_favorte_number;*/
//Arrays
// example
// Two way to do Arrays
/*let colors = ['red','blue','green'];
alert(colors[0]);//shows the length of our numbers.
*/
/*let colors = new Array('red','yellow','orange');
//colors[3] = 'green';
colors.push('purple');
alert(colors[3]);*/
//Array numbers
/*let numbers = [5,77,6,'seven',1,7,23];
//alert(numbers[3]);
//alert(numbers.length);//gives numbers of our fields.
//alert(numbers.sort());
alert(numbers.reverse());*/
// Loops
//example
/*for(let i = 0; i <= 30; i++){
  console.log('I love the numbers'+i);
  //this is the for loops.
}
*/
// while Loops
// example
/*let i = 0;//same as for loops count the number same
while(i < 10){
  console.log(i); i++;

}
*/
/*let numbers = [33,54,76,34,2,6];
//numbers.reverse();
/*numbers.forEach(function(number){
  console.log(number);
});
*/
/*for(let i = 0;i < numbers.length;i++){
  console.log(numbers[i]);
}
*/
//Conditionals
/*let let1 = 3;
let let2 = 4;
if(let1 == let2 || let1 == 3){
  console.log('thisis true');
  }
  else {
console.log('This is false');
  }
  */
  // switch statement
  //example
  /*let fruit = 'default';
  switch(fruit){
    case "banana":
    alert('I hate banana');
      break;
      case "apple":
        alert('I love an apple');
        break;
        case "orange":
        alert('Oranges are ok');
        break;
        default:
          alert('I love all other fruits');
          break;
  }
*/
// Object
//example
// object literal
/*let person = {
  firstName: 'Ismail',
  lastName: 'Soliman',
  age: 37,
  children:['Nahid','Mohamed'],
  address:{
    street: '27 fanogade st',
    city:'Copenhagen',
    state:'KPH'
  },
  fullName:function(){
    return this.firstName+""+this.lastName;
  }
}

console.log(person.fullName());*/
//object cunstructor
/*let apple = new Object();
apple.color = 'red'; apple.shape = 'round';
apple.describe = function(){
  return 'An apple is the color '+this.color+'and is the shape'+this.shape;
}
console.log(apple.describe());*/
//constructor pattern
/*function vehicleType(Car, Motorbike, caravan){
  this.Car = Car;
  this.Motorbike = Motorbike;
  this.caravan = caravan;
  this.describe = function(){
    return 'A' +this.Car+'is the Car' +this.Motorbike+' and is the caravan '+this.caravan;
  }
}
let train= new vehicleType('blue','red','yellow');
//let melon = new vehicleType ('melon','green', 'round');
console.log(train.describe());*/

/*let
 users = [
  {
    name: 'Mohamed Adm',
    age: 29
  },
  {
    name: 'Ahmed Salim',
  age: 74
},
{
  name: 'Salim Altaib',
age: 23
},
{
  name: 'James Houe',
age: 87
},
{
  name: 'Mahadi Sadig',
age: 11
}
];
console.log(users[1].name);
*/
//Events
/*function ShowDate(){
let time = document.getElementById('time');
  time.innerHTML = Date();
}
function ClearDate(){
  var time = document.getElementById('time');
    time.innerHTML = '';

}
*/
