
  $("#click").click(function () {
    alert("Hello!");

  });

  function onDeviceReady(){
    	openDraft();
    }


  function openDraft (isHtml) {
        cordova.plugins.email.open({
            to:      'dooshyantram@gmail.com',
            cc:      ['cc1@email.de', 'cc2@email.de'],
            bcc:     ['bcc1@email.de', 'bcc2@email.de'],
            subject: isHtml ? 'Body with HTML and CSS3' : 'Body with plain text',
            body:    getBody(isHtml),
            isHtml:  isHtml
        });
    }


    function getBody(isHtml) {
        var css = [
            '<style>',
                '.ribbon p {',
                    'color: white;',
                    'font-family: Helvetica;',
                    'font-size: 17px;',
                    'font-weight: bold;',
                    'line-height: 60px;',
                    'text-align: center;',
                    'text-shadow: 0 2px 0 #83ac17;',
                    'width: 100%;',
                '}',
                '#ribbon {',
                    'top: 15px;',
                    'position: relative;',
                    'display: block;',
                    'margin: 0 auto;',
                    'height: 60px;',
                    'width: 250px;',
                    'background-color: #a5cc39;',
                '}',
                '.ribbon:before, .ribbon:after {',
                    'content: " ";',
                    'height: 0px;',
                    'position: absolute;',
                    'top:10px;',
                    'z-index: -1;',
                    'border-bottom: 30px solid #94bd28;',
                    'border-top: 30px solid #94bd28;',
                '}',
                '.ribbon:before {',
                    'border-left: 15px solid transparent;',
                    'border-right: 15px solid #94bd28;',
                    'left:-20px;',
                '}',
                '.ribbon:after {',
                    'border-left: 15px solid #94bd28;',
                    'border-right: 15px solid transparent;',
                    'right: -20px;',
                '}',
                '.sub-curls {',
                    'position: absolute;',
                    'bottom: -15px;',
                    'height: 15px;',
                    'width: 100%;',
                '}',
                '.sub-curls:before {',
                    'content: " ";',
                    'position: absolute;',
                    'left: 0;',
                    'border-left: 10px solid transparent;',
                    'border-top: 10px solid #729b06;',
                '}',
                '.sub-curls:after {',
                    'content: " ";',
                    'position: absolute;',
                    'right: 0;',
                    'border-right: 10px solid transparent;',
                    'border-top: 10px solid #729b06;',
                '}',
            '</style>'
        ];

        var html = [
            '<div id="ribbon" class="ribbon">',
                '<p><b>Simple Ribbon with CSS3</b></p>',
                '<div class="sub-curls"></div>',
            '</div>'
        ];

        if (!isHtml) {
            return "Hello,\n\nthis is just a plain text email body!";
        }

        return css.concat(html);
   }

   