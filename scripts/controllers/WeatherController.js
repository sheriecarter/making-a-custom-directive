angular
  .module('weatherApp')
  .controller('WeatherContoller', WeatherContoller);

  WeatherContoller.$inject = ['$http'];

  function WeatherContoller ($http) {
    var vm = this;

    vm.apiKey = '47d3444e8706e36ec0847be0300c39e0';
    $http({
        method: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=' + vm.apiKey;
    }).then(function successCallback(json){
      vm.weather
    })
  };
