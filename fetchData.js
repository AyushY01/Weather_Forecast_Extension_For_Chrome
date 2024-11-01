const api_key="////add your own api key from weathermap.than only it will run"
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";



const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");

async function checkweather(city){
    const response=await fetch(apiurl + city + `&appid=${api_key}`);
var data=await response.json(); 
console.log(data);
document.querySelector(".city").innerHTML=data.name;
document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
document.querySelector(".Wind").innerHTML=data.wind.speed+"km/h";
}
searchBtn.addEventListener("click",()=>{
    checkweather(searchBox.value);
})

searchBox.addEventListener('keydown',(event)=>{
    if(event.key=='Enter')
        {checkweather(searchBox.value);

}})



