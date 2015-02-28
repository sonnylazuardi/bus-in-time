// Ionic Starter busintime

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('busintime', ['ionic', 'busintime.controllers', 'busintime.services', 'uiGmapgoogle-maps'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }

    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, uiGmapGoogleMapApiProvider) {
  $stateProvider
  .state('login', {
    url: "/login",
    templateUrl: "templates/login.html",
    controller: 'LoginCtrl'
  })

  .state('busintime', {
    url: "/busintime",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'MenuCtrl'
  })

  .state('share', {
    url: "/share",
    templateUrl: "templates/share.html",
    controller: 'ShareCtrl'
  })

  .state('about', {
    url: "/about",
    templateUrl: "templates/about.html",
    controller: 'AboutCtrl'
  })

  .state('busintime.search', {
    url: "/search",
    views: {
      'menuContent': {
        templateUrl: "templates/search.html"
      }
    }
  })

  .state('busintime.bustrack', {
    url: "/bustrack",
    views: {
      'menuContent': {
        templateUrl: "templates/bustrack.html",
        controller: 'BusTrackCtrl'
      }
    }
  })
  .state('busintime.getbus', {
    url: "/getbus",
    views: {
      'menuContent': {
        templateUrl: "templates/getbus.html",
        controller: 'GetBusCtrl'
      }
    }
  })

  .state('busintime.scanbus', {
    url: "/scanbus",
    views: {
      'menuContent': {
        templateUrl: "templates/scanbus.html",
        controller: 'ScanBusCtrl'
      }
    }
  })

  .state('busintime.single', {
    url: "/playlists/:playlistId",
    views: {
      'menuContent': {
        templateUrl: "templates/playlist.html",
        controller: 'PlaylistCtrl'
      }
    }
  });

  $urlRouterProvider.otherwise('/login');

  uiGmapGoogleMapApiProvider.configure({
      key: 'AIzaSyBSZectYqRVjFs7LZMb27VRsS00A4xZ6Bs',
      v: '3.17',
      libraries: 'weather,geometry,visualization'
  });
});
