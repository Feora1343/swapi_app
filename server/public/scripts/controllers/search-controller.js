// CHANGE CONTROLLER AND SERVICE NAME AS NEEDED FOR YOUR PROJECT
myApp.controller("SearchController", ['SwapiService', function(SwapiService) {
	console.log('SearchController locked and loaded!');
	
	const self = this;

	self.searchResults = SwapiService.searchResults;
	self.resources = SwapiService.resources;

	// RUN THE searchSwapi FUNCTION
	self.searchSwapi = (resource, keyword) => {
		SwapiService.searchSwapi(resource, keyword);
	}

	// RUN THE getResources FUNCTION
	self.getResources = () => {
		SwapiService.getResources();
	}

	// RUN THE addToFavorites FUNCTION
	self.addToFavorites = (favorite) => {
		SwapiService.addToFavorites(favorite);
	}

	self.getResources();
}]);