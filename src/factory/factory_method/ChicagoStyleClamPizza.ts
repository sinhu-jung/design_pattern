import Pizza from "./pizza";

class ChicagoStyleClamPizza extends Pizza {
  constructor() {
    super();
    this.name = "시카고 스타일 조개 피자";
    this.dough = "매우 두꺼운 크러스트 반죽";
    this.sauce = "매실 토마토 소스";

    this.toppings.push("슈레드 모짜렐라 치즈");
    this.toppings.push("체서피크 만에서 가져온 냉동 조개");
  }

  cut(): void {
    console.log("피자를 네모난 조각으로 자르기");
  }
}

export default ChicagoStyleClamPizza;
