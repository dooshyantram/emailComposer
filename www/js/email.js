 var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        app.pluginInitialize();
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement    = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement  = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
    // Initialize plugin
    pluginInitialize: function() {
        
        document.getElementById('gm-open').onclick      = app.openGmailClient;
        document.getElementById('plain').onclick        = app.openPlainDraft;
        document.getElementById('html').onclick         = app.openRichDraft;
        document.getElementById('camera').onclick       = app.openDraftWithImage;
    },
  
    // Open gmail client
    openGmailClient: function () {
       cordova.plugins.email.open({ app: 'gmail' }, showToast);
    },
    // Open draft with plain body
    openPlainDraft: function () {
        app.openDraft(false);
    },
    // Open draft with HTML body
    openRichDraft: function () {
        app.openDraft(true);
    },
    // Open draft
    openDraft: function (isHtml) {
        cordova.plugins.email.open({
            to:      'to@email.de',
            cc:      ['cc1@email.de', 'cc2@email.de'],
            bcc:     ['bcc1@email.de', 'bcc2@email.de'],
            subject: isHtml ? 'Body with HTML and CSS3' : 'Body with plain text',
            body:    app.getBody(isHtml),
            isHtml:  isHtml
        }, showToast);
    },

    // Tiny sweet helper which returns a HTML body
    getBody: function (isHtml) {
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
};




app.initialize();