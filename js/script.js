// Constants and Variables
const API_KEY = 'db6567f4288a39a325ed78e9f4f20fea';
const BASE_URL = 'https://proxifyy-app.herokuapp.com/api';

let weatherData, userInput;


// Cached element references
const $title = $('#title');
const $temp = $('#temp');
const $index = $('#idex');
const $desc = $('#desc');
const $form = $('form');
const $input = $('input[type="text"]');
const $icon = $('#icon');


// Event Listeners
$form.on('submit', getWeatherData);


// Functions

function getWeatherData(evt){
    evt.preventDefault();
    userInput = $input.val();
    if(!userInput) return;

    $.ajax(BASE_URL + '?city=' + userInput)
    .then(function(data){
        weatherData = data;
        render();
    }, function(error){
        console.log('Its not working fam: ', error);
    })
}


function render(){
    $title.text(weatherData.name);
    $temp.html(`${weatherData.main.temp} &#8457;`);
    $desc.text(weatherData.weather[0].description);
    $icon.attr('src', `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`);
}


