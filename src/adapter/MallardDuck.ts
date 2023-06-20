import Duck from "./Duck";

class MallardDuck implements Duck {
  public quack(): void {
    console.log("꽥");
  }

  public fly(): void {
    console.log("날고 있어요!");
  }
}

export default MallardDuck;
