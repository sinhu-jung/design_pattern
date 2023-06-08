import { Cheese } from "./Cheese";
import { Clams } from "./Clams";
import { Dough } from "./Dougn";
import FreshClams from "./FreshClams";
import Garlic from "./Garlic";
import MarinaraSauce from "./MarinaraSauce";
import Mushroom from "./Mushroom";
import Onion from "./Onion";
import { Pepperoni } from "./Pepperoni";
import { PizzaIngredientFactory } from "./PizzaIngredientFactory";
import RedPepper from "./RedPepper";
import ReggianoCheese from "./ReggianoCheese";
import { Sauce } from "./Sauce";
import SlicedPepperoni from "./SlicedPepperoni";
import ThickCrustDough from "./ThickCrustDough";
import { Veggies } from "./Veggies";

class NYPizzaIngredientFactory implements PizzaIngredientFactory {
  createDough(): Dough {
    return new ThickCrustDough();
  }

  createSauce(): Sauce {
    return new MarinaraSauce();
  }

  createCheese(): Cheese {
    return new ReggianoCheese();
  }

  createVeggies(): Veggies[] {
    const veggies: Veggies[] = [
      new Garlic(),
      new Onion(),
      new Mushroom(),
      new RedPepper(),
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

export default NYPizzaIngredientFactory;
