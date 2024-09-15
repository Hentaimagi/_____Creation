const axios = require('axios'); // HTTP request করার জন্য axios মডিউল দরকার

module.exports = {
  config: {
    name: "dhakaWeather",
    version: "1.0",
    author: "Tanvir",
    countDown: 5,
    role: 0,
    shortDescription: "Sends Dhaka weather every hour.",
    longDescription: "Automatically sends the current weather of Dhaka every hour.",
    category: "Utilities",
    guide: "{pn}"
  },

  onLoad: function ({ schedule }) {
    
    const getDhakaWeather = async function ({ message }) {
      try {
        // OpenWeatherMap API URL (replace YOUR_API_KEY with actual API key)
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Dhaka&appid=YOUR_API_KEY&units=metric`);
        const weatherData = response.data;
        
        // Extract weather information
        const temp = weatherData.main.temp;  // Temperature in Celsius
        const weather = weatherData.weather[0].description;  // Weather condition
        const humidity = weatherData.main.humidity;  // Humidity
        const windSpeed = weatherData.wind.speed;  // Wind speed in meter/sec
        
        // Send the weather update
        message.send(
          `🌤 Current Weather in Dhaka 🌤\n` +
          `Temperature: ${temp}°C\n` +
          `Condition: ${weather}\n` +
          `Humidity: ${humidity}%\n` +
          `Wind Speed: ${windSpeed} m/s`
        );
      } catch (error) {
        message.send("Sorry, couldn't fetch the weather data.");
        console.error(error);
      }
    };

    // Schedule the task to run every hour
    schedule("0 * * * *", getDhakaWeather); // Runs every hour at the start of the hour
  }
};
