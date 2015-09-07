'use strict';

/**
 * @ngdoc overview
 * @name sidibov1App
 * @description
 * # sidibov1App
 *
 * Main module of the application.
 */
angular
  .module('sidibov1App', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
//      .when('/about', {
//        templateUrl: 'views/about.html',
//        controller: 'AboutCtrl',
//        controllerAs: 'about'
//      })
      .when('/tematica/cavidad_oral', {
        templateUrl: 'views/cavidadoral.html',
        controller: 'CavidadoralCtrl',
        controllerAs: 'cavidadoral'
      })
      .when('/tematica/dientes', {
        templateUrl: 'views/dientes.html',
        controller: 'DientesCtrl',
        controllerAs: 'dientes'
      })
      .when('/tematica/lengua', {
        templateUrl: 'views/lengua.html',
        controller: 'LenguaCtrl',
        controllerAs: 'lengua'
      })
      .when('/tematica/glandulas_salivales', {
        templateUrl: 'views/glandulassalivales.html',
        controller: 'GlandulassalivalesCtrl',
        controllerAs: 'glandulassalivales'
      })
      .when('/tematica/faringe', {
        templateUrl: 'views/faringe.html',
        controller: 'FaringeCtrl',
        controllerAs: 'faringe'
      })
      .when('/tematica/esofago', {
        templateUrl: 'views/esofago.html',
        controller: 'EsofagoCtrl',
        controllerAs: 'esofago'
      })
      .when('/tematica/estomago', {
        templateUrl: 'views/estomago.html',
        controller: 'EstomagoCtrl',
        controllerAs: 'estomago'
      })
      .when('/tematica/reticulo_y_rumen', {
        templateUrl: 'views/reticuloyrumen.html',
        controller: 'ReticuloyrumenCtrl',
        controllerAs: 'reticuloyrumen'
      })
      .when('/tematica/omaso', {
        templateUrl: 'views/omaso.html',
        controller: 'OmasoCtrl',
        controllerAs: 'omaso'
      })
      .when('/tematica/abomaso', {
        templateUrl: 'views/abomaso.html',
        controller: 'AbomasoCtrl',
        controllerAs: 'abomaso'
      })
      .when('/tematica', {
        templateUrl: 'views/tematica.html',
        controller: 'TematicaCtrl',
        controllerAs: 'tematica'
      })
      .when('/foro', {
        templateUrl: 'views/foro.html',
        controller: 'ForoCtrl',
        controllerAs: 'foro'
      })
      .when('/contacto', {
        templateUrl: 'views/contacto.html',
        controller: 'ContactoCtrl',
        controllerAs: 'contacto'
      })
      .when('/tematica/introduccion', {
        templateUrl: 'views/introduccion.html',
        controller: 'IntroduccionCtrl',
        controllerAs: 'introduccion'
      })
      .when('/tematica/evaluacion', {
        templateUrl: 'views/evaluacion.html',
        controller: 'EvaluacionCtrl',
        controllerAs: 'evaluacion'
      })
      .when('/tematica/intestino_delgado', {
        templateUrl: 'views/intestinodelgado.html',
        controller: 'IntestinodelgadoCtrl',
        controllerAs: 'intestinodelgado'
      })
      .when('/tematica/intestino_grueso', {
        templateUrl: 'views/intestinogrueso.html',
        controller: 'IntestinogruesoCtrl',
        controllerAs: 'intestinogrueso'
      })
      .when('/tematica/enfermedades', {
        templateUrl: 'views/enfermedades.html',
        controller: 'EnfermedadesCtrl',
        controllerAs: 'enfermedades'
//      })
//      .otherwise({
//         templateUrl: '404.html'
      });
  });
