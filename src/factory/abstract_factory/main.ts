import ChicagoPizzaStore from "./ChicagoPizzaStore";
import NYPizzaStore from "./NYPizzaStore";

function abstractFactory() {
  const nyStore = new NYPizzaStore();
  const chicagoStore = new ChicagoPizzaStore();

  let pizza = nyStore.orderPizza("cheese");
  console.log(`에단이 주문한 ${pizza.getName()}`);
  pizza = chicagoStore.orderPizza("cheese");
  console.log(`조엘이 주문한 ${pizza.getName()}`);

  pizza = nyStore.orderPizza("clam");
  console.log(`에단이 주문한 ${pizza.getName()}`);
  pizza = chicagoStore.orderPizza("clam");
  console.log(`조엘이 주문한 ${pizza.getName()}`);

  pizza = nyStore.orderPizza("pepperoni");
  console.log(`에단이 주문한 ${pizza.getName()}`);
  pizza = chicagoStore.orderPizza("pepperoni");
  console.log(`조엘이 주문한 ${pizza.getName()}`);

  pizza = nyStore.orderPizza("veggie");
  console.log(`에단이 주문한 ${pizza.getName()}`);
  pizza = chicagoStore.orderPizza("veggie");
  console.log(`조엘이 주문한 ${pizza.getName()}`);
}

export default abstractFactory;
