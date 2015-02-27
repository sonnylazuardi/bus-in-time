// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('goodcash', ['ionic', 'goodcash.controllers', 'goodcash.services', 'angles'])

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

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    .state('tutorial', {
      url: "/tutorial",
      templateUrl: "templates/tutorial.html",
      controller: 'TutorialCtrl'
    })

    .state('profile', {
      url: "/profile/:id",
      templateUrl: "templates/tutorial.html",
      controller: 'TutorialCtrl'
    })

    .state('addexpense', {
      url: "/expense/add",
      templateUrl: "templates/addexpense.html",
      controller: 'AddExpenseCtrl'
    })

    .state('addsaving', {
      url: "/saving/add",
      templateUrl: "templates/addsaving.html",
      controller: 'AddSavingCtrl'
    })


  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.dashboard', {
    url: '/dashboard',
    views: {
      'tab-dashboard': {
        templateUrl: 'templates/tab-dashboard.html',
        controller: 'DashboardCtrl'
      }
    }
  })

  .state('tab.saving', {
      url: '/saving',
      views: {
        'tab-saving': {
          templateUrl: 'templates/tab-saving.html',
          controller: 'SavingCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.history', {
      url: '/history',
      views: {
        'tab-history': {
          templateUrl: 'templates/tab-history.html',
          controller: 'HistoryCtrl'
        }
      }
    })
    .state('tab.history.chart', {
      url: '/history/chart',
      views: {
        'tab-history': {
          templateUrl: 'templates/history-chart.html',
          controller: 'HistoryChartCtrl'
        }
      }
    })
    .state('tab.history.list', {
      url: '/history/list',
      views: {
        'tab-history': {
          templateUrl: 'templates/history-list.html',
          controller: 'HistoryListCtrl'
        }
      }
    })

  .state('tab.settings', {
    url: '/settings',
    views: {
      'tab-settings': {
        templateUrl: 'templates/tab-settings.html',
        controller: 'SettingsCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dashboard');

});
