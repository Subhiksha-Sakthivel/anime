angular.module('myApp', [])
.controller('myController', function($scope, $http) {
    $scope.animes = [];

    // Function to get all anime
    function getAnime() {
        $http.get('https://subhianime.onrender.com/users')
        .then(function(response) {
            console.log(response.data.users);
            $scope.animes = response.data.users;
        });
    }

    // Function to add a anime
    $scope.addAnime = function() {
        var data = {
            name: $scope.name,
            mal_score: $scope.mal_score,
            rank: $scope.rank,
            pop: $scope.pop
        };
        $http.post('https://subhianime.onrender.com/users/', data)
        .then(function(response) {
            getAnime();
            $scope.name = '';
            $scope.mal_score = '';
            $scope.rank = '';
            $scope.pop = '';
        });
    };

    // Function to delete a song
    $scope.deleteAnime = function(anime) {
        $http.delete('https://subhianime.onrender.com/users/' + anime._id)
        .then(function(response) {
            getAnime();
        });
    };


    // Get all anime on page load
    getAnime();
});
