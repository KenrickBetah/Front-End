// //Array
// const students = ['john','peter','jack','jane'];
// const numbers = [1,2,3,4,5];
// const john = ["john","doe", 33, true];
// console.log (students);
// console.log (students);
// console.log (john);

// console.log (students [2]);
// students[2] = "bob"
// console.log (students);
// //lenght
// console.log(students.length);
// console.log(students[students.length -1]);
// //Mengakses seluruh elemen array
// for (let i = 0; i <students.length; i++) {
//     console.log(students[i]);
// }

// //array method
// //toString()
// console.log(john.toString());
// //join
// console.log (john.join(" "));
// console.log (john.join("&"));
// console.log (john.join("..."));
// //pop
// john.pop();
// console.log(john);
// //push
// john.push("Good Morning");
// console.log(john);
// //shift
// john.shift();
// console.log(john);
// //unshift
// john.unshift("Hello");
// console.log(john);
// //splice
// john.splice(3, 0, true);
// console.log(john)
// //slice
// let john2 = john.slice(2,4);
// console.log(john2);
// //concat
// let output = john.concat(numbers);
// console.log(output);




//Object
let john = {
    firstName:"john",
    lastName: "doe",
    age: 33,
    isMarried: true,
    grade: [80,90,100],
    address:{
        city: "manado",
        province: "sulawesi utara",
        postalCode: "95371",
    },
    sayGreetings: function () {
        console.log("Hello my name is " + this.firstName);
    },
};

//Dot notation
// console.log(john.firstName);
// console.log(john.grade[2]);
// console.log(john.address.city);
// console.log(john.sayGreetings();

//Bracket notation
// console.log(john["firstName"]);
// console.log(john["grade"[2]]);
// console.log(john["address"]["city"]);
// console.log(john["sayGreetings"]())

// john.job ="teacher"

//Array Object
let students = [
    {
        id: 1,
        name:"john",
    },
    {
        id:2,
        name:"jack",
    },
    {
        id:3,
        name: "peter",
    },
];

// //forEach()
// students.forEach(function (item){
//     console.log(item.name);
// });

//map(
    // let output = students.map(function (item){
    //     return item.name;
    // });
    //console.log(output);


//Filter()
// let output = students.filter(function (item){
//     return item.name === "john";
// });
// console.log(output);

//Find()
let output = students.find(function (item){
    return item.name === "john";
});
console.log(output);
