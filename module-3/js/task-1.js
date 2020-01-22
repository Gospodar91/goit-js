"use strict";
const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true
  // changeHobby(newHobby) {
  //     this.hobby = newHobby;
  // },
  // changePremium(newPremium) {
  //     this.premium = newPremium;
  // }
};
user.mood = "happy";
user.hobby = "skydiving";
user.premium = "false";
// user.changeHobby("skydiving");
// user.changePremium(false);
const keys = Object.keys(user);
for (const key of keys) {
  console.log(key, user[key]);
}
