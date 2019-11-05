const nameA = "Roby";
const nameB = "Afrizal";
const nameCompared = nameA === nameB;

console.log(nameA);
console.info(nameB);
console.warn(nameCompared, "Keduanya berbeda value");

console.log("-------Next Sample---------");

const ageA = 33;
const ageB = 32;
if (ageA > ageB) console.log("B lebih muda dari A");
else if (ageB > ageA) console.log("A lebih muda dari B");
else console.log("Kedua nya berusia sama");

console.log("-------Next Sample---------");

const personA = {
  name: "Alpha",
  age: 20
};
const personB = {
  name: "Beta",
  age: 25
};
cekUsia = personA.age < personB.age;
switch (cekUsia) {
  case true:
    console.log("Beta lebih tua dari Alpha");
    break;
  case false:
    console.log("Alpha lebih muda dari Beta");
    break;
  default:
    console.log("Keduanya berusia sama");
    break;
}
