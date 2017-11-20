// var Modeler = require('bpmn-js/lib/Modeler');

// var inherits = require('inherits');



module.exports = {
  __init__: [ 'paletteProvider' ],
  paletteProvider: [ 'type', require('./CustomPalette') ]
};

// function CustomModeler(options) {
//   Modeler.call(this, options);

//   this._customElements = [];
// }

// inherits(CustomModeler, Modeler);

// CustomModeler.prototype._modules = [].concat(
//   CustomModeler.prototype._modules,
//   [
//     require('.')
//   ]
// );

// module.exports = CustomModeler;
