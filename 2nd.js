//comments
//This is the comments
/*this is my 
comment*/

//Operators in javascript
//Arithmetic operators
/*let a=5;
let b=2;
console.log("a=",a,"&b=",b);
console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a/b=",a/b);
console.log("a%b=",a%b);
console.log("a**b=",a**b);
*/

//unary operator
/*let a=9;
let b=7;
console.log("a=",a,"b=",b);
a=a+1;
console.log("a=",a);
*/

/*let a=9;
let b=7;
console.log("a=",a,"b=",b);
a++;
console.log("a=",a);
*/

/*let a=9;
let b=7;
console.log("a=",a,"b=",b);
a=a-1;
console.log("a=",a); */

/* let a=9;
let b=7;
console.log("a=",a,"b=",b);
a--;
console.log("a=",a);
*/

/*let a=8;
let b=4;
console.log("a=",a,"b=",b);
console.log("a++=",a++);
console.log("a=",a);
*/

/* let a=8;
let b=4;
console.log("a=",a,"b=",b);
console.log("a--=",a--);
console.log("a=",a);
*/

//ASSIGNMENT OPERATORs
/*let a=8;
let b=4;
//a+=4;
//a-=4;
//a*=4;
//a/=4;
//a%=4;
//a**=4;
console.log("a=",a);
*/

//COMPARISON OPERATORS
/* let a=8;
let b=8;
//console.log("a==b",a==b);
//console.log("5==2",a==b);
//console.log("8==8",a==b);
console.log("8!=8",a!=b); //false
*/
/*let a=8;
let b="8";
console.log("a==b",a==b); //true
*/

/*let a=8;
let b="8";
//console.log("a===b",a===b);
console.log("a!==b",a!==b);
*/

/*let a=5;
let b=3;
console.log("a>b",a>b);
console.log("a<b",a<b);
console.log("a>=b",a>=b);
console.log("a<=b",a<=b);
console.log("5<=3",a<=b)
*/

//Logical Operators
//logical AND &&
/*let a=5;
let b=3;
/*let cond1=a>b;
let cond2=a===6;
console.log("cond1 && cond2=", cond1 && cond2);
*/
//console.log("cond1 && cond2=", a<b && a===6);


//Logical OR ||
/*let a=6;
let b=5;
console.log("cond1 || cond2=" , a<b || a==6);
*/

//logical NOT !
/*let a=6;
let b=5;
console.log("!(6<7)" , !(a<b) );
*/


//CONDITIONAL STATEMENTS
//To implements  some condition in the code
/*let age=14;
if (age>=18){
    console.log("you can vote");
}
if (age<18){
    console.log("you can vote");
}
    */

/* let age=14;
let mode="dark";
let color;
if(mode=="dark"){
    color="black";
}
if(mode=="light"){
    color="white";
}
console.log(color);
*/

/* let mode="light";
let color;
if(mode=="dark"){
    color="black";
}
else{
    color="white";
}
console.log(color);
*/


/*let age=16;
if(age>=18){
    console.log("vote");
}
else{
    console.log("not vote");
}
    */

//odd or even
/*
let num=10;
if(num%2===0){
    console.log(num," is even");
}else{
    console.log(num," is odd");
}
*/

//else-if statement
/*
let mode="dark"
let color;
if (mode="dark"){
    color="black";
}
else if(mode=="blue"){
    color="blue";
}
else if(mode=="pink"){
    color="pink"
}
else{
    color="white";
}
console.log(color);
if(mode==="dark") console.log(mode);
*/

//Operators in javascript
 //Ternary Operators
  // condition?true:false output
  
  /*
  let age=25;
  let result = age>=18? "adult": "not adult";
  console.log(result);
  */  //most used
 /*
 let age=25;
 age>=18 ? console.log("adult"):console.log("adult");
 */
//SWITCH 
//MDN DOCs
//alert("hello"); //one time popup
//prompt("hello");
/*let name=prompt("hello");
    console.log(name);
*/

//practice question
//Get user to input a number using prompt("Enter a number:"). Check if the numbre is multiple of % of not.
/*let num=prompt("enter a number:");
if(num%5==0){
    console.log(num,"is a multiple of 5");
}
else{
    console.log(num,"is NOT sa Multiple of 5");
}
*/

//Write a code which can give grades to students according to their scores
/*let score=56;
let grade;
if(score>=0 && score<=49){
    grade="F"
}
else if(score>=50 && score<=59){
      grade="D";
}
else if(score>=60 && score<=69){
     grade="C";
}
else if(score>=70 && score<=89){
   grade="B";
}
else if(score>=80 && score<=100){
     grade="A";
}
console.log("according to you score , Your grade was:",grade);
*/
let score=prompt("Enter ypur score(0-100):");
let grade;
if(score>=0 && score<=49){
    grade="F"
}
else if(score>=50 && score<=59){
      grade="D";
}
else if(score>=60 && score<=69){
     grade="C";
}
else if(score>=70 && score<=89){
   grade="B";
}
else if(score>=80 && score<=100){
     grade="A";
}
console.log("according to you score , Your grade was:",grade);