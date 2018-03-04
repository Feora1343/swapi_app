// CHANGE CONTROLLER AND SERVICE NAME AS NEEDED FOR YOUR PROJECT
myApp.controller("SearchController", ['SwapiService', function(SwapiService) {
	console.log('SearchController locked and loaded!');
	
	const self = this;

	// THIS HANDLES SENDING MESSAGE THAT SERVICE IS WORKING
	self.message = SwapiService.message;

	self.searchRsults = SwapiService.searchResults;
	self.resources = SwapiService.resources;
	self.favoriteCount = SwapiService.favoriteCount;

	// RUN THE searchSwapi FUNCTION
	self.searchSwapi = (resource, keyword) => {
		SwapiService.SwapiService(resource, keyword)
	}

	// RUN THE getResources FUNCTION
	self.getResources = () => {
		SwapiService.getResources();
	}

	// RUN THE addToFavorites FUNCTION
	self.addToFavorites = (favorite, favoriteIncrement) => {
		SwapiService.addToFavorites(favorite, favoriteIncrement);
	}

	self.getResources();
}]);