//DEMO-1

const person={   //person-object
    firstName:"Kanishka",//firstName-property , Kanishka- value
    lastName:"Bhatia",//lastNmae-property , Bhatia-value 
    age:23,//age-property , 23-value 
    fullName: function(){
        return this.firstName + " " + this.lastName;//fullName-function definition , fullName()-function 
    }

};

document.getElementById("demo1").innerHTML=person.fullName;
// fullName without () will give you function definition 

//DEMO-2

document.getElementById("demo2").innerHTML=person.fullName();
//this will execute the function and return whatever you have given in the function 
//----------------------------------------------------------------------------//

//DEMO-3
const person1={
    firstName:"Kanishka",
    lastName:"Bhatia",
    age:23
};
person1.fullNameinCap=function(){
    return (person1.firstName + " " + person1.lastName).toUpperCase();
}
document.getElementById("demo3").innerHTML=person1.fullNameinCap();
//-----------------------------------------------------------------------------//


//DEM0-4
//Using loop 
const person2={
    firstName:"Kanishka",
    lastName:"Bhatia",
    age:23,
    city:"Dehradun",
    state:"Uttarakhand"
};

let text="";
for (let x in person2){
    text+=person2[x]+" ";
};
//we used person2[x] , person.x will not work as it is a loop variable , it will give the output as undefined .

document.getElementById("demo4").innerHTML=text;

//---------------------------------------------------------------------------//

//DEMO-5
//Using Object.values()
const person3={
    firstName:"Kanishka",//firstName-property , Kanishka-value  
    lastName:"Bhatia",
    age:23,
    city:"Dehradun",
    state:"Uttarakhand"
};

//Object.values() creates an array of the property values 
const myArray=Object.values(person3);

//myArray-Kanishka ,Bhatia , 23, Dehradun , Uttarakhand 

document.getElementById("demo5").innerHTML=myArray;
//----------------------------------------------------------------//

//DEMO-6
//Using Object.entries()

//Object.entries() makes it simple to use objects in a loop 

const fruits={
    Banana:200,
    Mango:700,
    Pear:90,
    Dragonfruit:9000,
    Watermelon:800

};

let text1="";
for(let [fruit,amount] of Object.entries(fruits))
{
    text1+= fruit + ":" + amount + "<br>"
}

document.getElementById("demo6").innerHTML=text1;
//DEMO-7
const person4={
    firstName:"Kanishka",//firstName-property , Kanishka-value  
    lastName:"Bhatia",
    age:23,
    city:"Dehradun",
    state:"Uttarakhand"
};
let text2="";
for(let [property,value] of Object.entries(person4))
{
    text2+= property + ":" + value + "<br>"
}

document.getElementById("demo7").innerHTML

//----------------------------------------------------------------------------//










