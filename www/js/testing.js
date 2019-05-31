$(document).ready(function() {
  $("#gm-open").click(function () {
    alert("Hello!");
    onDeviceReady();

  });

  function onDeviceReady(){
    	openDraft();
    }


  function openDraft () {
        cordova.plugins.email.open({
            app : 'mailto',
            to:      'dooshyantram@gmail.com',
            cc:      ['cc1@email.de', 'cc2@email.de'],
            bcc:     ['bcc1@email.de', 'bcc2@email.de'],
            subject: 'sent from gmail',
            body:    'Lala',
            
        });
    }


  
   

   });
