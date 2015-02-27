angular.module('busintime.controllers', ['uiGmapgoogle-maps'])

.controller('BusInTimeCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('GetBusCtrl', function($scope) {
  $scope.map = {center: {latitude: 40.1451, longitude: -99.6680 }, zoom: 4 };
  $scope.options = {
    scrollwheel: false,
    overviewMapControl: false,
    panControl: false,
    scaleControl: false,
    scrollwheel: false,
    mapTypeControl: false,
    streetViewControl: false,
    zoomControl: false
  };
  $scope.marker = {
    id: 0,
    coords: {
      latitude: 40.1451,
      longitude: -99.6680
    },
    options: { draggable: false },
  };
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
