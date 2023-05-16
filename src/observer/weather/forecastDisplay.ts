import { DisplayElement } from "./displayElement";
import { Observer } from "./observer";
import WeatherData from "./weatherData";

class ForecastDisplay implements Observer, DisplayElement {
  private currentPressure: number = 29.92;
  private lastPressure: number = 0;
  //@ts-ignore
  private weatherData: WeatherData;

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData;
    weatherData.registerObserver(this);
  }

  public update(_: number, __: number, pressure: number): void {
    this.lastPressure = this.currentPressure;
    this.currentPressure = pressure;
    this.display();
  }

  public display(): void {
    let element = "기상예보: ";
    if (this.currentPressure > this.lastPressure) {
      element += "날씨가 좋아지고 있습니다!";
    } else if (this.currentPressure == this.lastPressure) {
      element += "지금과 비슷할 것 같습니다.";
    } else if (this.currentPressure < this.lastPressure) {
      element += "쌀쌀하며 비가 올 것 같습니다.";
    }

    console.log(element);
  }
}

export default ForecastDisplay;
