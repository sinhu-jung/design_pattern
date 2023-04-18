import RubberDuck from "./\brubberDuck";
import DecoyDuck from "./decoyDuck";
import Duck from "./duck";
import FlyBehavior from "./flyBehavior";
import FlyRocketPowered from "./flyRocketPowered";
import MallardDuck from "./mallardDuck";
import ModelDuck from "./modelDuck";
import QuackBehavior from "./quackBehavior";

const mallard = new MallardDuck();
const cantFly: FlyBehavior = {
  fly: () => console.log("I can't fly"),
};
const squeak: QuackBehavior = {
  quack: () => console.log("Squeak"),
};
const rubberDuckie = new RubberDuck(cantFly, squeak);
const decoy = new DecoyDuck();
const model: Duck = new ModelDuck();

mallard.performQuack();
rubberDuckie.performQuack();
decoy.performQuack();

model.performFly();
model.setFlyBehavior(new FlyRocketPowered());
model.performFly();
