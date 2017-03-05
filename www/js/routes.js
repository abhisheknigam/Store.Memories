angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('page', {
    url: '/page1',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

  .state('myStory', {
    url: '/page2',
    templateUrl: 'templates/myStory.html',
    controller: 'myStoryCtrl'
  })

  .state('personalChatAssistant', {
    url: '/page3',
    templateUrl: 'templates/personalChatAssistant.html',
    controller: 'personalChatAssistantCtrl'
  })

  .state('intelligentSchedulePlanner', {
    url: '/page4',
    templateUrl: 'templates/intelligentSchedulePlanner.html',
    controller: 'intelligentSchedulePlannerCtrl'
  })

$urlRouterProvider.otherwise('/page1')

  

});