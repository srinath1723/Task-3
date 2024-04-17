//How to compare two JSON have the same properties without order?

const obj1 = { name: "Person 1", age:5 };// obj1,obj2 is an object

const  obj2 = { age:5, name: "Person 1" };

const str=JSON.stringify(obj1 ,Object.keys(obj1).sort())// TO Convert objects to strings by using JSON.stringify

const str1=JSON.stringify(obj2,Object.keys(obj2).sort())// To sort the properties using object.keys().sort()

if(str==str1)// Compareing  the sorted strings
{
    console.log("True")
}
else
{
    console.log("False")
}