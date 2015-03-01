angular.module('busintime.services', [])

.service('TrackList', function() {
  var self = this;
  self.track = [
    {
      id: 1,
      from : "Cicaheum",
      fromCode : "CCH",
      to : "Cibeureum",
      toCode: 'CBR',
      time : {min : 4, sec : 21},
      type : "Ekonomi / AC",
      price : "Rp 2.000,- (Eko) / Rp 3.500 (AC)"
    },
    {
      id: 2,
      to : "Cicaheum",
      toCode: 'CCH',
      from : "Cibeureum",
      fromCode: 'CBR',
      time : {min : 8, sec : 15},
      type : "Ekonomi / AC",
      price : "Rp 2.000,- (Eko) / Rp 3.500 (AC)"
    },
    {
      id: 3,
      from : "Cicaheum",
      fromCode: 'CCH',
      to : "Leuwi Panjang",
      toCode: 'LWP',
      time : {min : 5, sec : 25},
      type : "Ekonomi / AC",
      price : "Rp 2.000,- (Eko) / Rp 3.500 (AC)"
    },
    {
      id: 4,
      from : "Leuwi Panjang",
      fromCode: 'LWP',
      to : "Cicaheum",
      toCode: 'CCH',
      time : {min : 8, sec : 31},
      type : "Ekonomi / AC",
      price : "Rp 2.000,- (Eko) / Rp 3.500 (AC)"
    },
    {
      id: 5,
      from : "Cibiru",
      fromCode: 'CBU',
      to : "Kebon Kelapa",
      toCode: 'KBL',
      time : {min : 1, sec : 22},
      type : "AC",
      price : "Rp 3.500"
    },
    {
      id: 6,
      from : "Kebon Kelapa",
      fromCode: 'KBL',
      to : "Cibiru",
      toCode: 'CBU',
      time : {min : 6, sec : 21},
      type : "AC",
      price : "Rp 3.500"
    },
  ];
  self.findById = function(track) {
    return _.findWhere(self.track, {id: parseInt(track)});
  }
  return self;
})

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