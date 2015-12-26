


/*
$scope.voiceCommand = function (){
  $ionicLoading.show({
    template: '<ion-spinner icon="lines"></ion-spinner><br>You can speak to me ! ...'
  });
  ionic.Platform.ready(function(){
    try {
      window.ApiAIPlugin.requestVoice(
        {}, // empty for simple requests, some optional parameters can be here
        function (response) {
          // place your result processing here
          alert(JSON.stringify(response));
        },
        function (error) {
          // place your error processing here
          alert(error);
        });
      } catch (e) {
        alert(e);
      }

    });
  };

  */