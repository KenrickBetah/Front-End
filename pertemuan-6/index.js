//Devan Prabowo

let people = ["Greg", "Mary", "Devon", "James"];

//No - 1
for (let i=0; i<people.length; i++){
    console.log(people[i])
};
console.log("=================================");

//No - 2
people.forEach(function(orang){
    console.log(orang);
});
console.log("==================================");
//No - 3
people.shift("Greg");
console.log(people);

console.log("==================================");
//No - 4
people.pop("James");
console.log(people);

console.log("==================================");
//No - 5
people.unshift("Matt");
console.log(people);

console.log("==================================");
//No - 6
people.push("Devan");
console.log(people);

console.log("===================================");
//No - 7
for (let i=0; i<people.length; i++){
    if (people[i] === "Mary") {
        console.log("Mary");
        break;
    }
    console.log(people[i]);
};

console.log("===================================");
//No - 8
let people2 = people.slice(2);
console.log(people2);

console.log("===================================");
//No - 9
people.splice(2, 1, "Elizabeth", "Artie");
console.log(people);

console.log("===================================");
//No - 10
let withBob = people.concat("Bob");
console.log(withBob)

console.log("===================================");
//=========================================

//No - 1
let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};


//No - 1
programming.languages.push("Go");

//No - 2
programming["difficulty"] = 7

//No - 3
delete programming.jokes


//No - 4
programming.isFun =  true;


//No - 5
programming.languages = programming.languages.map((languages, index) => `${index} - ${languages}`)

console.log(programming);