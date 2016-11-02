
  angular
  .module("nda", [
    "ui.router",
    "ngResource",
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .factory("CategoryFactory", [
    "$resource",
    CategoryFactoryFunction
  ])
  .factory("DisasterFactory", [
    "$resource",
    DisasterFactoryFunction
  ])

  .controller("CategoryIndexController", [
    "CategoryFactory",
    CategoryIndexControllerFunction
  ])
  .controller("DisasterIndexController", [
    "DisasterFactory",
    DisasterIndexControllerFunction
  ])
  .controller("DisasterShowController", [
    "DisasterFactory",
    DisasterShowControllerFunction

  ])

function CategoryFactoryFunction($resource){
  return $resource("http://localhost:3000/categories/:id");
}
function DisasterFactoryFunction($resource){
  return $resource("http://localhost:3000/disasters/:id")
}
function CategoryIndexControllerFunction(CategoryFactory) {
this.category = CategoryFactory.query();
}
function CategoryShowControllerFunction($stateParams, CategoryFactory){
  this.category = CategoryFactory.get({id: $stateParams.id});
}
function DisasterIndexControllerFunction(DisasterFactory){
  this.disaster = DisasterFactory.query();
}

function DisasterShowControllerFunction($stateParams, DisasterFactory){
  this.disasters = DisasterFactory.get({id: $stateParams.id});
}

  function RouterFunction($stateProvider){
    $stateProvider
    .state("categoryIndex", {
      url: "/categories",
      templateUrl: "js/ng-views/categories/index.html",
      controller: "CategoryIndexController",
      controllerAs: "vm"
    })
    .state("categoryShow", {
      url: "/categories/:id",
      templateUrl: "js/ng-views/categories/show.html",
      controller: "CategoryShowController",
      controllerAs: "vm"
    })
    .state("disasterIndex", {
      url: "/disasters",
      templateUrl: "js/ng-views/disasters/index.html",
      controller: "DisasterIndexController",
      controllerAs: "vm"
    })
    .state("disasterShow", {
      url: "/disasters/:id",
      templateUrl: "js/ng-views/disasters/show.html",
      controller: "DisasterShowController",
      controllerAs: "vm"
    });
  }
