import Pizza from "./pizza";

class NYStyleVeggiePizza extends Pizza {
  constructor() {
    super();
    this.name = "뉴욕 스타일 채소 피자";
    this.dough = "씬 크러스트 도우";
    this.sauce = "마리나라 소스";

    this.toppings.push("잘게 썬 레지아노 치즈");
    this.toppings.push("마늘");
    this.toppings.push("양파");
    this.toppings.push("버섯");
    this.toppings.push("고추");
  }
}

export default NYStyleVeggiePizza;
