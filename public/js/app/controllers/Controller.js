define(['App', 'backbone', 'marionette', 'views/WelcomeView', 'views/HeaderView'],
    function (App, Backbone, Marionette, WelcomeView, HeaderView) {
    return Backbone.Marionette.Controller.extend({
        initialize:function (options) {
            App.rootLayout.headerRegion.show(new HeaderView());
        },
        //gets mapped to in AppRouter's appRoutes
        index:function () {
            App.rootLayout.mainRegion.show(new WelcomeView());
        }
    });
});