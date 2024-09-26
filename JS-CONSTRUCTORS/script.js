//Sometimes we need to create many objects of the same type.

//To create an object type we use an object constructor function.

//DEMO-1,2,3

function Person(first, last, age, gender) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.gender = gender;
}
//Person is the constructor function and first , last , age , gender will receive the values whenever this function is called

//The value of this will become the new object when a new object is created.

//How to create objects now ?

const myFather = new Person("Varun", "Bhatia", 45, "M");
const myArray1 = Object.values(myFather);

const myMother = new Person("Anjali", "Bhatia", 45, "F");
const myArray2 = Object.values(myMother);

const mySister = new Person("Rhythm", "Bhatia", 10, "F");
const myArray3 = Object.values(mySister);

document.getElementById("demo1").innerHTML = myArray1;
document.getElementById("demo2").innerHTML = myArray2;
document.getElementById("demo3").innerHTML = myArray3;

//--------------------------------------------------------//

//DEMO-4
//We can set a default value too

function Person1(first, last, age, gender) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.gender = gender;
  this.nationality = "Indian";
}

const friend = new Person1("Harshda", "Chabbra", 15, "M");

document.getElementById("demo4").innerHTML = friend.nationality;

//--------------------------------------------------------------//

//DEMO-5 , 6

function Person2(first, last, age, gender) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.gender = gender;
}

const friend2 = new Person2("Harshda", "Chabbra", 15, "M");

document.getElementById("demo5").innerHTML = Person2.nationality; //o/p-undefined

//You cannot add a property to a object constructor

friend2.nationality = "Indian";
document.getElementById("demo6").innerHTML = friend2.nationality;

//You can add a property after you have already created a new object 

//----------------------------------------------------------------------//

//To add a property to a object constructor , we must add it to function prototype

function Person3(first, last, age, gender) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.gender = gender;
}

const friend3 = new Person3("Harshda", "Chabbra", 15, "M");
const friend4 = new Person3("Harshda", "Chabbra", 15, "M");

Person3.prototype.nationality = "Indian";
//Now this will add nationality property to the object constructor

document.getElementById("demo7").innerHTML =
  "Nationality of friend3 is " + friend3.nationality;

document.getElementById("demo8").innerHTML =
  "Nationality of friend4 is " + friend4.nationality;

  //--------------------------------------------------------------//
  //DEMO-9 
  function Person4(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.fullName = function() {
      return this.firstName + " " + this.lastName;
    };
  }
  const friend5 = new Person4("Harshda", "Chabbra", 15, "BLUE");
  const myArray5=Object.values(friend5);
  document.getElementById("demo9").innerHTML=friend5.fullName();
  //dDEMO-10
  //Adding a method to an object 
friend5.changeName=function( name){
  return name; 
}
document.getElementById("demo10").innerHTML=friend5.changeName("doe");
//demo-11
//Adding a method to objet construtor 

Person4.prototype.changeNameof=function(nameof){
  return nameof;
};
const friend6 = new Person4("Harshda", "Chabbra", 15, "BLUE");

document.getElementById("demo11").innerHTML=friend6.changeNameof("dowy");







  

