const car = {
  type: "Fiat",
  model: "500",
  color: "white",
};
//console.log(car);

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
//console.log(person);
//console.log(person.lastName);
//console.log(person["lastName"]);
console.log(person.fullName());

let name = person.fullName; // () 괄호 없이 메서드에 액세스하면 함수 정의가 반환된다.
console.log(name);

// 객체가 생성되는 것이다.
x = new String();
y = new Number();
z = new Boolean();

console.log(x, y, z);
