"use strict";
// boolean type
var isGood = true;
var sum = function (x, y) {
  return x + y;
};
//number
//Tuple
var basket;
basket = ["hello", 6];
// enum
var Size;
(function (Size) {
  Size[(Size["Small"] = 1)] = "Small";
  Size[(Size["Medium"] = 2)] = "Medium";
  Size[(Size["Large"] = 3)] = "Large";
})(Size || (Size = {}));
var sizeName = Size[3]; // would print Large
var sizeNum = Size.Large; // would print  3
var anything = "nooo";
anything = 5;
anything = "yes";
anything = true;
// void
var dance = function () {
  console.log("dance with me");
};
var error = function () {
  throw Error("ops");
};
var fight = function (robots) {
  console.log(robots.type, "fight");
};
// type assertion ( casting)
var code = 200;
var code2;
code2 = code;
code2 = code;
// class
var Animal = /** @class */ (function () {
  function Animal(name) {
    this.name = name;
  }
  Animal.prototype.getName = function () {
    return this.name;
  };
  return Animal;
})();
var lion = new Animal("lion");
console.log(lion.getName());
// union
var confused = "12";
confused = 12;
