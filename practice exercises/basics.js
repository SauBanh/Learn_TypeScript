"use strict";
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role[Role["AUTHOR"] = 200] = "AUTHOR";
})(Role || (Role = {}));
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
let favoriteActivities;
favoriteActivities = ["Thể thao"];
console.log(prerson.name);
for (const hobby of prerson.hobbies) {
    console.log(hobby.toLocaleUpperCase());
    // console.log(hobby.map()); // !!! ERROR !!!
}
if (prerson.role === Role.AUTHOR) {
    console.log("is author");
}
