'use strict';
  var PatientFD = require('../../sampleData/v1/Patient.json');
  var PatientData = PatientFD;




exports.getPatient = function(args, res, next) {
/**
 * Gets all customers from the system that the user has access to
 *
 * returns List
 **/
  if (Object.keys(PatientData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                                              res.end(JSON.stringify(PatientData));
                } else {
      res.end();
  }
}





exports.putPatient = function(args, res, next) {
/**
 * Puts all customers from the system that the user has access to
 *
 **/
  if (Object.keys(PatientData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(PatientData[Object.keys(PatientData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


exports.postPatient = function(args, res, next) {
/**
 * Posts all customers from the system that the user has access to
 *
 **/
  if (Object.keys(PatientData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(PatientData[Object.keys(PatientData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


exports.patchPatient = function(args, res, next) {
/**
 * Patchs all customers from the system that the user has access to
 *
 **/
  if (Object.keys(PatientData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(PatientData[Object.keys(PatientData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}



exports.deletePatient = function(args, res, next) {
/**
* Deletes all customers from the system that the user has access to
*
**/
  if (Object.keys(PatientData).length > 0) {
      res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(PatientData[Object.keys(PatientData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


