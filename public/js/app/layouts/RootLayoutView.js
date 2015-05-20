define([ 'marionette'],
    function (Marionette) {
        //A LayoutView is a hybrid of an ItemView and a collection of Region objects. They are ideal for rendering application layouts with multiple sub-regions managed by specified region managers.
        return Marionette.LayoutView.extend({
            el: 'body'
        });
    });