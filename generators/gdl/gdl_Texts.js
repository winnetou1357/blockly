/**
 * Comments GDL Blocks
 */

'use strict';

goog.provide('Blockly.GDL.Texts');

goog.require('Blockly.GDL');

/**
 * GDL custom code blocks.
 */

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
    {
        "type": "gdl_text",
        "message0": "\"%1\"",
        "args0": [{
          "type": "field_input",
          "name": "TEXT",
          "text": ""
        }],
        "output": "String",
        "colour": 30,
    },{
        "type": "gdl_single_comment",
        "message0": "!%1",
        "args0": [{
          "type": "field_input",
          "name": "TEXT",
          "text": "comment",
          //"class": "commentStyle"
        }],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 30,
    }
]);

/**
 * Javascript defeinitions
 */

Blockly.GDL['gdl_text'] = function (block) {
    var quotedText = Blockly.GDL.quote_(block.getFieldValue('TEXT'));
    return [quotedText, Blockly.GDL.ORDER_ATOMIC];
};

Blockly.GDL['gdl_single_comment'] = function (block) {
    var text = block.getFieldValue('TEXT');
    var comment = '! ' + text;
    return comment;
};
