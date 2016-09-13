function Router($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'views/home.html'
    })
    .state('home.timeline', {
      url: '/timeline',
      templateUrl: 'views/home/timeline.html'
    })
    .state('home.notifications', {
      url: '/notifications',
      templateUrl: 'views/home/notifications.html'
    })
    .state('home.profile', {
      url: '/profile',
      templateUrl: 'views/home/user.html'
    })
}
angular
    .module('app', ['ui.router'])
    .config(Router);