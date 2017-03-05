angular.module('app.controllers', [])
  
.controller('pageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('myStoryCtrl', ['$scope', '$stateParams', '$http','$sce',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http, $sce) {
   $scope.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
  };
 $scope.movie = {src:"https://www.youtube.com/embed/Yy9kg9QlZeg"};
$scope.editPersonData = function() {
    var readonly = document.getElementsByClassName("read-only");
    readonly.style.display = "none";
    var editonly = document.getElementsByClassName("edit-only");
    editonly.style.display = "block";
  }
  
  

  var previousState = '';

  function checkFamiliar(){
    $http.get("http://fbb5f31e.ngrok.io/getInfo").then(function(res){
          console.log(JSON.stringify(res));
          if(res.data!=null && res.data.info && previousState !=  res.data.info.message){
              previousState = res.data.info.message;
              alert(previousState);
          }
      });
  }

  function getStory() {
    // var readonly = document.getElementsByClassName("read-only");
    // readonly.style.display = "block";
    // var editonly = document.getElementsByClassName("edit-only");
    // editonly.style.display = "none";
    console.log("Inside get Story");
    var message = 'Get Story';
    var storyurl = 'http://fbb5f31e.ngrok.io/1/story';
      $http.get(storyurl).then(function(res){
        var data  = res.data;
        //console.log(JSON.stringify(data));
        for(var y in data){
          //console.log(data[y].key);
          if (data[y].key == "Exact location"){
            //console.log(JSON.stringify(data[y]));
            $scope.address = data[y];
            //document.getElementById("myStory-list-item9").innerHtml=data[y].value;
          }

          if (data[y].key == "Age"){
            $scope.age = data[y];
            //$("#myStory-list-item10").html("Age : " + el.value)
          }

          if (data[y].key == "hobby"){
            $scope.hobby = data[y];
            //$("#myStory-list-item11").html("Hobbies : " + el.value)
          }

          if (data[y].key == "Wife/spouse name"){
            $scope.wifeName = data[y];
           // $("#myStory-list-item12").html("Wife's Name : " + el.value)
          }

          if (data[y].key == "songs"){
            $scope.songs = data[y];
            //$("#myStory-list-item13").html("Songs : " + el.value)
          }

          if (data[y].key == "Favorite national sports team"){
            $scope.favoriteSportsTeam = data[y];
            //$("#myStory-list-item14").html("Sport Teams : " + el.value)
          }

          if (data[y].key == "favorite musician genre"){
            $scope.favoriteMusic = data[y];
            //$("#myStory-list-item15").html("Favourite Rock Bands : " + el.value)
          }

          if (data[y].key == "favSport"){
            //$scope.favSport = data[y]
            //$("#myStory-list-item16").html("Favourite Sport : " + el.value)
          }

          if (data[y].key == "a country/city you have travelled to"){
            $scope.country = data[y];
            //$("#myStory-list-item17").html("Countries Visited : " + el.value)
          }

          if (data[y].key == "favorite food/dish"){
            $scope.food = data[y];
            //$("#myStory-list-item18").html("Favourite Food :" + el.value)
          }

          if (data[y].key == "pet"){
            $scope.pet = data[y];
            //$("#myStory-list-item19").html("Pet Type :" + el.value)
          }

          if (data[y].key == "pet name"){
            $scope.petName = data[y];
            //$("#myStory-list-item20").html("Pet Name :" + el.value)
          }
        };
      
      });
      console.log("after http");
    }

  $scope.savePersonData = function(){
    var personData = [];
    var address = $("#address").val();
    personData.extend([{key:"Exact location",value:address}]);

    var age = $("#age").val();
    personData.extend([{key:"Age",value:age}]);

    var hobbies = $("#hobbies").val();
    personData.extend([{key:"hobby",value:hobbies}]);

    var wifeName = $("#wifeName").val();
    personData.extend([{key:"Wife/spouse name",value:wifeName}]);

    var songs = $("#songs").val();
    personData.extend([{key:"songs",value:songs}]);

    var sports = $("#Favorite national sports team").val();
    personData.extend([{key:"Favorite national sports team",value:sports}]);

    var Bands = $("#Bands").val();
    personData.extend([{key:"favorite musician/band",value:Bands}]);

    var favSport = $("#favSport").val();
    personData.extend([{key:"favSport",value:favSport}]);

    var countriesVisited = $("#countriesVisited").val();
    personData.extend([{key:"a country/city you have travelled to",value:countriesVisited}]);

    var favFood = $("#favFood").val();
    personData.extend([{key:"favorite food/dish",value:favFood}]);

    var kPet = $("#kPet").val();
    personData.extend([{key:"pet",value:kPet}]);

    var pName = $("#pName").val();
    personData.extend([{key:"pet name",value:pName}]);

    console.log(personData);

  }

  getStory();
  setInterval(checkFamiliar,5000);

}])
   
/*.controller('personalChatAssistantCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])*/

.controller('personalChatAssistantCtrl', ['$scope', '$stateParams', '$http','$timeout','$ionicScrollDelegate',

function($scope, $stateParams,$http,$timeout, $ionicScrollDelegate ) {

  $scope.hideTime = true;
  $scope.imgShow = 'none';
  $scope.imgHide = 'block';
  var questionURL = 'http://fbb5f31e.ngrok.io/1/sendQuestion';
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
      var request = $http({
          method: "post",
          url: questionURL,
          data: {question:$scope.previousMessage}
      }).success(
          function( res ) {
              if((res.answer).indexOf("##")!==-1){
                /*$scope.imgShow = 'block';
                $scope.imgHide = 'none';*/
                var imageURL = res.answer.split("##");
                console.log(imageURL[1]);
                $scope.messages.push({
                  userId: '12345',
                  text: '<img src="'+imageURL[1]+'"/>'
                });
              }else{
                /*$scope.imgShow = 'none';
                $scope.imgHide = 'block';*/
                $scope.messages.push({
                  userId: '12345',
                  text: '<span>'+res.answer+'</span>'
                });
              }
              
          }
      );

    	/*$http.post(questionURL, JSON.stringify({question:$scope.previousMessage})).then(function(res){
    		alert('in bot message:'+JSON.stringify(res));
    		$scope.messages.push({
		      userId: '12345',
		      text: (JSON.parse(res)).answer
		    });

    	});*/
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
	      text: '<span>'+$scope.data.message+'</span>'
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
 