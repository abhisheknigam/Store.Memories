angular.module('app.controllers', [])
  
.controller('pageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('myStoryCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
/*.controller('personalChatAssistantCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])*/

.controller('personalChatAssistantCtrl', ['$scope', '$stateParams', '$http','$timeout','$ionicScrollDelegate',

function($scope, $stateParams,$http,$timeout, $ionicScrollDelegate ) {

  $scope.hideTime = true;
  var questionURL = 'http://10.6.38.3:8042/1/sendQuestion';
  var alternate,
    isIOS = ionic.Platform.isWebView() && ionic.Platform.isIOS();
  $scope.previousMessage='';

  $scope.sendBotMessage = function() {
    //alternate = !alternate;
    var message = 'Ask me anything about yourself...';
    if($scope.previousMessage == '' && ($scope.data.message==undefined || $scope.data.message=='')){
    	$scope.messages.push({
	      userId: '12345',
	      text: message,
	    });
    }else if($scope.previousMessage!=undefined && $scope.previousMessage != ''){
    	console.log({question:$scope.previousMessage});
    	$http.post(questionURL, JSON.stringify({question:$scope.previousMessage})).then(function(res){
    		alert('in bot message:'+JSON.stringify(res));
    		$scope.messages.push({
		      userId: '12345',
		      text: (JSON.parse(res)).answer
		    });

    	});
    	console.log("after http");
    }

    /*$scope.messages.push({
      userId: alternate ? '12345' : '54321',
      text: $scope.data.message,
    });

    delete $scope.data.message;*/
    //$ionicScrollDelegate.scrollBottom(true);

  };
  

  $scope.sendUserMessage = function(){

  		$scope.messages.push({
	      userId: '54321',
	      text: $scope.data.message,
	    });

  		$scope.previousMessage = $scope.data.message;
	    delete $scope.data.message;
	    $ionicScrollDelegate.scrollBottom(true);
	    $scope.sendBotMessage();
  };


  $scope.inputUp = function() {
    if (isIOS) $scope.data.keyboardHeight = 216;
    $timeout(function() {
      $ionicScrollDelegate.scrollBottom(true);
    }, 300);

  };

  $scope.inputDown = function() {
    if (isIOS) $scope.data.keyboardHeight = 0;
    $ionicScrollDelegate.resize();
  };

  $scope.closeKeyboard = function() {
    //cordova.plugins.Keyboard.close();
  };


  $scope.data = {};
  $scope.myId = '12345';
  $scope.messages = [];

}])
   
.controller('intelligentSchedulePlannerCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 