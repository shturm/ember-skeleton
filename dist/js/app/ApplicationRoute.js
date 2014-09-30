(function() {
  App.ApplicationRoute = Em.Route.extend({
    model: function() {
      return ['one', 'two', 'three', 'four'];
    }
  });

}).call(this);
