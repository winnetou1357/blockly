/**
 * Complex Bodies GDL Blocks
 */

'use strict';

goog.provide('Blockly.GDL.ComplexBodies');

goog.require('Blockly.GDL');

/**
 * GDL custom code blocks.
 */

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
    {
        "type": "gdl_3d_prism",
        "message0": "prism height %1 base %2",
        "args0": [
            {
                "type": "input_value",
                "name": "H",
                "check": "Number"
            }, {
                "type": "input_value",
                "name": "COORDS",
                "check": "Array"
            }
        ],
        "inputsInline": false,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 90,
        "tooltip": "",
        "helpUrl": ""
    }, {
        "type": "gdl_2d_coordinate",
        "message0": "x %1 y %2",
        "args0": [
            {
                "type": "input_value",
                "name": "X",
                "check": "Number"
            }, {
                "type": "input_value",
                "name": "Y",
                "check": "Number"
            }
        ],
        "inputsInline": true,
        "output": "GDL2DCoordinate",
        "colour": 90,
        "tooltip": "",
        "helpUrl": ""
    }
]);

/**
 * Javascript defeinitions
 */


Blockly.GDL['lists_create_with'] = function (block) {
    // Create a list with any number of elements of any type.
    var elements = new Array(block.itemCount_);
    for (var i = 0; i < block.itemCount_; i++) {
        elements[i] = Blockly.GDL.valueToCode(block, 'ADD' + i,
            Blockly.GDL.ORDER_COMMA) || 'null';
    }
    var code = elements.join(Blockly.GDL.CODE_COMMA_SPACE);
    return [code, Blockly.GDL.ORDER_ATOMIC];
};


Blockly.GDL['gdl_3d_prism'] = function (block) {
    var value_h = Blockly.GDL._numValueToCode(block, 'H', Blockly.GDL.ORDER_COMMA);

    var coordinate_block_list = block.inputList[1].connection.targetBlock();
    var coordinate_count = 0;

    if (coordinate_block_list) {
        coordinate_count = coordinate_block_list.itemCount_;
    }

    var command = 'prism' + Blockly.GDL.CODE_SPACE +
                  coordinate_count + Blockly.GDL.CODE_COMMA_SPACE +
                  value_h + Blockly.GDL.CODE_COMMA_SPACE +
                  Blockly.GDL.valueToCode (block, 'COORDS', Blockly.GDL.ORDER_COMMA);
    
    return command;
};


Blockly.GDL['gdl_2d_coordinate'] = function (block) {
    var value_x = Blockly.GDL._numValueToCode(block, 'X', Blockly.GDL.ORDER_COMMA);
    var value_y = Blockly.GDL._numValueToCode(block, 'y', Blockly.GDL.ORDER_COMMA);
    
    var code = value_x + Blockly.GDL.CODE_COMMA_SPACE +
                  value_y;
    return [code, Blockly.GDL.ORDER_ATOMIC];
};