'use strict';
      //var PatientFD = require('./Patient.json')
  var PatientFD = require('./v1/Patient.json');
    var PatientData = PatientFD;
          exports.getPatient = function(event, cb) {
    cb(null, PatientData);
  }
                      exports.putPatient = function(event, cb) {
      PatientData.push(event.body);
      cb(null, 'Item inserted successfully');
  }
              exports.postPatient = function(event, cb) {
      PatientData.push(event.body);
      cb(null, 'Item inserted successfully');
  }
              exports.patchPatient = function(event, cb) {
      PatientData.push(event.body);
      cb(null, 'Item patched successfully');
  }
            exports.deletePatient = function(event, cb) {
      var index = PatientData.indexOf(event.body);
      if (index > -1) {
          PatientData.splice(index, 1);
          cb(null, 'Item deleted successfully');
      }else{
        cb(null, 'Item does not exist');
      }
  }
            