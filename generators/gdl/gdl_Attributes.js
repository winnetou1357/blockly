/**
 * Attributes GDL Blocks
 */

'use strict';

goog.provide('Blockly.GDL.Attributes');

goog.require('Blockly.GDL');

/**
 * GDL custom code blocks.
 */

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
    {
        "type": "gdl_pen",
        
        "message0": "pen %1",
        "args0": [
            {
                "type": "input_value",
                "name": "P",
                "align": "RIGHT"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 325,
        "tooltip": "",
        "helpUrl": ""
    }, {
        "type": "gdl_material",
        
        "message0": "material %1",
        "args0": [
            {
                "type": "input_value",
                "name": "M",
                "align": "RIGHT"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 325,
        "tooltip": "",
        "helpUrl": ""
    }, {
        "type": "gdl_resol",
        
        "message0": "resol %1",
        "args0": [
            {
                "type": "input_value",
                "name": "R",
                "align": "RIGHT"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 325,
        "tooltip": "",
        "helpUrl": ""
    }
]);

/**
 * Javascript defeinitions
 */

Blockly.GDL['gdl_pen'] = function (block) {
    var value_p = Blockly.GDL._numValueToCode(block, 'P', Blockly.GDL.ORDER_COMMA);

    var command = 'pen ' + value_p + Blockly.GDL.CODE_NEWLINE;
    return command;
};

Blockly.GDL['gdl_material'] = function (block) {
    var value_m = Blockly.GDL._numValueToCode(block, 'M', Blockly.GDL.ORDER_COMMA);

    var command = 'material ' + value_m + Blockly.GDL.CODE_NEWLINE;
    return command;
};

Blockly.GDL['gdl_resol'] = function (block) {
    var value_r = Blockly.GDL._numValueToCode(block, 'R', Blockly.GDL.ORDER_COMMA);

    var command = 'resol ' + value_r + Blockly.GDL.CODE_NEWLINE;
    return command;
};