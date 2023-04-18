import FlyBehavior from "./flyBehavior";
import QuackBehavior from "./quackBehavior";

abstract class Duck {
  flyBehavior: FlyBehavior | null;
  quackBehavior: QuackBehavior | null;

  constructor() {
    this.flyBehavior = null;
    this.quackBehavior = null;
  }

  public setFlyBehavior(fb: FlyBehavior) {
    this.flyBehavior = fb;
  }

  public setQuackBehavior(qb: QuackBehavior) {
    this.quackBehavior = qb;
  }

  abstract display(): void;

  public performFly() {
    this.flyBehavior?.fly();
  }

  public performQuack() {
    this.quackBehavior?.quack();
  }

  public swim() {
    console.log("All ducks float, even decoys!");
  }
}

export default Duck;
