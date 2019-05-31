$( document ).ready(function() {
   

var app = {
    // Application Constructor
   function initialize() {
        this.bindEvents();
    },
    
   function bindEvents() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    }


  function onDeviceReady(){
  
     pluginInitialise();
    }



   function pluginInitialise(){
      $("#gm-open").click(function () {
        alert("hehe");
     openDraft();

  });
   }


  function openDraft () {
        cordova.plugins.email.open({
            app : 'gmail',
            
        });
    }

   };

   app.initialize();
  
   });




  

