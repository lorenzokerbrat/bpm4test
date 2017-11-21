var Helper = require('../Helper');

Helper.addStyle('html, body { height: 100%; padding: 0; margin: 0; }');

Helper.addStyle('.icon-red { background: red !important; }');

var fs = require('fs');


var Modeler = require('bpmn-js/lib/Modeler');


describe('modeler / bpm4test version', function() {

  var diagram = fs.readFileSync(__dirname + '/diagram.bpmn', 'utf-8');


  function withModeler(config, fn) {

    return function(done) {

      var modeler = new Modeler(config);

      modeler.attachTo('body');

      modeler.importXML(diagram, function(err) {
        if (err) {
          done(err);
        }

        modeler.invoke(fn);

        done();
      });

    };
  }


  describe('just modeler', function() {

    function inject(fn) {
      return withModeler({}, fn);
    }


    it('should allow me to render a process', inject(function() {

    }));

  });

  // Changements sur la Palette principale
  describe('palette', function() {

    var paletteModule = require('../../lib/features/palette');

    function inject(fn) {

      var config = {
        additionalModules: [ paletteModule ]
      };

      return withModeler(config, fn);
    }

    it('should apply changes to the palette', inject(function() {

    }));

  });

  // Changements sur les Menus Pop-up
  describe('popup-menu', function() {

    var replaceMenuModule = require('../../lib/features/popup-menu');

    function inject(fn) {

      var config = {
        additionalModules: [ replaceMenuModule ]
      };

      return withModeler(config, fn);
    }

    it('should apply changes to pop-up menus', inject(function() {

    }));

  });

  // Changements sur le Context Pad
  describe('context-pad', function() {

    var contextPadModule = require('../../lib/features/context-pad');

    function inject(fn) {

      var config = {
        additionalModules: [ contextPadModule ]
      };

      return withModeler(config, fn);
    }

    it('should apply changes to context-pad', inject(function() {

    }));

  });

  // Combinaison
  describe.only('combined', function() {

    var paletteModule = require('../../lib/features/palette');
    var replaceMenuModule = require('../../lib/features/popup-menu');
    var contextPadModule = require('../../lib/features/context-pad');

    function inject(fn) {

      var config = {
        additionalModules: [
          paletteModule,
          replaceMenuModule,
          contextPadModule
        ]
      };

      return withModeler(config, fn);
    }

    it('should change bpmn modeler', inject(function() {

    }));

  });
});