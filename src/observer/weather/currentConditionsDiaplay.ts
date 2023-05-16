import { DisplayElement } from "./displayElement";
import { Observer } from "./observer";
import WeatherData from "./weatherData";

class CurrentConditionsDisplay implements Observer, DisplayElement {
  private temperature: number;
  private humidity: number;
  //@ts-ignore
  private weatherData: WeatherData;

  constructor(weatherData: WeatherData) {
    this.humidity = 0;
    this.temperature = 0;
    this.weatherData = weatherData;
    weatherData.registerObserver(this);
  }

  public update(temperature: number, humidity: number, _: number): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.display();
  }

  public display() {
    console.log(`현재 상태: 온도 ${this.temperature}F, 습도 ${this.humidity}%`);
  }
}

export default CurrentConditionsDisplay;
