define (require) ->

  # Vendor Libs
  $ = require 'jquery'
  _ = require 'underscore'
  Backbone = require 'backbone'
  Marionette = require 'marionette'

  class NavBarView extends Backbone.Marionette.ItemView
    template: require 'jade!templates/navbar'
    events:
      'click .brand': 'clickedHome'
      'click .back': 'clickedHome'
      'click .settings': 'clickedSettings'
      'click .moveForward': 'clickedMoveForward'
      'click .moveBackward': 'clickedMoveBackward'
    initialize: ->
      app.vent.on 'scroll:window', @addDropShadow, @
      app.vent.on 'app:changeOffset', @toggleForwardArrow, @
    addDropShadow: ->
      if window.pageYOffset > 0 then @$el.children().addClass 'nav-drop-shadow'
      else @$el.children().removeClass 'nav-drop-shadow'
    clickedHome: (e) ->
      e.preventDefault()
      app.vent.trigger 'home:clicked'
    clickedSettings: (e) ->
      e.preventDefault()
      app.vent.trigger 'settings:clicked'
    clickedMoveForward: ->
      app.vent.trigger 'app:moveForward'
    clickedMoveBackward: ->
      app.vent.trigger 'app:moveBackward'
    showArrows: ->
      @$('.arrow').each -> $(@).show()
      if app.offset is 0 then $('.moveForward').hide()
    hideArrows: -> @$('.arrow').each -> $(@).hide()
    toggleForwardArrow: ->
      if app.offset is 0 then $('.moveForward').hide()
      else $('.moveForward').show()
    showBackButton: -> @$('.back').show()
    hideBackButton: -> @$('.back').hide()
