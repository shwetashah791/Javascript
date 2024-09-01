//Loops are used to execute a piece of code again  and again
//for loop
/* for (let i=1;i<=5;i++){
    console.log("apna college"); 
}
    console.log("loop has ended");  //5 exceute
    */

    //calculate sum of 1 to 5
    /*let sum=0;
    for(let i=1;i<=5;i++){
        sum=sum+i;
    }
    console.log("sum=",sum);
    console.log("loop has ended");
    */
   /* let sum=0;
    let n=100;
    for(let i=1;i<=n;i++){
        sum=sum+i;
    }
    console.log("sum=",sum);
    console.log("loop has ended");
    */

    //print 1 to 5
    /*for(let i=1;i<=5; i++){
          console.log("i=",i);
    }
*/
    /*  for(var i=1;i<=5; i++){
        console.log("i=",i);
  }
   console.log(i);
   */

   //INFINITE LOOP
   /* for(let i=1;i<0;i++){
    console.log("i=",i);
   }
    */

   //WHILE LOOP
   /* let i=1;
   while(i<=5){
    console.log("i=",i);
    i++;
}
    */

//Do while loop
/*let i=20;
   do{
    console.log("apna college");
    i++;
   }
    while(i<=10);
   */ 

   /* let i=1;
   do{
    console.log("i=",i);
    i++;
   }
    while(i<=5);
    */

    //FOR OF LOOP
    /*let str="Apna college";
    for(let i of str){      //iterator->character
        console.log("i=",i);
    }
        */
/*
    let str="Javascript";
    let size=0;
    for(let i of str){      //iterator->character
        console.log("i=",i);
        size++;
    }
    console.log("string size=",size);
    */

//FOR IN LOOP
/* 
let student={
    name:"shweta",
    age:20,
    cgpa:8.03,
    isPass:true,
};
for(let i in student){
    console.log(i);
}
    */

/* let student={
    name:"shweta",
    age:20,
    cgpa:8.03,
    isPass:true,
};
for(let key in student){
    console.log("key=",key,"value=",student[key]);
}*/

//PRACTICE QUESTION 1
//print all even numbers from 1 to 100
/*
for(let num=0;num<=100;num++){
    console.log("num=",num);
}
  */
//EVEN NUMBER
/*
for(let num=0;num<=100;num++){
    if(num%2==0){
    console.log("num=",num);
    }
}
    */
//odd number
/*
for(let num=0;num<=100;num++){
    if(num%2!=0){
    console.log("num=",num);
    }
}
    */

//PRACTICE QUESTION 2
/*
let gameNum=25;
let userNum=prompt("GUESS THE GAME NUMBER:")
while(userNum!=gameNum){
    userNum= prompt("you entered wrong number,GUESS THE GAME NUMBER AGAIN:")
}
    console.log("congratrulations, you enetr the right game number!")
*/

//STRINGS IN JAVASCRIPT
/*
let str="Apna college";
console.log(str[8]);
*/

//template Literals
/*
let obj={
    item:"pen",
    price:10,
};
console.log("The cost of",obj.item,"is",obj.price,"rupees")
let specialString='this is a template literals';
console.log(typeof specialString);
*/
/*
let obj={
    item:"pen",
    price:10,
};
let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);
let specialString=`this is a template literals`;
console.log(typeof specialString);
*/
/*
let specialString=`this is a template literals ${1 + 2 + 3}`;
console.log( specialString);
*/

//console.log("apna \n college\t my");
/*
let str="apna\t college";
console.log(str.length);
*/
//let str="apnaCollege";
/*
let str="ApnaCollege";
let newStr=str.toUpperCase();
console.log(str);
    console.log(newStr);
*/
/*let str="ApnaCollege";
str=str.toUpperCase();
console.log(str);
*/
/*
let str="ApnaCollege";
let newStr=str.toLowerCase();
console.log(str);
    console.log(newStr);
    */
/*
    let str="      Apna College    Str   ";
    console.log(str.trim());
    */

    //Slice
   /* let str="01234567";
    console.log(str.slice(0,5))
*/
   /* let str="HELLO";
    console.log(str.slice(0,3))
    */
/*
    let str="HELLO";
    console.log(str.slice(3))
    */
/*
//concate
    let str1="apna";
    let str2="college";
    let res=str1.concat(str2);
    console.log(res)
    */
   /*
    let str1="apna";
    let str2="college";
    let res=str1+str2;
    console.log(res)
    */
//replace
   /* let str="hello";
    console.log(str.replace("h","y"));
    */

    //character at
    /*
    let str="IloveJS";
    console.log(str.charAt(3));
    */
/*
    let str="IloveJS";
    str=str.replace("I","s");
    console.log(str);
*/
//practice question
//prompt the user to enter their full name. Generate a username for them based on the input.
//start username with 2, followeed by their fullname and ending with the fullnamelength.4
let fullName=prompt("enter your fullnmae without spaces");
let username="@"+fullName+fullName.length;
console.log(username);