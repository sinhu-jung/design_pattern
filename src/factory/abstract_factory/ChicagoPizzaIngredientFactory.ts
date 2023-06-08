import BlackOlives from "./BlackOlives";
import { Cheese } from "./Cheese";
import { Clams } from "./Clams";
import { Dough } from "./Dougn";
import Eggplant from "./Eggplant";
import FreshClams from "./FreshClams";
import MozzarellaCheese from "./MozzarellaCheese";
import { Pepperoni } from "./Pepperoni";
import { PizzaIngredientFactory } from "./PizzaIngredientFactory";
import PlumTomatoSauce from "./PlumTomatoSauce";
import { Sauce } from "./Sauce";
import SlicedPepperoni from "./SlicedPepperoni";
import Spinach from "./Spinach";
import ThickCrustDough from "./ThickCrustDough";
import { Veggies } from "./Veggies";

class ChicagoPizzaIngredientFactory implements PizzaIngredientFactory {
  createDough(): Dough {
    return new ThickCrustDough();
  }

  createSauce(): Sauce {
    return new PlumTomatoSauce();
  }

  createCheese(): Cheese {
    return new MozzarellaCheese();
  }

  createVeggies(): Veggies[] {
    const veggies: Veggies[] = [
      new BlackOlives(),
      new Spinach(),
      new Eggplant(),
    ];
    return veggies;
  }

  createPepperoni(): Pepperoni {
    return new SlicedPepperoni();
  }

  createClam(): Clams {
    return new FreshClams();
  }
}

export default ChicagoPizzaIngredientFactory;
