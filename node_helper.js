var NodeHelper = require('node_helper');

module.exports = NodeHelper.create({

  start: function () {
    console.log('MMM-SimpleDictionary helper started..');
  },

  getData: async function (url) {
    response = await fetch(url);
    const text = await response.text();
    this.sendSocketNotification('ENBY_TRANSLATION_RESULT', text);
  },

  //Subclass socketNotificationReceived received.
  socketNotificationReceived: function(payload) {
    this.getData(payload);
  }
});