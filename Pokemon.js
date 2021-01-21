function Pokemon(namePoke, abilities, healthpoints, attackpoints) {
  this.name = namePoke;
  this.abilities = abilities;
  this.healthpoints = healthpoints;
  this.attackpoints = attackpoints;
  this.speak = function () {
    lonsole.log(this.name, this.name, this.name);
  };
}
var lynimzo = new Pokemon('Lynimzo', ['really fast', 'supersmart', 'incredibly well rounded', 'immortal'], 10000, 3)

Pokemon.prototype.speak = function () {
  console.log(this.name, this.name, this.name);
}

lynimzo.speak();