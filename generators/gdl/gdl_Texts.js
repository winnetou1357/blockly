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
    }
]);

/**
 * Javascript defeinitions
 */

Blockly.GDL['gdl_text'] = function (block) {
    var quotedText = Blockly.GDL.quote_(block.getFieldValue('TEXT'));
    return [quotedText, Blockly.GDL.ORDER_ATOMIC];
};
