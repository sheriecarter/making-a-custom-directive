angular
  .module('weatherApp')
  .directive('weatherFinder', weatherFinder)

  function weatherFinder(){
    var directive = {
      scope: {
        location: '@'
      },
      restrict: 'EA',
      // templateUrl:
      replace: true,
      controllerAs: 'weatherCtrl',
      controller: ['$http', function($http){
        var vm = this;
        var url="http://api.openweathermap.org/data/2.5/weather?mode=json&cnt=7&units=imperial&callback=JSON_CALLBACK&q=";
        var apikey = "&appid=" + '47d3444e8706e36ec0847be0300c39e0';
        vm.getWeather = function(){
          $http({
            method: 'JSONP',
            url: url + 524901 + apikey
          }).success(function(data){
            vm.weather = data;
          });
        }
      }]
    };
    return directive;
  }
