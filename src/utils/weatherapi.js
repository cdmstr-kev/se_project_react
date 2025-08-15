export const getWeatherForecast = ({ latitude, longitude }, APIkey) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then((res) => {
    return handleApiResponse(res);
  });
};

export const filterWeatherData = (data) => {
  const result = {};

  result.city = data.name;
  result.temp = { F: data.main.temp };
  result.type = getWeatherType(result.temp.F);
  //   debugger;

  return result;
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

export default function handleApiResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
}
