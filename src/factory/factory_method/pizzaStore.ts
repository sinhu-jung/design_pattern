import Pizza from "./pizza";

abstract class PizzaStore {
  abstract createPizza(item: string): Pizza;

  public orderPizza(type: string): Pizza {
    const pizza = this.createPizza(type);
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();
    return pizza;
  }
}

export default PizzaStore;
