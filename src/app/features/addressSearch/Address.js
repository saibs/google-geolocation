class Address {
	constructor({ street, houseNumber, postalCode, city } = {}) {
		this.street = street;
		this.houseNumber = houseNumber;
		this.postalCode = postalCode;
		this.city = city;
	}
	toString() {
		return `${this.houseNumber} ${this.street}, ${this.city} ${this.postalCode}`;
	}
}

export default Address;
