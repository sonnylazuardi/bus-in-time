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

  $scope.trayeks = [
    {
      from : "Cicaheum",
      to : "Cibeureum",
      time : {min : 4, sec : 21},
      type : "Ekonomi / AC",
      price : "Rp 2.000,- (Eko) / Rp 3.500 (AC)"
    },
    {
      from : "Cicaheum",
      to : "Cibeureum",
      time : {min : 8, sec : 15},
      type : "Ekonomi / AC",
      price : "Rp 2.000,- (Eko) / Rp 3.500 (AC)"
    },
    {
      from : "Cicaheum",
      to : "Leuwi Panjang",
      time : {min : 5, sec : 25},
      type : "Ekonomi / AC",
      price : "Rp 2.000,- (Eko) / Rp 3.500 (AC)"
    },
    {
      from : "Leuwi Panjang",
      to : "Cicaheum",
      time : {min : 8, sec : 31},
      type : "Ekonomi / AC",
      price : "Rp 2.000,- (Eko) / Rp 3.500 (AC)"
    },
    {
      from : "Cibiru",
      to : "Kebon Kelapa",
      time : {min : 1, sec : 22},
      type : "AC",
      price : "Rp 3.500"
    },
    {
      from : "Kebon Kelapa",
      to : "Cibiru",
      time : {min : 6, sec : 21},
      type : "AC",
      price : "Rp 3.500"
    },
  ];

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

  var a = setInterval(function () {
    for (var i = $scope.trayeks.length - 1; i >= 0; i--) {
      if ($scope.trayeks[i].time.sec > 0) {
        $scope.trayeks[i].time.sec--;
      }
      else {
        if ($scope.trayeks[i].time.min > 0) {
          $scope.trayeks[i].time.sec = 59;  
          $scope.trayeks[i].time.min--;
        }
        else {
          // do nothing
        }
      }
      console.log($scope.trayeks[i].time);
    };
    $scope.$apply();
  }, 1000);
  a.des

  $scope.numbering = function(num) {
    if (num<10) {
      return '0'+num;
    }
    return num
  }

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
