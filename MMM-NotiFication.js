
Module.register("MMM-NotiFication", {
	defaults: {
		updateInterval: 60000,
		retryDelay: 5000
	},


	requiresVersion: "2.1.0", // Required version of MagicMirror

	start: function() {
		var self = this;
		var dataRequest = null;
		var dataNotification = null;

		//Flag for check if module is loaded
		this.loaded = false;

		// Schedule update timer.
		//this.getData();
	},
/*


	getData: function() {
		var self = this;

	},
*/


	getDom: function() {
		var self = this;

		// create element wrapper for show into the module
		var wrapper = document.createElement("div");
    	var span = document.createElement("span");
    	span.innerHTML = "Notification";
        wrapper.appendChild(span);

    	var dataTable = document.createElement("table");

        var notitr = document.createElement("tr");
        var menu1td = document.createElement("td");
        menu1td.innerHTML = "1";
        var menu1td_data = document.createElement("td");
        var menu1td_text = document.createElement("p");
        //menu1td_text.className("noti-call");
        menu1td_data.appendChild(menu1td_text);

        notitr.appendChild(menu1td);
        notitr.appendChild(menu1td_data);

        dataTable.appendChild(notitr);

        var notitr2 = document.createElement("tr");
        var menu2td = document.createElement("td");
        menu2td.innerHTML = "2";
        var menu2td_data = document.createElement("td");
        var menu2td_text = document.createElement("p");
        //menu2td_text.className("noti-kakao");
        menu2td_data.appendChild(menu2td_text)

        notitr2.appendChild(menu2td);
        notitr2.appendChild(menu2td_data);


        dataTable.appendChild(notitr2);

        wrapper.appendChild(dataTable);


		return wrapper;
	},

/*	getScripts: function() {
		return [];
	},

	getStyles: function () {
		return [
			"{{MODULE_NAME}}.css",
		];
	},*/

/*
	processData: function(data) {
		var self = this;
		this.dataRequest = data;
		if (this.loaded === false) { self.updateDom(self.config.animationSpeed) ; }
		this.loaded = true;

		// the data if load
		// send notification to helper
		this.sendSocketNotification("{{MODULE_NAME}}-NOTIFICATION_TEST", data);
	},*/

	// socketNotificationReceived from helper
	socketNotificationReceived: function (notification, payload) {

		if(notification == "noti1"){
			console.log("noti1");
		}
		if(notification === "{{MODULE_NAME}}-NOTIFICATION_TEST") {
			// set dataNotification
			this.dataNotification = payload;
			this.updateDom();
		}

	},
});
