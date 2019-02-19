export class Weather {

    public main: any;
    public weather: any;
    public temp: any;
    public name: any;
    public wind: any;
    public speed: any;
    public list: any;
    public city: any;
    public description: any;
    constructor(weatherResponse: any){
        this.main = weatherResponse.main;
        this.temp = weatherResponse.temp;
        this.weather = weatherResponse.weather;
        this.name  = weatherResponse.name;
        this.wind = weatherResponse.wind;
        this.speed = weatherResponse.speed;
        this.list = weatherResponse.list;
        this.description = weatherResponse.description;
        this.city = weatherResponse.city;
    }

    
}
