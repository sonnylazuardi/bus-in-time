// Ionic Starter busintime

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('busintime', ['ionic', 'busintime.controllers', 'uiGmapgoogle-maps'])

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

  .state('busintime', {
    url: "/busintime",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'BusInTimeCtrl'
  })

  .state('busintime.search', {
    url: "/search",
    views: {
      'menuContent': {
        templateUrl: "templates/search.html"
      }
    }
  })

  .state('busintime.browse', {
    url: "/browse",
    views: {
      'menuContent': {
        templateUrl: "templates/browse.html"
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

  .state('busintime.single', {
    url: "/playlists/:playlistId",
    views: {
      'menuContent': {
        templateUrl: "templates/playlist.html",
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/busintime/getbus');

  uiGmapGoogleMapApiProvider.configure({
      key: 'AIzaSyBSZectYqRVjFs7LZMb27VRsS00A4xZ6Bs',
      v: '3.17',
      libraries: 'weather,geometry,visualization'
  });
});