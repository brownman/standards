// Generated by CoffeeScript 1.3.3
(function() {

  require.config({
    paths: {
      jquery: 'lib/jquery',
      underscore: 'lib/underscore',
      backbone: 'lib/backbone',
      marionette: 'lib/backbone.marionette',
      app: 'app'
    },
    shim: {
      'backbone': {
        deps: ['jquery', 'underscore'],
        exports: 'Backbone'
      },
      'marionette': {
        deps: ['backbone'],
        exports: 'Marionette'
      }
    }
  });

  require(['jquery', 'app'], function($) {
    return $(function() {
      var app;
      app = new StandardsApp;
      return app.initialize();
    });
  });

}).call(this);
