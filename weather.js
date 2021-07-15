
class weatherApp{
    constructor() {
        this.APIkey = 'VpKE76nm1eLAb5ruc3AwmvvWc87kIX4o';
        this.locationBase = 'http://dataservice.accuweather.com/locations/v1/cities/search';
        this.weatherBase = 'http://dataservice.accuweather.com/currentconditions/v1/';
    }

    async cityCode(city) {
        const query= `?apikey=${this.APIkey}&q=${city}`;
        const res = await fetch(this.locationBase+query);
        const code = await res.json();
        return code[0];
    }

    async getTemp(cityCode){
        const query=`?apikey=${this.APIkey}`;
        const res = await fetch(this.weatherBase+cityCode+query);
        const temp = await res.json();
        return temp[0];
    }

    getCityTemp(cityname) {
        this.cityCode(cityname).then(location=>{
                this.getTemp(location.Key)
                    .then(temp=>{
                        temperature.textContent=temp.Temperature.Metric.Value;
                        condition.textContent=temp.WeatherText;
                        if(temp.IsDayTime) isDay.src='img/day.svg';
                        else isDay.src='img/night.svg';
                        icon.src = `icons/${temp.WeatherIcon}.svg`;
                        wrapper2.classList.remove('d-none');
                    })
                    .catch(err=>console.log(err.message));
                cityName.textContent = location.EnglishName;
            }
        ).catch(err=>console.log(err.message))
    }
}