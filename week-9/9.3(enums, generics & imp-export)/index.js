"use strict";
// enums
// These are the way to hold constants
var Keys;
(function (Keys) {
    Keys["Up"] = "Hi";
    Keys["Down"] = "Hi2";
    Keys["Left"] = "Hi3";
    Keys["Right"] = "Hi4";
})(Keys || (Keys = {}));
const doSomething = (key) => {
    console.log(Keys);
    return key;
};
console.log(doSomething(Keys.Up));
