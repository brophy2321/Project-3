angular
  .module("nda", [
    "ui.router",
    "ngResource"
  ])
  .config([
    "$stateProvider",
    RouterFunction

.controller("CategoryIndexController", [
  "CategoryFactory",
  CategoryIndexControllerFunction
])

.controller("DisasterIndexController", [
  "DisasterFactory",
  DisasterIndexControllerFunction
])
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("categoryIndex", {
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
      templateUrl: "js/disasters/show.html"
      controller: "DisasterShowController",
      controllerAs: "vm"
    });
  }
  function FactoryFunction($resource){
    return $resource("http://localhost:3000/categories/:id");
  }  ());
