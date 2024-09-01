console.log("Welcome to Apan college");
console.log("shweta Kumari Shah");
console.log("Ilove javascript");

fullName="shweta";
age=24;
price=99.99;
radius=14;
x=null;
y=undefined;
isFollow=true;
console.log(fullName,age,price,x,y,radius);
console.log(isFollow)

//Variables  rules
 fullName="shweta";
 _fullName="shweta";
 $fullName="Shweta";

 console.log(fullName);
 console.log(_fullName);
 console.log($fullName);

//Let, const and var

let name ="shweta shah";
let age3=76;
let price2=87;
console.log(name);
console.log(age3);
console.log(price2);

//var
var age=45;
var age=78;
var age=98;
console.log(age);  //bad practice

//let
let age1=45;
age1=87;
age1=76;
console.log(age1);  //Good practice

//const
const age2=24;
console.log(age2);

//undefined
let a;
console.log(a);

let b;
b=8;
console.log(b);

//const must be initialize
const c=78;
console.log(c);

//block
{
    let a=5;
    console.log(a);
}
{
    let a=6;
    console.log(a);
}
//let is ne way and var is old ways

//data types 
//number
let age5=9;
let price1=7;

//string
let fullName1="Shweta k";

//boolean
isFollow=true;

//undefined
let x8;

//null
let s=null;

//bigint
let v=BigInt("123")

//symbol
let n=Symbol("hello js")

//objects
const student={
    fullName:"shweta",
    age:24,
    cgpa:8.03,
    isPass:true,
};
student["age"]=student["age"]+1
student["fullName"]="rahul"
console.log(student["age"])
console.log(student["fullName"])

//practice questions
const product={
    title:"Ball pen",
    rating:4,
    offer:7,
    price:220,

};

//practice 2
const profile={
    username:"@shwetashah",
    isFollow:false,
    followers:123,
    following:123,
};
console.log(typeof profile["username"]);