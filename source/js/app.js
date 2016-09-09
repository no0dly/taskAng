(function() {
  var app = angular.module('myApp', ['ui.router']);

  app.config(function( $stateProvider, $urlRouterProvider ){
    // $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('index', {
        url: "",
        templateUrl: "/index.html"
      })
      .state('sing-up', {
        url: "",
        templateUrl: "/sign-up.html"
      })
      .state('sing-up-invited', {
        url: "",
        templateUrl: "/sign-up-invited.html"
      });
  });
}());