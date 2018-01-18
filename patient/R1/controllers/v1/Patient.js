'use strict';
var url = require('url');
var Patient = require('./PatientService');

module.exports.getPatient = function getPatient (req, res, next) {
    Patient.getPatient (req.swagger.params, res, next);
};

module.exports.putPatient = function putPatient (req, res, next) {
    Patient.putPatient (req.swagger.params, res, next);
};

module.exports.postPatient = function postPatient (req, res, next) {
    Patient.postPatient (req.swagger.params, res, next);
};

module.exports.patchPatient = function patchPatient (req, res, next) {
    Patient.patchPatient (req.swagger.params, res, next);
};

module.exports.deletePatient = function deletePatient (req, res, next) {
    Patient.deletePatient (req.swagger.params, res, next);
};

