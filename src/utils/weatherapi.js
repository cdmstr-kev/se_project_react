import { handleApiResponse } from "./api.js";

export const getWeatherForecast = ({ latitude, longitude }, APIKey) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIKey}`
  ).then((res) => {
    return handleApiResponse(res);
  });
};
export const filterWeatherData = (data) => {
  const result = {};

  result.city = data.name;
  result.temp = {
    F: Math.round(data.main.temp),
    C: Math.round((data.main.temp - 32) * (5 / 9)),
  };
  result.type = getWeatherType(result.temp.F);

  const conditionMap = {
    Clear: "clear",
    Clouds: "clouds",
    Rain: "rain",
    Snow: "snow",
    Mist: "fog",
    Fog: "fog",
    Haze: "fog",
    storm: "storm",
  };

  const apiCondition = data.weather[0].main;
  result.condition = conditionMap[apiCondition] || "clear";
  result.isDay = isDay(data.sys, Date.now());

  return result;
};

const isDay = ({ sunrise, sunset }, now) => {
  const sunriseTime = new Date(sunrise * 1000).getTime();
  const sunsetTime = new Date(sunset * 1000).getTime();

  return now > sunriseTime && now < sunsetTime;
};

const getWeatherType = (temp) => {
  if (temp > 86) {
    return "hot";
  } else if (temp >= 66 && temp < 86) {
    return "warm";
  } else {
    return "cold";
  }
};
