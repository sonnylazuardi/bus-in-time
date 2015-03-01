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

.controller('GetBusCtrl', function($scope, TrackList) {

  $scope.map = {center: {latitude: 40.1451, longitude: -99.6680 }, zoom: 15 };

  $scope.trayeks = TrackList.track;

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
      // console.log($scope.trayeks[i].time);
    };
    $scope.$apply();
  }, 1000);

  $scope.numbering = function(num) {
    if (num<10) {
      return '0'+num;
    }
    return num
  }

  $scope.$destroy = function() {
    clearInterval(a);
  }

})

.controller('BusTrackCtrl', function($scope, TrackList, $stateParams, $rootScope, $state, $cordovaLocalNotification) {
  $scope.trayek = TrackList.findById($stateParams.track);
  $scope.notif = function() {
    $cordovaLocalNotification.add({
      id: new Date(),
      date:       new Date(),    // This expects a date object
      message:    'You are now in a Bus Pink! share your location and collect some coins',  // The message that is displayed
      title:      'Bus In Time',  // The title of the message
    }).then(function () {
      console.log('callback for adding background notification');
    });
  }
  $rootScope.$on("$cordovaLocalNotification:clicked", function(e,notification) {
    $state.go('share', {track: $stateParams.track});
  });
  var a = setInterval(function () {
    if ($scope.trayek.time.sec > 0) {
      $scope.trayek.time.sec--;
    }
    else {
      if ($scope.trayek.time.min > 0) {
        $scope.trayek.time.sec = 59;  
        $scope.trayek.time.min--;
      }
    };
    $scope.$apply();
  }, 1000);
  console.log($stateParams.track);
  console.log($scope.trayek);
  $scope.pin = {
    bus : "img/pin-bus.png",
    passenger : "img/pin-passenger.png",
    halte : "img/pin-halte.png"
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

  $scope.marker_halte = {
    id: 3,
    coords: {
      latitude: -6.89900,
      longitude: 107.610605
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

  $scope.$destroy = function() {
    clearInterval(a);
  }

  $scope.numbering = function(num) {
    if (num<10) {
      return '0'+num;
    }
    return num
  }
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

.controller('ShareCtrl', function($scope, $state, $cordovaLocalNotification, $stateParams, TrackList) {
  $scope.trayek = TrackList.findById($stateParams.track);
  $scope.state = 0;
  // $cordovaLocalNotification.add({
  //   id: new Date(),
  //   date:       new Date(),    // This expects a date object
  //   message:    'You are now in a bus please share the GPS and get some coins',  // The message that is displayed
  //   title:      'Bus In Time',  // The title of the message
  // }).then(function () {
  //   console.log('callback for adding background notification');
  // });
  $scope.back = function() {
    window.history.back();
  }
  $scope.numbering = function(num) {
    if (num<10) {
      return '0'+num;
    }
    return num
  }
  $scope.start = function() {
    $scope.state = 1;
    $cordovaLocalNotification.add({
      id: new Date(),
      date:       new Date(),    // This expects a date object
      message:    'Your location has been shared!',  // The message that is displayed
      title:      'Bus In Time',  // The title of the message
    }).then(function () {
      console.log('callback for adding background notification');
    });
  }
  $scope.stop = function() {
    $scope.state = 0;
  }
})

.controller('ScanBusCtrl', function($scope, $state, BLE) {
  $scope.devices = [];
  $scope.loading = false;
  $scope.errors = [];
  $scope.scan = function() {
    $scope.loading = true;
    $scope.errors = [];
    $scope.devices = [];
    BLE.scan().then(function (devices) {
      console.log(devices);
      $scope.devices = devices;
      $scope.loading = false;
    }, function (error) {
      $scope.errors.push(error);
      $scope.loading = false;
    });
  }
  
})

.controller('AboutCtrl', function($scope) {
  $scope.back = function() {
    window.history.back();
  }
});
