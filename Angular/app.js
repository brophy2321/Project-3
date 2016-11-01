"use strict";

(function(){
  angular
  .module("disaster", [
    "ui.router",
    "disasters"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("disasterIndex", {
      url: "/disasters",
      templateUrl: "js/disasters/index.html",
      controller: "DisasterIndexController",
      controllerAs: "DisasterIndexViewModel"
    })
    .state("disasterShow", {
      url: "/disasters/:id",
      templateUrl: "js/disasters/show.html"
    });
  }
}());
