 // Current year
 document.getElementById('currentyear').textContent = new Date().getFullYear();

 // Last modified date
 document.getElementById('lastModified').textContent = "Last Modification: " + document.lastModified;


 function calculateWindChill(temperature, windSpeed) {
  return (13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)).toFixed(2);
}
  
  const windChill = document.querySelector('#windChillValue');
  // const temperature = document.querySelector('#temperatureValue');
  // const windSpeed = document.querySelector('#windSpeedValue');
  
  // console.log(temperature)
  // console.log(windSpeed)
  // Define the temperature and wind speed
  const temperature = 6
  const windSpeed = 10
  // Set the values in the HTML
  // temperature.textContent = temp + "°C";
  // windSpeed.textContent = windSpeed + " km/h";
  
  
  if(temperature <= 10 && windSpeed > 4.8) {
    
    let windChillCalculation = calculateWindChill(temperature, windSpeed).toString();
    
    windChill.textContent = windChillCalculation;
  } else {
    windChill.textContent = "N/A";
  }


