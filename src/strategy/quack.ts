import QuackBehavior from "./quackBehavior";

class Quack implements QuackBehavior {
  public quack() {
    console.log("Quack");
  }
}

export default Quack;
