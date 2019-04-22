class Bee extends Grub {
  // TODO..
  constructor(age,color,food,job){
    super(age,color,food);
    this.age = 5;
    this.color = 'yellow';
    this.job = 'Keep on growing';
  }
  eat() {
    return super.eat();
  }
};
