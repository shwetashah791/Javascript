// let DATA="secret Information";
// class User {
//     constructor(name,email){
//         this.name=name;
//         this.email=email;
//     }
//     viewData(){
//         console.log("data=",DATA);
//     }
// }
// let student1=new User("shraddha","abc@email.com");
// let student2=new User("Aman","aman@email.com");
// let teacher1=new User("Dean","dean@email.com");


//Q2

let DATA="secret information";
class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewData(){
        console.log("data=",DATA);
    }
}

class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        DATA="some new value";
    }
}
let student1=new User("shraddha","abc@email.com");
let student2=new User("Aman","Aman@email.com");
let Teacher1=new User("dean","dean@gmail.com");
let admin1=new Admin("admin","admin@college.com");