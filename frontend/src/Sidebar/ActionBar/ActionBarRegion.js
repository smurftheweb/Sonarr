var Marionette = require('marionette');
var $ = require('jquery');

var region = Marionette.Region.extend({
  el: '#actionbar-region',

  onShow() {
    $('body').addClass('actionbar-visible');
  },

  onDestroy() {
    $('body').removeClass('actionbar-visible actionbar-extended');
  }
});

module.exports = region;
