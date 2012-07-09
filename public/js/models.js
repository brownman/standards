// Generated by CoffeeScript 1.3.3
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(function(require) {
    var $, Backbone, Check, Checks, Marionette, Task, Tasks, User, _;
    $ = require('jquery');
    _ = require('underscore');
    Backbone = require('backbone');
    Marionette = require('marionette');
    User = (function(_super) {

      __extends(User, _super);

      function User() {
        return User.__super__.constructor.apply(this, arguments);
      }

      User.prototype.url = '/api/user/info';

      User.prototype.isSignedIn = function(yep, nope, context) {
        return this.fetch({
          success: $.proxy(yep, context),
          error: $.proxy(nope, context)
        });
      };

      User.prototype.signIn = function(e, p, onSucceed, onFail, context) {
        var _this = this;
        return $.ajax({
          url: '/api/sign-in',
          type: 'POST',
          dataType: 'json',
          data: {
            email: e,
            password: p
          },
          error: $.proxy(onFail, context),
          success: function(data) {
            _this.set(data);
            return onSucceed.call(context);
          },
          context: this
        });
      };

      User.prototype.signOut = function() {
        return $.ajax({
          url: '/api/sign-out',
          type: 'POST'
        }).done(function() {
          this.clear();
          return this.trigger('signed-out');
        });
      };

      return User;

    })(Backbone.Model);
    Task = (function(_super) {

      __extends(Task, _super);

      function Task() {
        return Task.__super__.constructor.apply(this, arguments);
      }

      return Task;

    })(Backbone.Model);
    Check = (function(_super) {

      __extends(Check, _super);

      function Check() {
        return Check.__super__.constructor.apply(this, arguments);
      }

      return Check;

    })(Backbone.Model);
    Tasks = (function(_super) {

      __extends(Tasks, _super);

      function Tasks() {
        return Tasks.__super__.constructor.apply(this, arguments);
      }

      Tasks.prototype.model = Task;

      Tasks.prototype.url = '/api/tasks';

      return Tasks;

    })(Backbone.Collection);
    Checks = (function(_super) {

      __extends(Checks, _super);

      function Checks() {
        return Checks.__super__.constructor.apply(this, arguments);
      }

      Checks.prototype.model = Check;

      return Checks;

    })(Backbone.Collection);
    return {
      User: User,
      Task: Task,
      Tasks: Tasks,
      Check: Check,
      Checks: Checks
    };
  });

}).call(this);
