angular.modlule('weatherApp')
  .directive('weatherFinder', weatherFinder)

  function weatherFinder(){
    var directive = {
      scope: {
        location: '@'
      },
      restrict: 'EA',
      templateUrl:
      replace: true,
      controllerAs: weatherCtrl,
      controller: ['$http', function($http){
        var vm = this;

        vm.apiKey = '47d3444e8706e36ec0847be0300c39e0';
        $http({
            method: 'GET',
            url: 'http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=' + vm.apiKey;
        }).then(function successCallback(json){
          vm.weather = json.
          console.log(vm.weather);
        });
      }];
    };
    return directive;
  }
