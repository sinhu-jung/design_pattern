import { PizzaIngredientFactory } from "./PizzaIngredientFactory";
import Pizza from "./pizza";

class ClamPizza extends Pizza {
  ingredientFactory: PizzaIngredientFactory;

  constructor(ingredientFactory: PizzaIngredientFactory) {
    super();
    this.ingredientFactory = ingredientFactory;
  }

  prepare(): void {
    console.log(`준비중: ${this.name}`);
    this.dough = this.ingredientFactory.createDough();
    this.sauce = this.ingredientFactory.createSauce();
    this.cheese = this.ingredientFactory.createCheese();
    this.clam = this.ingredientFactory.createClam();
  }
}

export default ClamPizza;
