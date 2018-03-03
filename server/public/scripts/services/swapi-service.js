// CHANGE SERVICE NAME AS NEEDED FOR YOUR PROJECT
myApp.service('SwapiService', ['$http', function($http){
	console.log('SwapiService Locked and loaded!');

	const self = this;
	
	self.message = "Hello from the SwapiService!";
}]);