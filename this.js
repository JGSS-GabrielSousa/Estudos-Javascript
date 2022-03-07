const person = {
    firstName: "Gabriel",
    lastName: "Sousa",
    id: 1,
    fullName: function() {
        return this.firstName + "" + this.lastName;
    },
    getID: function() {
        return this.id;
    }
};

person.fullName();
person.getID();