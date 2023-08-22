var myApp = angular.module("myModule", ["ngRoute"]);
myApp.config(function($routeProvider, $locationProvider){
    $locationProvider.hashPrefix("");
    $routeProvider
    .when(
        "/home", {
            templateUrl: "./pages/home.html",
        }
    ).when(
        "/food", {
            templateUrl: "./pages/food.html",
        }
    ).when(
        "/bill-food", {
            templateUrl: "./pages/bill-food.html",
        }
    ).when(
        "/bill-ticket", {
            templateUrl: "./pages/bill-ticket.html",
        }
    ).when(
        "/movie", {
            templateUrl: "./pages/movie.html",
        }
    ).when(
        "/movie-type", {
            templateUrl: "./pages/movie-type.html",
        }
    ).when(
        "/seat", {
            templateUrl: "./pages/seat.html",
        }
    )
    .when(
        "/customer", {
            templateUrl: "./pages/customer.html",
        }
    )
    .when(
        "/room", {
            templateUrl: "./pages/room.html",
        }
    ).when(
        "/promotion", {
            templateUrl: "./pages/promotion.html",
        }
    ).when(
        "/statistical", {
            templateUrl: "./pages/statistical.html",
        }
    )
    .when(
        "/seat_type", {
            templateUrl: "./pages/seat_type.html",
        }
    ).when(
        "/cimena", {
            templateUrl: "./pages/cimena.html",
        }
    ).when(
        "/schedule", {
            templateUrl: "./pages/schedule.html",
        }
    ).when(
        "/setting", {
            templateUrl: "./pages/setting.html",
        }
    ).otherwise({
        redirectTo: "/home"
    })
} )