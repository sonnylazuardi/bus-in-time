angular.module('busintime.services', [])

.factory('Halte', function($http, $q) {
  var self = this;
  self.halte = [];
  self.koridorHalte = [];
  self.getAll = function() {
    var def = $q.defer();
    if (self.halte.length == 0) {
      $http.jsonp('http://itsjakarta.com/map/its/halte?callback=JSON_CALLBACK').success(function (data) {
        self.halte = data.result;
        def.resolve(data.result);
      });  
    } else {
      def.resolve(self.halte);
    }
    return def.promise;
  }
  // self.init = function() {
  //   var listKodeKoridor = [
  //     {
  //       kode: '4',
  //       name: 'Pulo Gadung - Dukuh Atas 2'
  //     },
  //     {
  //       kode: '5',
  //       name: 'Ancol - Kampung Melayu'
  //     },
  //     {
  //       kode: '6',
  //       name: 'Ragunan - Dukuh Atas 2'
  //     },
  //     {
  //       kode: '8',
  //       name: 'Harmoni - Lebak Bulus'
  //     },
  //     {
  //       kode: '8A',
  //       name: 'Harmoni - Grogol'
  //     }
  //   ];
  //   _.each(listKodeKoridor, function(item, i) {
  //     $http.jsonp('http://itsjakarta.com/its/master_halte/'+item.kode).success(function (data) {
  //       self.koridorHalte.push(item);  
  //     });
  //   });
  //   _.each('')

  // }
  // self.init();
  
  
  return self;
})

.service('TrackList', function() {
  var self = this;
  self.track = [
    {
      id: 1,
      from : "Kampung Melayu",
      fromCode : "KMY",
      to : "Pasar Minggu",
      toCode: 'PMG',
      time : {min : 4, sec : 21},
      type : "Trans Jakarta",
      price : "Rp 2.000,- (Eko) / Rp 3.500 (AC)"
    },
    {
      id: 2,
      to : "Pasar Minggu",
      toCode: 'PMG',
      from : "Desa Putra",
      fromCode: 'DSP',
      time : {min : 8, sec : 15},
      type : "Trans Jakarta",
      price : "Rp 2.000,- (Eko) / Rp 3.500 (AC)"
    },
    {
      id: 3,
      from : "Pasar Minggu",
      fromCode: 'PMG',
      to : "Jagakarsa",
      toCode: 'JGK',
      time : {min : 5, sec : 25},
      type : "Trans Jakarta",
      price : "Rp 2.000,- (Eko) / Rp 3.500 (AC)"
    },
    {
      id: 4,
      from : "Pasar Minggu",
      fromCode: 'PMG',
      to : "Ciganjur",
      toCode: 'CGJ',
      time : {min : 8, sec : 31},
      type : "Trans Jakarta",
      price : "Rp 2.000,- (Eko) / Rp 3.500 (AC)"
    },
    {
      id: 5,
      from : "Pasar Minggu",
      fromCode: 'PMG',
      to : "Manggarai",
      toCode: 'MGR',
      time : {min : 1, sec : 22},
      type : "AC",
      price : "Rp 3.500"
    },
    {
      id: 6,
      from : "Grogol",
      fromCode: 'GRG',
      to : "Rawamangun",
      toCode: 'RWN',
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