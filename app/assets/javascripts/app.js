angular.module("recipes", ["ui.router", "ngAnimate", "templates"])

.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise("/home");

	$stateProvider
	.state("home", {
		url: "/",
		templateUrl: "home.html",
		controller: "HomeCtrl"
	})
	.state("test", {
		url: "/test",
		templateUrl: "test.html"
	})
	.state("recipes", {
		url: "/recipe",
		templateUrl: "/recipes.html",
		controller: "recipes_controller"
	});

	// default fall back route
	$urlRouterProvider.otherwise('/');
});