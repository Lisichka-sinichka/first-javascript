// Функция-конструктор
function User(name, password, age) {
	this.name = name;
	this.password = password;
	this.__age = age;

}
// Объявление свойства sendNotifications и метода isMature() в прототипе
// создаваемого класса
User.prototype.sendNotifications = true;
User.prototype.isMature = function () {
	return this.age >= 18;
};
// Функции, реализующие геттер и сеттер для динамического свойства аде
function User__getAge() {
	return this.__age;

}

function User__setAge(value) {
	this.__age = value;

}
// Объявление динамического свойства age
Object.defineProperty(User.prototype, 'age', {
	get: User__getAge,
	set: User__setAge
});
//  наследование нового класса
function Employer(name, password, age, salary, position) {
	User.call(this, name, password, age);
	this.salary = salary
	this.position = position
}

Employer.prototype = Object.create(User.prototype);

Object.defineProperty(Employer.prototype, 'constructor', {
	value: Employer,
	enumerable: false, // false, чтобы данное свойство не появлялось в цикле for in
	writable: true
});

Employer.prototype.isMature = function () {
	return this.age >= 18 ? 'Совершеннолетний(яя)'
						: 'Несовершеннолетний(яя)'
}
// пример
let man = new Employer('Anton', 'qwerty', 35, 2500, 'manger')

console.log(man.isMature());
console.log(man.age);
console.log(man.name);
console.log(man.password);
console.log(man.salary);
console.log(man.position);
