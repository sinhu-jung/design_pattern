import QuackBehavior from "./quackBehavior";

class MuteQuack implements QuackBehavior {
  public quack() {
    console.log("<< Silence >>");
  }
}

export default MuteQuack;
