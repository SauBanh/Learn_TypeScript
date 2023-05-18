# Learn_TypeScript
## Core type
* number: | All numbers, no differentiation between integers or floats
* string: "Hi, i'm Nguyễn Tuấn Anh" | All text values
* boolean: true, false | just these two, no "truthy" or "falsy" values
* object: {age: 30} | Any javascript object, more specific types (type of object) are possible
* Array: [1, 2, 3] | Any javascript array, type can be flexible or strict (regarding the element type)
* Tuple: [1, 2] | Added by Typescript: Fixed-length array
* Enum: enum {NEW,OLD} | Added by TypeScript: Automatically enumerated global constant indentifiers
* Any: * | Any kind of value, no specific type assignment
***
function add(n1: number, n2: number, n3: string, n4: boolean) {
    if (typeof n1 !== "number" || typeof n2 !== "number") {
        throw new Error("Incorrect input!");
    }
    return n3 + n1 + n2;
}
const numbter1 = 5;
const numbter2 = 2.8;
const string3 = "hello";
const bol = true
const result = add(numbter1, numbter2, string3, bol);
console.log(result);
***
const preson: {
    name: string;
    age: number;
} = {
    name: "Nguyễn Tuấn Anh",
    age: 30,
};

console.log(preson.name);
***
JavaScript object:
const product = {
  id: 'abc1',
  price: 12.99,
  tags: ['great-offer', 'hot-and-new'],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!'
  }
}
This would be the type of such an object:

{
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  }
}
***
let favoriteActivities: string[];
favoriteActivities = ["Thể thao"];
let favoriteActivities: any[];
favoriteActivities = ["Thể thao", 1];
***
const prerson = {
    name: "Nguyễn Tuấn Anh",
    age: 30,
    hobbies: ["Thể thao", "Đọc sách"],
};
***
const prerson: {
    name: string;
    age: number;
    hobbies: string[],
    role: [number, string];
} = {
// const prerson = {
    name: "Nguyễn Tuấn Anh",
    age: 30,
    hobbies: ["Thể thao", "Đọc sách"],
    role: [2, "author"],
};

prerson.role.push("admin");
prerson.role[0] = 10;

let favoriteActivities: any[];
favoriteActivities = ["Thể thao", 1];

console.log(prerson.name);

for (const hobby of prerson.hobbies) {
    console.log(hobby.toLocaleUpperCase());
    // console.log(hobby.map()); // !!! ERROR !!!
}
***
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
    ADMIN = 5,
    READ_ONLY = 100,
    AUTHOR = 200,
}

// const prerson: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
const prerson = {
    name: "Nguyễn Tuấn Anh",
    age: 30,
    hobbies: ["Thể thao", "Đọc sách"],
    role: Role.AUTHOR,
};

let favoriteActivities: string[];
favoriteActivities = ["Thể thao"];

console.log(prerson.name);

for (const hobby of prerson.hobbies) {
    console.log(hobby.toLocaleUpperCase());
    // console.log(hobby.map()); // !!! ERROR !!!
}

if (prerson.role === Role.AUTHOR) {
    console.log("is author");
}
