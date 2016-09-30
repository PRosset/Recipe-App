angular.module("recipes", ["ui.router"])

.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise("/home");

	$stateProvider
	.state("home", {
		url: "/home",
		template: "<p>You're at the HOME view</p>"
	})
	.state("about", {
		url: "/about",
		template: "<p>You're at the ABOUT view</p>"
	})
});