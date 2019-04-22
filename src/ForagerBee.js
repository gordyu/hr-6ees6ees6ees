class ForagerBee extends Bee {
  // TODO..
  constructor(age,job,color,food,canFly,treasureChest){
    super(food);
    this.age = 10;
    this.job = 'find pollen';
    this.color = 'yellow';
    this.canFly = true;
    this.treasureChest = [];
  }

  forage = (treasure) => this.treasureChest.push(treasure);

};
