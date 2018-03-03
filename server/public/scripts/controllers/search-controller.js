// CHANGE CONTROLLER AND SERVICE NAME AS NEEDED FOR YOUR PROJECT
myApp.controller("SearchController", ['TheSearch', (theSearch) => {
	console.log('SearchController locked and loaded!');
	
	const self = this;

	// MAKE SURE THIS MATCHES YOUR GIVEN SERVICE NAME ABOVE
	self.message = theSearch.message;
}]);