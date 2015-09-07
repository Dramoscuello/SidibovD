'use strict';

/**
 * @ngdoc function
 * @name sidibov1App.controller:ReticuloyrumenCtrl
 * @description
 * # ReticuloyrumenCtrl
 * Controller of the sidibov1App
 */
angular.module('sidibov1App')
  .controller('ReticuloyrumenCtrl', function ($scope) {
    $scope.content = [
        {titulo: "Cavidad oral", link: "#/tematica/cavidad_oral"},
        {titulo: "Dientes", link: "#/tematica/dientes"},
        {titulo: "Lengua", link: "#/tematica/lengua"},
        {titulo: "Glandulas salivales", link: "#/tematica/glandulas_salivales"},
        {titulo: "Faringe", link: "#/tematica/faringe"},
        {titulo: "Esofago", link: "#/tematica/esofago"},
        {titulo: "Estomago", link: "#/tematica/estomago"},
        {titulo: "Reticulo y rumen", link: "#/tematica/reticulo_y_rumen"},
        {titulo: "Omaso", link: "#/tematica/omaso"},
        {titulo: "Abomaso", link: "#/tematica/abomaso"},
        {titulo: "Intestino delgado", link: "#/tematica/intestino_delgado"},
        {titulo: "Intestino Grueso", link: "#/tematica/intestino_grueso"},
        {titulo: "Enfermedades", link: "#/tematica/enfermedades"},
        {titulo: "Evaluacion", link: "#/tematica/evaluacion"}
    ]
  });
