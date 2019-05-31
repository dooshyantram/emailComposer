$(document).ready(function() {


  document.addEventListener('deviceready', onDeviceReady {
    alert("email available");
}, false);

  function onDeviceReady(){
     pluginInitialise();
    }



   function pluginInitialise(){
      $("#gm-open").click(function () {
     openDraft();

  });
   }


  function openDraft () {
        cordova.plugins.email.open({
            app : 'gmail',
            
        });
    }


  
   

   });

