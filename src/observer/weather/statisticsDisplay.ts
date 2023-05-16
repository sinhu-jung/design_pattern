import { DisplayElement } from "./displayElement";
import { Observer } from "./observer";
import WeatherData from "./weatherData";

class StatisticsDisplay implements Observer, DisplayElement {
  private maxTemp: number = 0.0;
  private minTemp: number = 200;
  private tempSum: number = 0.0;
  private numReadings: number = 0;
  //@ts-ignore
  private weatherData: WeatherData;

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData;
    weatherData.registerObserver(this);
  }

  public update(temp: number, _: number, __: number) {
    this.tempSum += temp;
    this.numReadings++;

    if (temp > this.maxTemp) {
      this.maxTemp = temp;
    }

    if (temp < this.minTemp) {
      this.minTemp = temp;
    }

    this.display();
  }

  public display() {
    console.log(
      `평균/최고/최저 온도 = ${this.tempSum / this.numReadings} / ${
        this.maxTemp
      } / ${this.minTemp}`
    );
  }
}

export default StatisticsDisplay;
