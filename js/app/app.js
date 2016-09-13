function Router($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/home.html'
    })
    .state('home.timeline', {
      url: 'timeline',
      templateUrl: 'views/home/timeline.html'
    })
    .state('home.notifications', {
      url: 'notifications',
      templateUrl: 'views/home/notifications.html'
    })
    .state('home.user', {
      url: 'user',
      templateUrl: 'views/home/user.html'
    })
}
angular
    .module('app', ['ui.router'])
    .config(Router);