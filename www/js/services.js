angular.module('busintime.services', [])

.service('BLE', function($q, $timeout) {
  var self = this;
  var app = document.URL.indexOf( 'http://' ) === -1 && document.URL.indexOf( 'https://' ) === -1;
  var busList = [
    {
      id: 'CD:AA:3C:59:41:EA',
      name: 'Bus Pink',
    },
    {
      id: 'CA:53:D2:A0:F0:A8',
      name: 'Bus Kuning',
    },
    {
      id: 'D9:A5:58:A6:6C:22',
      name: 'Bus Hijau',
    },
  ];

  function processDevice(device) {
    var res = device;
    var bus = _.findWhere(busList, {id: device.id});
    res.name = bus.name;
    return res;
  }

  self.scan = function() {
    var deferred = $q.defer();
    var devices = [];
    if (app) {
      ble.isEnabled(function() {
        ble.scan([], 5, function(device) {
          // console.log(JSON.stringify(devices));
          // console.log(device);
          var res = processDevice(device);
          devices.push(res);
        }, function(error) {
          console.log(error);
          deferred.reject(error);
        });
        $timeout(function() {
          deferred.resolve(devices);
        }, 5000);
      }, function() {
        deferred.reject('Please activate your bluetooth to scan');
      });
    } else {
      deferred.reject('Please use device to check bluetooth');
    }
    return deferred.promise;
  }
  return self;
  
});