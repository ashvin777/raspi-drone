angular.module('raspi', [])

.controller("DroneController", ["$scope", "$http",  function($scope, $http) {
  $scope.motors = [];
  $scope.motors.push({
    id: "motor1",
    speed: 5.1
  });
  $scope.motors.push({
    id: "motor2",
    speed: 5.1
  });
  $scope.motors.push({
    id: "motor3",
    speed: 5.1
  });
  $scope.motors.push({
    id: "motor4",
    speed: 5.1
  });

  $scope.speedUp = function (motorId, index) {
      $http({
        url : location.href + motorId+"/plus"
      }).then(function (res) {
        $scope.motors[index].speed = res.data;
      });
  };

  $scope.speedDown = function (motorId, index) {
      $http({
        url : location.href + motorId+"/minus"
      }).then(function (res) {
        $scope.motors[index].speed = res.data;
      });
  };

  $scope.calibrate = function(){
    $http({
      url : location.href + "calibrate"
    });
  };

  $scope.speedUpAll = function () {
    $scope.speedUp($scope.motors[0].id, 0);
    $scope.speedUp($scope.motors[1].id, 1);
    $scope.speedUp($scope.motors[2].id, 2);
    $scope.speedUp($scope.motors[3].id, 3);
  };

  $scope.speedDownAll = function () {
    $scope.speedDown($scope.motors[0].id, 0);
    $scope.speedDown($scope.motors[1].id, 1);
    $scope.speedDown($scope.motors[2].id, 2);
    $scope.speedDown($scope.motors[3].id, 3);
  };

  $scope.stopDrone = function(){
    $http({
      url : location.href + "cleanup"
    });
  };

  $scope.flyDown = function(){
    var int = setInterval(function functionName() {
      $scope.speedDownAll();
      if( $scope.motors[0].speed <= 5.3 && $scope.motors[1].speed <= 5.3 && $scope.motors[2].speed <= 5.3 && $scope.motors[3].speed <= 5.3){
        clearInterval(int);
        $scope.stopDrone();
      }
    }, 500);
  };


}])
