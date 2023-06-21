const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "95538fa8c5mshac3330cfa6ab1bep121430jsnd3feafb30301",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com"
    }
  };
  const getWeather = (city)=>{
    cityName.innerHTML = city
  
      fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city,options)
    .then((response) => response.json())
    .then((response) => {
        
      console.log(response)
        cloud_pct.innerHTML = response.cloud_pct
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
    
        temp.innerHTML    = response.temp
        temp2.innerHTML    = response.temp
        wind_speed.innerHTML   = response.wind_speed
        wind_speed2.innerHTML   = response.wind_speed      
      })
      .catch((err) => console.error(err));
      
  }
  submit.addEventListener("click", (e)=>{
      e.preventDefault()
      getWeather(city.value)
  })
  getWeather("Delhi") 
  