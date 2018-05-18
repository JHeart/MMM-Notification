
var NodeHelper = require("node_helper");
var remote = require('electron').remote;
var sender = remote.getGlobal('sender');
module.exports = NodeHelper.create({

	// Override socketNotificationReceived method.

	/* socketNotificationReceived(notification, payload)
	 * This method is called when a socket notification arrives.
	 *
	 * argument notification string - The identifier of the noitication.
	 * argument payload mixed - The payload of the notification.
	 */
    start:function () {
        console.log("JHeart-module helper startted ...");
    },


	socketNotificationReceived: function(notification, payload) {
		if (notification === "{{MODULE_NAME}}-NOTIFICATION_TEST") {
			console.log("Working notification system. Notification:", notification, "payload: ", payload);
			// Send notification
			this.sendNotificationTest(this.anotherFunction()); //Is possible send objects :)
		}
	},
/*
	// Example function send notification test
	sendNotificationTest: function(payload) {
		//this.sendSocketNotification("{{MODULE_NAME}}-NOTIFICATION_TEST", payload);
		var self = this;

        sender.on('data',function(data){
            self.sendSocketNotification("noti1","noti1");
            console.log("message111111111111111111111111");
            console.log(data.package);

            var strText = data.text+"";
            var substringText = strText.substr(0,200)+" ...";
            //var notiSms = document.getElementById('noti-sms');
            var notiKakao = document.getElementById('noti-kakao');

            /!** KAKAO *!/
        else if(data.package === "com.kakao.talk") {
                console.log("kakao!!!!!!!!!!!!!"+data.title+":"+data.text);
                notiKakao.innerHTML = "사용자:"+data.title + ", 내용:"+substringText;
                if(responsiveVoice.voiceSupport()) {
                    responsiveVoice.speak("카카오톡이 전송되었습니다. 사용자."+data.title,"Korean Female");
                }
            }
        });


	},
	*/

/*	// this you can create extra routes for your module
	extraRoutes: function() {
		var self = this;
		this.expressApp.get("/{{MODULE_NAME}}/extra_route", function(req, res) {
			// call another function
			values = self.anotherFunction();
			res.send(values);
		});
	},*/






});
