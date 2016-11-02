angular
.module("nda", [
    "ui.router",
    "ngResource"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])

.controller("CategoriesIndexController", [
  "CategoriesFactory",
  CategoriesIndexControllerFunction
])

.controller("DisastersIndexController", [
  "DisastersFactory",
  DisastersIndexControllerFunction
])
.factory("CategoriesFactory",[
  "$resource",
  FactoryFunction
]);
function CategoriesIndexControllerFunction($resource){
  return $resource("http://localhost:3000/categories/index");
}


  function RouterFunction($stateProvider){
    $stateProvider
    .state("categoriesIndex", {
      templateUrl: "js/categories/index.html",
      controller: "CategoriesIndexController",
      controllerAs: "vm"
    })
    .state("disasterIndex", {
      url: "/disasters",
      templateUrl: "js/disasters/index.html",
      controller: "DisasterIndexController",
      controllerAs: "vm"
    })
    .state("disasterShow", {
      url: "/disasters/:id",
      templateUrl: "js/disasters/show.html",
      controller: "DisasterShowController",
      controllerAs: "vm"
    });
  }
