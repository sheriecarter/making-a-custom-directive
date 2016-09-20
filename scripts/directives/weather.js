angular.modlule('weatherApp')
  .directive('weatherFinder', weatherFinder)

  function weatherFinder(){
    var directive = {
      scope: {
        location: '@'
      },
      restrict: 'EA',
      templateUrl: 
      replace: true
    };
    return directive;
  }
