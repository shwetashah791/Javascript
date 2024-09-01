// const student={
//     fullName:"shraddha Khapra",
//     marks:94.4,
//     printMarks:function(){
//         console.log("marks=",this.marks); //->this.marks->studeny.marks.
//     },
// };

// const employee={
//     calcTax(){
//         console.log("tax rate is 10%");
//     },
// };

// const karanArjun1={
//     salary:50000,

// };
// const karanArjun2={
//     salary:50000,

// };
// const karanArjun3={
//     salary:50000,

// };
// const karanArjun4={
//     salary:50000,

// };
// const karanArjun5={
//     salary:50000,

// };
// karanArjun1.__proto__=employee;
// karanArjun2.__proto__=employee;
// karanArjun3.__proto__=employee;
// karanArjun4.__proto__=employee;
// karanArjun5.__proto__=employee;



// class ToyotaCar{
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
//     setBrand(brand){
//         this.brandName=brand;
//     }
// }
// let fortuner=new ToyotaCar();
// fortuner.setBrand("fortuner");
// let lexus=new ToyotaCar();
// lexus.setBrand("fortuner");

//constructor
// class ToyotaCar{
//     constructor(){
//         console.log("creating new object");

//     }
//        start(){
//            console.log("start");
//         }
//      stop(){
//             console.log("stop");
//        }
//         setBrand(brand){
//              this.brandName=brand;
//        }
//      }
//     let fortuner=new ToyotaCar("fortuner");  //constructor invoke
   
//     let lexus=new ToyotaCar();   //constructor invoke


// class ToyotaCar{
//     constructor(brand,mileage){
//         console.log("creating new object");
//         this.brand=brand;
//         this.milleage=mileage;
//     }
//     start(){
//            console.log("start");
//         }
//     stop(){
//             console.log("stop");
//        }

//    }
    
//     let fortuner=new ToyotaCar("fortuner",10);  //constructor invoke
//     console.log(fortuner);
//     let lexus=new ToyotaCar("lexus",12);
//     console.log(lexus);  


//Inheritance

// class Parent{
//     hello(){
//         console.log("hello");
//     }
// }
// class Child extends Parent{}
//     let obj= new Child();


// class Person{
//     eat(){
//         console.log("eat");
//     }
// sleep(){
//   console.log("sleep");
// }
// work(){
//     console.log("Do nothing");
// }
// }
// class Engineer extends Person{
//     work(){
//         console.log("solve problems,build something");
//     }
// }
// class doctor extends Person{
//     work(){
//         console.log("treat patients");
// }
// }
// let shradhaObj=new Engineer();



// 

//super keyboard

// class Person{
//     constructor(name){
//         this.species="homo sapiens";
//         this.name=name;
//     }
//         eat(){
//              console.log("eat");
//          }
//         }
//      class Engineer extends Person{
//         constructor(name){
//             super(name)
//         }
//          work(){
//             super.eat();
//              console.log("solve problems,build something");
//          }
//      }
     
//      let engObj=new Engineer("shraddha");


//Error handling
let a=5;
let b=10;
console.log("a=",a);
console.log("b=",b);
console.log("a+b=",a+b);
try{
    console.log("a+b=",a+c); //error
}catch(err){
    console.log(err);
}

console.log("a+b=",a+b);
console.log("a+b=",a+b);
console.log("a+b=",a+b);
console.log("a+b=",a+b);
console.log("a+b=",a+b);
