// CHANGE CONTROLLER AND SERVICE NAME AS NEEDED FOR YOUR PROJECT
myApp.controller("FavoritesController", ['TheFavorites', function(theFavorites){
	console.log('FavoritesController locked and loaded!');
	
	const self = this;

	// MAKE SURE THIS MATCHES YOUR GIVEN SERVICE NAME ABOVE
	self.message = theFavorites.message;
}]);