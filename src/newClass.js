class User {
	name
	password
	__age
	sendNotifications = true

	constructor(name, password, age) {
		this.name = name;
		this.password = password;
		this.__age = age;
	}

	isMature() {
		return this.age >= 18;
	}

	get age() {
		return this.__age;
	}

	set age(value) {
		this.__age = value;
	}

}