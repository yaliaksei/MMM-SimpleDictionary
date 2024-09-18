/* MagicMirror²
 * Module: MMM-SimpleDictionary
 *
 * By Aliaksei Sery
 * MIT Licensed.
 */
Module.register("MMM-SimpleDictionary", {
	// Default module config.
	defaults: {
		//update every 3 minutes
		updateInterval: 180000,
		//fade speed
		fadeSpeed: 4000,
		//initial load delay
		initialLoadDelay: 0,
		//retry delay
		retryDelay: 2500,
		text: "Default translation",
		textLimit: 300, // characters limit
	  },

	getHeader: function() {
		return "English-Belarussian Translation"
	},

	start: function () {
		Log.info("Starting module: " + this.name);
	/*
		// Schedule update timer.
		setInterval(() => {
		  this.updateDom(this.config.fadeSpeed);
		}, this.config.updateInterval);
		*/

		var self = this;
		self.loaded = false;
		this.getTranslationData();
	  },

	trimText: function (text) {
		if (text.length > this.config.textLimit) {
			return text.substring(0, this.config.textLimit) + "...";
		}
		return text;
	},

	getDom: function() {
		if(this.loaded) {
			var wrapper = document.createElement("div");
			wrapper.innerHTML = 
				"<div class='translation bright'>" +
				this.trimText(this.result) +
				"</div>";
			return wrapper;
		} else {
			var wrapper = document.createElement("div");
			wrapper.innerHTML = "Not ready yet";
			return wrapper;
		}		
	},

	getTranslationData: function () {
        this.sendSocketNotification(this.config.api);
    },

    socketNotificationReceived: function(notification, payload) {
        if (notification === "ENBY_TRANSLATION_RESULT") {
            this.result = payload;
            this.loaded = true;
            this.updateDom();
        }
    }
});
