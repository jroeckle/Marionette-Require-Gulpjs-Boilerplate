define([ 'marionette', 'text!templates/header.html'],
    function (Marionette, template) {
        //ItemView provides some default rendering logic
        return Marionette.ItemView.extend({
            template: _.template(template)
        });
    });