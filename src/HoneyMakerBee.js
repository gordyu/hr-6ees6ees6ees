class HoneyMakerBee extends Bee {
  constructor(age, job, color, food, honeyPot) {
    super(age, job, color, food)  
    this.age = 10;
    this.job = "make honey";
    this.honeyPot = 0;
  }
  makeHoney = () => this.honeyPot++;
  giveHoney = () => this.honeyPot--;
};
