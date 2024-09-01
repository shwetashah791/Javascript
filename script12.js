//synchronous
// console.log("one");
// console.log("two");
// console.log("three");


// function hello(){
//     console.log("hello");
// }
// selfTimeout(hello,2000) //timeout:


// setTimeout(()=>{
//     console.log("hello");
//     },4000);   //timeout


// console.log("one");
// console.log("two");
// setTimer(()=>{
//     console.log("hello");
// },4000);     //timeout;
// console.log("three");
// console.log("four");


//callback
// function sum(a,b){
//     console.log(a+b);
// }

// function calculator(a,b,sumCallback){
//     sumCallback(a,b);
// }
// calculator(1,2,sum);


// function sum(a,b){
//     console.log(a+b);
// }

// function calculator(a,b,sumCallback){
//     sumCallback(a,b);
// }
// calculator(1,2,(a,b)=>{
//     console.log(a+b);
// });


// const hello=()=> {
//     console.log("hello");
// }
// setTimeout(hello,3000);

//nesting
// let age=19;
// if(age>=18){
// if(age>=60){
//     console.log("senior");
// }else{
//     console.log("middle");
// }
// }else{
//     console.log("child");
// }


// for(let i=0;i<5;i++){
//     let str=" ";
//     for(let j=0;j<5;j++){
//         str=str+j;
//     }
//     console.log(i,str);
// }


// function getData(dataId){
//     console.log("data",dataId)
// }

// function getData(dataId){
//     setTimeout{()=> {
//         console.log("data",dataId);
//     },2000);
// }
// getData(1);
// getData(2);
// getData(3);

//data1
//data2
//data3



// function getData(dataId,getNextData){
//     setTimeout(()=> {
//         console.log("data",dataId);
//         getNextData();
//     },2000);
// }
// getData(1,getData(2));


// function getData(dataId,getNextData){
//     setTimeout(()=>{
//         console.log("data",dataId);
//         if(getNextData){
//             getNextData();
//         }
//     },2000);
// }
// getData(1,()=>{
//     getData(2);
// });

//function getData(dataId,getNextData){
//     setTimeout(()=>{
//         console.log("data",dataId);
//         if(getNextData){
//             getNextData();
//         }
//     },2000);
// }
// getData(1,()=>{
//     getData(2,()=>{;
//         getData(3);
// });
// });


//CALLBACK HELL
// function getData(dataId,getNextData){
//     setTimeout(()=>{
//         console.log("data",dataId);
//         if(getNextData){
//             getNextData();
//         }
//     },2000);
// }
// getData(1,()=>{
//     console.log("getting data2....");
//     getData(2,()=>{
//         console.log("getting data2....");
//         getData(3,()=>{
//             console.log("getting data2....");
//         });
// });
// });


//PROMISE
// let promise=new Promise((resolve,reject) => {
//     console.log("I am a promise");
//     // resolve(123)
//     // resolve("sucess")
//     reject("some error")
// });

//resolve
// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//             resolve("success");
//             if(getNextData){
//                 getNextData();
//             }
//         },5000);
//     });
// }


//REJECT
// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             reject("error");
//             if(getNextData){
//                 getNextData();
//             }
//         },5000);
//     });
// }



// let getPromise=()=>{
//      return new Promise((resolve,reject)=>{
//         console.log("I am promise")
//         resolve("success");
//     });
// };
// let promise=getPromise();
// promise.then(()=>{
//     console.log("promise fulfilled");
// });


// let getPromise=()=>{
//     return new Promise((resolve,reject)=>{
//        console.log("I am promise")
//        reject("error");
//    });
// };
// let promise=getPromise();
// promise.then((res)=>{
//    console.log("promise fulfilled",res);
// });

// promise.catch((err)=>{
//     console.log("rejected",err);
// });


// function asyncFunc(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("some data1");
//     resolve("sucess");
// },4000);
// });
// }

// console.log("fetching data1");
// let p1=asyncFunc();
// p1.then((res)=>{
//     console.log(res);
// });



// function asyncFunc1(){
//     return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//           console.log("some data1");
//       resolve("sucess");
//   },4000);
//   });
//   }
//   function asyncFunc2(){
//     return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//           console.log("some data2");
//       resolve("sucess");
//   },4000);
//   });
//   }

//   console.log("fetching data1");
//   let p1=asyncFunc1();
//   p1.then((res)=>{
//       console.log(res);
//   console.log("fetching data1");
//   let p2=asyncFunc2();
//   p1.then((res)=>{
//       console.log(res);
//   });
//});

// function asyncFunc1(){
//     return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//           console.log("some data1");
//       resolve("sucess");
//   },4000);
//   });
//   }
//   function asyncFunc2(){
//     return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//           console.log("some data2");
//       resolve("sucess");
//   },4000);
//   });
//   }

//   console.log("fetching data1");
// asyncFunc1().then((res)=>{
//   console.log("fetching data1");
//   asyncFunc1().then((res)=>{
//   });
// });


//async await

// async function hello(){
//     console.log("hello");
// }


// function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("weather data");
//             resolve(200);
//         },2000);
//         });
//     }
//     async function getWeatherData(){
//         await api();
//         await api();
//     }


// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//             resolve("sucess");
//         },2000);
//         });
//     }
//     async function getAllData(){
//         await gatData(1);
//         await getData(2);
//         await getData(3);
//     }


function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("sucess");
        },2000);
        });
    }
    async function getAllData(){
        console.log("getting data1...");
        await getData(1);
        console.log("getting data1...");
        await getData(2);
        console.log("getting data1...");
        await getData(3);
        console.log("getting data1...");
        await getData(4);
        console.log("getting data1...");
        await getData(5);
    }