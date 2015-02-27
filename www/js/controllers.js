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
  $scope.map = {center: {latitude: 40.1451, longitude: -99.6680 }, zoom: 15 };
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

.controller('BusTrackCtrl', function($scope) {
  $scope.pin = {
    bus : "img/pin-bus.png",
    passenger : "img/pin-passenger.png"
  };

  $scope.map = {center: {latitude: -6.902267, longitude: 107.611600 }, zoom: 16 };
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
  $scope.marker_pos = {
    id: 0,
    coords: {
      latitude: -6.902267,
      longitude: 107.611600
    },
    options: { draggable: false },
  };

  $scope.marker_bus1 = {
    id: 1,
    coords: {
      latitude: -6.904626,
      longitude: 107.610651
    },
    options: { draggable: false },
  };

  $scope.marker_bus2 = {
    id: 2,
    coords: {
      latitude: -6.906579,
      longitude: 107.608285
    },
    options: { draggable: false },
  };
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('LoginCtrl', function($scope, $state) {
  $scope.login = function() {
    $state.go('busintime.getbus');
  }
})

.controller('MenuCtrl', function($scope, $state) {
  $scope.logout = function() {
    $state.go('login');
  }
})

.controller('ShareCtrl', function($scope, $state, $ionicHistory) {
  $scope.back = function() {
    console.log('back');
    $ionicHistory.goBack();
  }
  $scope.start = function() {

  }
});
