class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

User.prototype = {
  getName: function() {
      return this.name;
  },

  getAge: function() {
      return this.age;
  }
}

const user1 = new User('dai',22)
console.log(user1.getName())
