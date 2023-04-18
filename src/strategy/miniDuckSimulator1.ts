import Duck from "./duck";
import FlyRocketPowered from "./flyRocketPowered";
import MallardDuck from "./mallardDuck";
import ModelDuck from "./modelDuck";

const mallard: Duck = new MallardDuck();
mallard.performQuack();
mallard.performFly();

const model: Duck = new ModelDuck();
model.performFly();
model.setFlyBehavior(new FlyRocketPowered());
model.performFly();
