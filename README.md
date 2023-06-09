# Learn TypeScript

# Table of Contents

-   [Learn TypeScript](#learn-typescript)
-   [Table of Contents](#table-of-contents)
    -   [Core type](#core-type)
        -   [How to run the file](#how-to-run-the-file)
        -   [Typescript data types](#typescript-data-types)
        -   [Code Examples](#code-examples)
        -   [Object](#object)
        -   [Literal Type](#literal-type)
        -   [Literal Types](#literal-types)
        -   [Function Return Type](#function-return-type)
    -   [Function as Types](#function-as-types)
    -   [Function Type \& Callbacks](#function-type--callbacks)
        -   [The "unknown" Type](#the-unknown-type)
        -   [The "never" Type](#the-never-type)
    -   [Config](#config)
        -   [Exam config in file tsconfig.json](#exam-config-in-file-tsconfigjson)

## Core type

---

### How to run the file

Important: These commands are only for `windows`

1. tsc.cmd <namefile.ts>: command to run typescript interpreter

```c
tsc.cmd <namefile.ts>
```

2. tsc.cmd -w (-w is watch): used to view compiled files in the terminal window

```c
tsc.cmd -w
```

3. tsc --init: generate configuration file for typescript as json extension

```c
tsc --init
```

### Typescript data types

| Datatypes | Example                   | Description                                                                       |
| --------- | ------------------------- | --------------------------------------------------------------------------------- |
| number    | All numbers               | No differentiation between integers or floats                                     |
| string    | "Hi, i'm Nguyễn Tuấn Anh" | All text valuesfloats                                                             |
| boolean   | true, false               | just these two, no "truthy" or "falsy" values                                     |
| object    | {age: 30}                 | Any javascript object, more specific types (type of object) are possible          |
| Array     | [1, 2, 3]                 | Any javascript array, type can be flexible or strict (regarding the element type) |
| Tuple     | [1, 2]                    | Added by Typescript: Fixed-length array                                           |
| Enum      | enum {NEW,OLD}            | dded by TypeScript: Automatically enumerated global constant indentifiers         |
| Any       | \*                        | Any kind of value, no specific type assignment                                    |

---

### Code Examples

```c
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
```

---

### Object

```c
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
```

---

```c
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
```

---

```c
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
```

---

```c
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
```

---

```c
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

let favoriteActivities: any[];
favoriteActivities = ["Thể thao"];

console.log(prerson.name);

for (const hobby of prerson.hobbies) {
    console.log(hobby.toLocaleUpperCase());
    // console.log(hobby.map()); // !!! ERROR !!!
}

if (prerson.role === Role.AUTHOR) {
    console.log("is author");
}
```

---

### Literal Type

```c
function combine(
    input1: number | string,
    input2: number | string,
    resultConversion: "as-number" | "as-text"
) {
    let result;
    if (
        (typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-number"
    ) {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if (resultConversion === "as-number") {
    //     return +result;
    // } else {
    //     return result.toString();
    // }
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Nguyễn", "Tuấn Anh", "as-text");
console.log(combinedNames);
```

---

### Literal Types

```c
type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(
    input1: Combinable,
    input2: Combinable,
    resultConversion: ConversionDescriptor
) {
    let result;
    if (
        (typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-number"
    ) {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if (resultConversion === "as-number") {
    //     return +result;
    // } else {
    //     return result.toString();
    // }
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Nguyễn", "Tuấn Anh", "as-text");
console.log(combinedNames);
```

---

### Function Return Type

> Function Return Type & "void": void does not return anything

-   if we use the return value of a function that doesn't return anything we will get undefined value

```c
function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(num: number): void {
    console.log("Result: " + num);
}

printResult(add(5, 12));
```

---

## Function as Types

```c
 function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(num: number): void {
    console.log("Result: " + num);
}

printResult(add(5, 12));

let combineValues: (a: number, b: number) => number;
combineValues = add;
// combineValues = printResult;
// combineValues = 5

console.log(combineValues(8, 8));
```

---

## Function Type & Callbacks

```c
function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(num: number): void {
    console.log("Result: " + num);
}

function addAddHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

printResult(add(5, 12));

let combineValues: (a: number, b: number) => number;
combineValues = add;
// combineValues = printResult;
// combineValues = 5

console.log(combineValues(8, 8));
addAddHandle(10, 20, (result) => {
    console.log(result);
});
```

---

### The "unknown" Type

```c
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

if (typeof userInput === "string") {
    userName = userInput;
}
```

---

### The "never" Type

```c
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

if (typeof userInput === "string") {
    userName = userInput;
}

function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code };
}
const result = generateError("An error occurred!", 500);
console.log(result);
```

---

## Config

-   configure interpreter ts . files
-   in exclude will remove the files recorded here will not compile
-   in include will compile all files configured in here and if not declare include will automatically run all existing files

### Exam config in file tsconfig.json

```c
    "exclude": [
        "analytics.ts", //* use this won't run file analytics.ts
        "analytics.dev.ts", //* use this won't run file analytics.dev.ts
        "*.dev.ts", //? use this won't run all file .dev.ts
        "**/*.dev.ts", //? use this won't run all file in all folder .dev.ts
        "node_modules" //! would be the default
    ],
    "include": [
        "app.ts", //* used to run the compiled file of the app.ts . file
        "analytics.ts", //* used to run the compiled file of the analytics.ts . file
    ]
```

```

```
