import CurrentConditionsDisplay from "./currentConditionsDiaplay";
import ForecastDisplay from "./forecastDisplay";
import StatisticsDisplay from "./statisticsDisplay";
import WeatherData from "./weatherData";

const weatherObserverMain = () => {
  const weatherData = new WeatherData();
  new CurrentConditionsDisplay(weatherData);
  new StatisticsDisplay(weatherData);
  const forecastDisplay = new ForecastDisplay(weatherData);

  weatherData.setMeasurements(80, 65, 30.4);
  weatherData.setMeasurements(82, 70, 29.2);
  weatherData.setMeasurements(78, 90, 29.2);

  weatherData.removeObserver(forecastDisplay);
  weatherData.setMeasurements(62, 90, 28.1);
};

export default weatherObserverMain;
