import Pizza from "./pizza";

abstract class PizzaStore {
  protected abstract createPizza(item: string): Pizza;

  public orderPizza(type: string): Pizza {
    const pizza = this.createPizza(type);
    console.log(`--- ${pizza.getName()} 만드는 중 ---`);
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();
    return pizza;
  }
}

export default PizzaStore;
