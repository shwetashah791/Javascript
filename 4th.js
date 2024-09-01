/*
let marks=[97,82,75,64,36];
console.log(marks);
console.log(marks.length);

let heroes = ["ironman","thor","hulk","shaktiman", "spiderman", "antmany"];
console.log(heroes);
*/

//ARRAY INDICEs
//LOOPing over an array
//for loop
/*let heroes = ["ironman","thor","hulk","shaktiman", "spiderman", "antmany"];
for(let index=0;idx<=heroes.length;index++)
console.log(heroes[index]);
*/
//for of
/*for(let hero of heroes){
    console.log(hero);
}*/
/*
let cities=["delhi","pune","mumbai","hyderabad","gurgaon"];
for(let citu of cities){
    console.log(city.toUppperCase)
}
    */

//PRACTICE QUESTION
//For the given with marks of students->[85,97,44,37,76,60]
//Find the average marks of the entire class.
/*
let marks = [85,97,44,37,76,60];
let sum=0;
for(let val of marks){
    sum+=val;
}
let avg=sum/marks.length
console.log(`Avg marks of the class=${avg}`)
*/

//PRACTICE QUESTION
//for a given array with pricesof % items ->[250,645,899,600.356]
//All itnes have an offer of 10% OFF on them. change the array to store final price after applying offer.

/*
let items =[250,645,899,600.356];
let index=0;
for(let val of items){
    let offer =val/10;
    items[index]=items[index]-offer;
    console.log(`value after offer= ${items[index]}`);
    index++;
}
    */
   /*
   let items=[250,645,899,600.356];
   for(let i=0;i<items.length;i++){
   let offer= items[i]/10;
   items[i]-=offer;
}
console.log(items);
*/

//ARRAY METHODS (push,pop,toString)
//push
/*
let foodItems=["potaao","apples","litchi,'tomato"];
foodItems.push("chips","burger","paneer");
console.log(foodItems);
*/
//POP
/*
let foodItems=["potaao","apples","litchi,'tomato"];
console.log(foodItems);
foodItems.pop();
console.log(foodItems);
*/
/*
let foodItems=["potaao","apples","litchi","tomato"];
console.log(foodItems);
let deletedItem=foodItems.pop();
console.log(foodItems);
console.log("deleted",deletedItem);
*/
/*
let foodItems=["potaao","apples","litchi","tomato"];
console.log(foodItems);
console.log(foodItems.toString());
*/

let foodItems=["potaao","apples","litchi","tomato"];
console.log(foodItems);
console.log(foodItems.toString());
