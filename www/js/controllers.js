angular.module('goodcash.controllers', ['ionic'])

.controller('AppCtrl', function($scope, $ionicPopover, $rootScope) {
    $ionicPopover.fromTemplateUrl('templates/popover.html', {
        scope: $scope,
    }).then(function(popover) {
        $scope.popover = popover;
    });
    $rootScope.$on('$stateChangeStart', function(event){ 
      if ($scope.popover) {
        $scope.popover.hide();
      }
    });
})

.controller('DashboardCtrl', function($scope) {
  $scope.data = {
    showDelete: false
  };
})

.controller('TutorialCtrl', function($scope, $stateParams, $ionicSlideBoxDelegate) {
  $scope.active = 0;
  if ($stateParams.id == 'profile') {
    $scope.active = 2;
  }
})

.controller('HistoryCtrl', function($scope, $ionicActionSheet) {
  $scope.myChartData = [
        {
            value: 30,
            color:"#ad3f42",
            label: "Transportation"

        },
        {
            value : 50,
            color : "#2e8e69",
            label: "Food"
        },
        {
            value : 100,
            color : "#2672b3",
            label: "Entertainment"
        },
        {
            value : 40,
            color : "#fbae46",
            label: "Others"
        }
    ];

    //Globals
    $scope.myChartOptions = {
        // Boolean - Whether to animate the chart
        animation: false,

        // Boolean - whether or not the chart should be responsive and resize when the browser does.
        responsive: true,

        maintainAspectRatio: true,

        // Boolean - Determines whether to draw tooltips on the canvas or not
        showTooltips: true,

        // Array - Array of string names to attach tooltip events
        tooltipEvents: ["mousemove", "touchstart", "touchmove"],

        // String - Tooltip background colour
        tooltipFillColor: "rgba(0,0,0,0.8)",

        // String - Tooltip label font declaration for the scale label
        tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

        // Number - Tooltip label font size in pixels
        tooltipFontSize: 14,

        // String - Tooltip font weight style
        tooltipFontStyle: "normal",

        // String - Tooltip label font colour
        tooltipFontColor: "#fff",

        // String - Tooltip title font declaration for the scale label
        tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

        // Number - Tooltip title font size in pixels
        tooltipTitleFontSize: 14,

        // String - Tooltip title font weight style
        tooltipTitleFontStyle: "bold",

        // String - Tooltip title font colour
        tooltipTitleFontColor: "#fff",

        // Number - pixel width of padding around tooltip text
        tooltipYPadding: 6,

        // Number - pixel width of padding around tooltip text
        tooltipXPadding: 6,

        // Number - Size of the caret on the tooltip
        tooltipCaretSize: 8,

        // Number - Pixel radius of the tooltip border
        tooltipCornerRadius: 6,

        // Number - Pixel offset from point x to tooltip edge
        tooltipXOffset: 10,

        // String - Template string for single tooltips
        tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",

        // String - Template string for single tooltips
        multiTooltipTemplate: "<%= value %>",

        // Function - Will fire on animation progression.
        onAnimationProgress: function(){},

        // Function - Will fire on animation completion.
        onAnimationComplete: function(){}
    };
})

.controller('HistoryChartCtrl', function($scope, Chats) {
  $scope.myChartData = [
        {
            value: 30,
            color:"#ad3f42",
            label: "Transportation"

        },
        {
            value : 50,
            color : "#2e8e69",
            label: "Food"
        },
        {
            value : 100,
            color : "#2672b3",
            label: "Entertainment"
        },
        {
            value : 40,
            color : "#fbae46",
            label: "Others"
        }
    ];

    //Globals
    $scope.myChartOptions = {
        // Boolean - Whether to animate the chart
        animation: false,

        // Boolean - whether or not the chart should be responsive and resize when the browser does.
        responsive: true,

        maintainAspectRatio: true,

        // Boolean - Determines whether to draw tooltips on the canvas or not
        showTooltips: true,

        // Array - Array of string names to attach tooltip events
        tooltipEvents: ["mousemove", "touchstart", "touchmove"],

        // String - Tooltip background colour
        tooltipFillColor: "rgba(0,0,0,0.8)",

        // String - Tooltip label font declaration for the scale label
        tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

        // Number - Tooltip label font size in pixels
        tooltipFontSize: 14,

        // String - Tooltip font weight style
        tooltipFontStyle: "normal",

        // String - Tooltip label font colour
        tooltipFontColor: "#fff",

        // String - Tooltip title font declaration for the scale label
        tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

        // Number - Tooltip title font size in pixels
        tooltipTitleFontSize: 14,

        // String - Tooltip title font weight style
        tooltipTitleFontStyle: "bold",

        // String - Tooltip title font colour
        tooltipTitleFontColor: "#fff",

        // Number - pixel width of padding around tooltip text
        tooltipYPadding: 6,

        // Number - pixel width of padding around tooltip text
        tooltipXPadding: 6,

        // Number - Size of the caret on the tooltip
        tooltipCaretSize: 8,

        // Number - Pixel radius of the tooltip border
        tooltipCornerRadius: 6,

        // Number - Pixel offset from point x to tooltip edge
        tooltipXOffset: 10,

        // String - Template string for single tooltips
        tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",

        // String - Template string for single tooltips
        multiTooltipTemplate: "<%= value %>",

        // Function - Will fire on animation progression.
        onAnimationProgress: function(){},

        // Function - Will fire on animation completion.
        onAnimationComplete: function(){}
    };
})

.controller('HistoryListCtrl', function($scope, Chats) {

})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('SavingCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AddExpenseCtrl', function($scope) {
  $scope.isShowFull = false;

  $scope.SwitchShow = function(){
    $scope.isShowFull = !$scope.isShowFull;
  };

  $scope.showCategories = function() {
   $ionicActionSheet.show({
     buttons: [
       { text: '<span class="text-goodism-green"><i class="icon ion-ios-wineglass-outline"></i> Food</span>' },
       { text: '<span class="text-goodism-red"><i class="icon ion-ios-cart-outline"></i> Transportation</span>' },
       { text: '<span class="text-goodism-blue"><i class="icon ion-ios-film-outline"></i> Entertainment</span>' },
       { text: '<span class="text-goodism-orange"><i class="icon ion-ios-medical-outline"></i> Others</span>' },
     ],
     titleText: 'Change Category',
     cancelText: 'Cancel',
     cancel: function() {
          // add cancel code..
        },
     buttonClicked: function(index) {
       return true;
     }
   });

 };

 $scope.showSources = function() {

   $ionicActionSheet.show({
     buttons: [
       { text: '<span class="text-goodism-dark"><i class="icon ion-cash"></i> Cash</span>' },
       { text: '<span class="text-goodism-dark"><i class="icon ion-card"></i> Bank</span>' }
     ],
     titleText: 'Change Source',
     cancelText: 'Cancel',
     cancel: function() {
          // add cancel code..
        },
     buttonClicked: function(index) {
       return true;
     }
   });

 };
})

.controller('AddSavingCtrl', function($scope) {
  $scope.isShowFull = false;

  $scope.SwitchShow = function(){
    $scope.isShowFull = !$scope.isShowFull;
  };
})

.controller('SettingsCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
