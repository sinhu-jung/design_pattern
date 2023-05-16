import CurrentConditionsDisplay from "./currentConditionsDiaplay";
import ForecastDisplay from "./forecastDisplay";
import HeatIndexDisplay from "./heatIndexDisplay";
import StatisticsDisplay from "./statisticsDisplay";
import WeatherData from "./weatherData";

const weatherStationHeatIndexMain = () => {
  const weatherData = new WeatherData();
  new CurrentConditionsDisplay(weatherData);
  new StatisticsDisplay(weatherData);
  new ForecastDisplay(weatherData);
  new HeatIndexDisplay(weatherData);

  weatherData.setMeasurements(80, 65, 30.4);
  weatherData.setMeasurements(82, 70, 29.2);
  weatherData.setMeasurements(78, 90, 29.2);
};

export default weatherStationHeatIndexMain;
