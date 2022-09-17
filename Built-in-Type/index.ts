let fristName: string;
let lastName: string;
let fullName: string;
let age: number;
let isLogin: boolean;

fristName = "Taifur islam";
lastName = " Ashraf";
fullName = fristName.concat(lastName);
age = 22;
isLogin = true;

console.log(fristName);
console.log(lastName);
console.log(fullName);
console.log(age);
console.log(isLogin);

console.log(fullName.split(" "));
console.log(fullName.length);
console.log(fullName.toLocaleUpperCase());
console.log(fullName.toLocaleLowerCase());

function display(): void {
  console.log("Hi I am Taifur");
}
display();
