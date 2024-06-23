const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '3eff8fa7c7msh819962095413d54p198631jsn699522ee0e75',
		'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather=(city)=>{
    cityname.innerHTML=city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,options)
    .then(response=>response.json())
    .then((response)=>
        {
            console.log(response)
            // cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp 
            temp2.innerHTML = response.temp 
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset


        })
    .catch(err=>console.error(err));
}
document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault();
    const city = document.getElementById('city').value;
    getWeather(city);
});
submit.addEventListener("click",()=>{
    e.preventDefault()
    getWeather(city.value)
})
getWeather("Delhi") 
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi',options)
    .then(response=>response.json())
    .then((response)=>
        {
            console.log(response)
            // cloud_pct.innerHTML = response.cloud_pct
            shantemp.innerHTML = response.temp 
            // shantemp2.innerHTML = response.temp 
            shanfeels_like.innerHTML = response.feels_like
            shanhumidity.innerHTML = response.humidity
            // shanhumidity2.innerHTML = response.humidity
            shanmin_temp.innerHTML = response.min_temp
            shanmax_temp.innerHTML = response.max_temp
            shanwind_speed.innerHTML = response.wind_speed
            // shanwind_speed2.innerHTML = response.wind_speed
            shanwind_degrees.innerHTML = response.wind_degrees
            shansunrise.innerHTML = response.sunrise
            shansunset.innerHTML = response.sunset


        })
    .catch(err=>console.error(err));
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Boston',options)
    .then(response=>response.json())
    .then((response)=>
        {
            console.log(response)
            // cloud_pct.innerHTML = response.cloud_pct
            bostemp.innerHTML = response.temp 
            // boshantemp2.innerHTML = response.temp 
            bosfeels_like.innerHTML = response.feels_like
            boshumidity.innerHTML = response.humidity
            // boshanhumidity2.innerHTML = response.humidity
            bosmin_temp.innerHTML = response.min_temp
            bosmax_temp.innerHTML = response.max_temp
            boswind_speed.innerHTML = response.wind_speed
            // boshanwind_speed2.innerHTML = response.wind_speed
            boswind_degrees.innerHTML = response.wind_degrees
            bossunrise.innerHTML = response.sunrise
            bossunset.innerHTML = response.sunset


        })
    .catch(err=>console.error(err));
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow',options)
    .then(response=>response.json())
    .then((response)=>
        {
            console.log(response)
            // cloud_pct.innerHTML = response.cloud_pct
            lucktemp.innerHTML = response.temp 
            // luckboshantemp2.innerHTML = response.temp 
            luckfeels_like.innerHTML = response.feels_like
            luckhumidity.innerHTML = response.humidity
            // luckboshanhumidity2.innerHTML = response.humidity
            luckmin_temp.innerHTML = response.min_temp
            luckmax_temp.innerHTML = response.max_temp
            luckwind_speed.innerHTML = response.wind_speed
            // luckboshanwind_speed2.innerHTML = response.wind_speed
            luckwind_degrees.innerHTML = response.wind_degrees
            lucksunrise.innerHTML = response.sunrise
            lucksunset.innerHTML = response.sunset


        })
    .catch(err=>console.error(err));
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata',options)
    .then(response=>response.json())
    .then((response)=>
        {
            console.log(response)
           
            koltemp.innerHTML = response.temp 
            kolfeels_like.innerHTML = response.feels_like
            kolhumidity.innerHTML = response.humidity
            kolmin_temp.innerHTML = response.min_temp
            kolmax_temp.innerHTML = response.max_temp
            kolwind_speed.innerHTML = response.wind_speed
            kolwind_degrees.innerHTML = response.wind_degrees
            kolsunrise.innerHTML = response.sunrise
            kolsunset.innerHTML = response.sunset


        })
    .catch(err=>console.error(err));

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }