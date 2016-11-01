"use strict";

(function(){
  angular
  .module("disasters")
  .controller("DisastersIndexController", [
    DisastersIndexControllerFunction
  ]);

  function DisastersIndexControllerFunction(){
    this.disasters = [
      {title: "These"},
      {title: "Are"},
      {title: "Hardcoded"},
      {title: "Disasters"}
    ]
  }
}());
