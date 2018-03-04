// CHANGE CONTROLLER AND SERVICE NAME AS NEEDED FOR YOUR PROJECT
myApp.controller("FavoritesController", ['SwapiService', function(SwapiService) {
	console.log('FavoritesController locked and loaded!');
	
	const self = this;

	// THIS HANDLES SENDING MESSAGE THAT SERVICE IS WORKING
	self.message = SwapiService.message;
	self.favorites = SwapiService.favorites;

	// RUN THE getFavorites FUNCTION
	self.getFavorites = () => {
		SwapiService.getFavorites();
	}

	// RUN THE deleteFavorite FUNCTION
	self.deletefavorite = (favoriteId) => {
		SwapiService.deletefavorite(favoriteId);
	}
}]);