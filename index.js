var fs = require('fs');
var path = require('path');
var Mustache = require('mustache');

var licenseNames = {
  by: 'Attribution',
  'by-nd': 'Attribution-NoDerivatives',
  'by-sa': 'Attribution-ShareAlike',
  'by-nc': 'Attribution-NonCommercial',
  'by-nc-nd': 'Attribution-NonCommercial-NoDerivatives',
  'by-nc-sa': 'Attribution-NonCommercial-ShareAlike'
};

module.exports = {
  blocks: {
    creativecommons: {
      process: function(block) {
        var type = block.kwargs.type || 'by';
        var iconSize = block.kwargs.iconSize || 'normal';
        var iconOnly = block.kwargs.iconOnly === 'true';
        if (!licenseNames[type]) {
          return 'Invalid license type';
        }
        var template = fs.readFileSync(path.join(__dirname, 'template.mustache'), 'utf8');
        return Mustache.render(template, {
          type: type,
          name: licenseNames[type],
          iconSize: iconSize === 'compact' ? '80x15' : '88x31',
          iconOnly: iconOnly
        });
      }
    }
  }
};
