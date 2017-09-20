/* Return a promise to request a temperature with a City */
let temperaturePromises = [];
const cities = ["Huelva", "Cadiz", "Málaga", "Granada", "Almería", "Sevilla", "Córdoba", "Jaén"];
cities.map(city => requestWeatherPromise(city));
function requestWeatherPromise(city){
  $.ajax({
    url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=95c523712fd4467a51e1a7b5d2d80af4`,
    dataType:'json',
  }).then(data => {
    console.log(`The temperature in ${city} is ${data.main.temp} degrees Kelvin`);
    temperaturePromises.push(data.main.temp);
    if(temperaturePromises.length == cities.length){
      console.log(temperaturePromises);
      let sum = temperaturePromises.reduce((previous, current) => current += previous);
      let avg = sum / temperaturePromises.length;
      console.log(`the average is ${avg} degrees Kelvin`);
    }
  }).catch( e  => console.log(e));

}
