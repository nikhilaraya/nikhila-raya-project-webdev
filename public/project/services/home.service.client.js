/**
 * Created by user on 01-08-2017.
 */
(function () {
    angular
        .module("Foood")
        .service("homeService", homeService);
    
    function homeService($http) {
        this.searchBasedOnLocation = searchBasedOnLocation;

        function searchBasedOnLocation(latitude,longitude) {
            var url = 'https://developers.zomato.com/api/v2.1/search?lat='+latitude+'&lon='+longitude+'&count=10&apikey=70812261f149b635898123ae618d05ca';
            return $http.get(url);
        }
    }
})();