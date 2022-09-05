// "use strict";

function getDetails0() {
  console.log(this, "Nikhil Upadhyay");
}

var getDetails1 = function () {
  console.log(this, "Nikhil Upadhyay");
};

const getDetails2 = () => {
  console.log(this, "Nikhil Upadhyay");
};

getDetails0();
getDetails1();
getDetails2();

getDetails0.call();
getDetails1.call();
getDetails2.call();

// use cases...

function chargeBattery(a, b) {
  this.battery = this.battery + a + b;
}

const elf1 = {
  name: "Nikhil",
  battery: 50,
  info: function () {
    return this.name + " " + this.battery + "%";
  },
};

const elf2 = {
  name: "Jhon",
  battery: 30,
};

const elf3 = {
  name: "Ash",
  battery: 35,
};

console.log(elf1.info());
console.log(elf1.info.call(elf2));
