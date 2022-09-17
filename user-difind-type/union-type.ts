let userId: number | string | boolean;

userId = "101";
userId = 101;
userId = true;

console.log(userId);

function userInfo(age: number | string) {
  console.log(age);
}

userInfo("22");
userInfo(22);
