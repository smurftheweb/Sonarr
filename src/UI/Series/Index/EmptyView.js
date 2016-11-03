var Marionette = require('marionette');

module.exports = Marionette.CompositeView.extend({
    template : 'Series/Index/EmptyTemplate',

    ui : {
        select: '#example-getting-started'
    },

    onRender : function() {
        console.log("Hello");
        var sel = this.ui.select;
        console.log(sel);
        sel.multiselect({
            'includeSelectAllOption': true,
            'selectAllText': 'All Series'
        });
    }
});