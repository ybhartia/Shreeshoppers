angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('warehouse', {
    url: '/page1',
    templateUrl: 'templates/warehouse.html',
    controller: 'warehouseCtrl'
  })

  .state('login', {
    url: '/page2',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('brand', {
    url: '/pagejockey',
    templateUrl: 'templates/brand.html',
    controller: 'brandCtrl'
  })

  .state('brand2', {
    url: '/pagepatanjali',
    templateUrl: 'templates/brand2.html',
    controller: 'brand2Ctrl'
  })

  .state('brand3', {
    url: '/pageFCUK',
    templateUrl: 'templates/brand3.html',
    controller: 'brand3Ctrl'
  })

$urlRouterProvider.otherwise('/page2')


});