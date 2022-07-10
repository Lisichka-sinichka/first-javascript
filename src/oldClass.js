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