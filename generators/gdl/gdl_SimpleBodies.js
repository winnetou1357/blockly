/**
 * Simple Body GDL Blocks
 */

'use strict';

goog.provide('Blockly.GDL.SimpleBodies');

goog.require('Blockly.GDL');

/**
 * GDL custom code blocks.
 */

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
    {
        "type": "gdl_3d_block",
        "message0": "block width %1 depth %2 height %3",
        "args0": [
            {
                "type": "input_value",
                "name": "X",
                "check": "Number",
                "align": "RIGHT"
            },
            {
                "type": "input_value",
                "name": "Y",
                "check": "Number",
                "align": "RIGHT"
            },
            {
                "type": "input_value",
                "name": "Z",
                "check": "Number",
                "align": "RIGHT"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#826453",
        "tooltip": "",
        "helpUrl": ""
    }, {
        "type": "gdl_3d_sphere",
        "message0": "sphere radius %1",
        "args0": [
            {
                "type": "input_value",
                "name": "R"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#826453",
        "tooltip": "",
        "helpUrl": ""
    }, {
        "type": "gdl_3d_cylind",
        "message0": "cylind height %1 radius %2",
        "args0": [
            {
                "type": "input_value",
                "name": "H",
                "align": "RIGHT"
            },
            {
                "type": "input_value",
                "name": "R",
                "align": "RIGHT"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#826453",
        "tooltip": "",
        "helpUrl": ""
    }, {
        "type": "gdl_3d_ellipse",
        "message0": "ellips height %1 radius %2",
        "args0": [
            {
                "type": "input_value",
                "name": "H",
                "align": "RIGHT"
            },
            {
                "type": "input_value",
                "name": "R",
                "align": "RIGHT"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#826453",
        "tooltip": "",
        "helpUrl": ""
    }, {
        "type": "gdl_3d_cone",
        
        "message0": "cone        height %1 bottom radius %2 top radius %3",
        "args0": [
            {
                "type": "input_value",
                "name": "H",
                "align": "RIGHT"
            },
            {
                "type": "input_value",
                "name": "R_BOTTOM",
                "align": "RIGHT"
            },
            {
                "type": "input_value",
                "name": "R_TOP",
                "align": "RIGHT"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#826453",
        "tooltip": "",
        "helpUrl": ""
    }
]);

/**
 * Javascript defeinitions
 */

Blockly.GDL['gdl_3d_block'] = function (block) {
    var value_x = Blockly.GDL._numValueToCode(block, 'X', Blockly.GDL.ORDER_COMMA);
    var value_y = Blockly.GDL._numValueToCode(block, 'Y', Blockly.GDL.ORDER_COMMA);
    var value_z = Blockly.GDL._numValueToCode(block, 'Z', Blockly.GDL.ORDER_COMMA);

    var command = 'block ' + value_x + Blockly.GDL.CODE_COMMA + value_y + Blockly.GDL.CODE_COMMA + value_z + Blockly.GDL.CODE_NEWLINE;
    return command;
};

Blockly.GDL['gdl_3d_sphere'] = function (block) {
    var value_radius = Blockly.GDL._numValueToCode(block, 'R', Blockly.GDL.ORDER_COMMA);

    var command = 'sphere ' + value_radius + Blockly.GDL.CODE_NEWLINE;
    return command;
};
Blockly.GDL['gdl_3d_cylind'] = function (block) {
    var value_height = Blockly.GDL._numValueToCode(block, 'H', Blockly.GDL.ORDER_COMMA);
    var value_radius = Blockly.GDL._numValueToCode(block, 'R', Blockly.GDL.ORDER_COMMA);

    var command = 'cylind ' + value_height + Blockly.GDL.CODE_COMMA + value_radius + Blockly.GDL.CODE_NEWLINE;
    return command;
};

Blockly.GDL['gdl_3d_ellipse'] = function (block) {
    var value_height = Blockly.GDL._numValueToCode(block, 'H', Blockly.GDL.ORDER_COMMA);
    var value_radius = Blockly.GDL._numValueToCode(block, 'R', Blockly.GDL.ORDER_COMMA);

    var command = 'ellips ' + value_height + Blockly.GDL.CODE_COMMA + value_radius + Blockly.GDL.CODE_NEWLINE;
    return command;
};

Blockly.GDL['gdl_3d_cone'] = function (block) {
    var value_h = Blockly.GDL._numValueToCode(block, 'H', Blockly.GDL.ORDER_COMMA);
    var value_r_bottom = Blockly.GDL._numValueToCode(block, 'R_BOTTOM', Blockly.GDL.ORDER_COMMA);
    var value_r_top = Blockly.GDL._numValueToCode(block, 'R_TOP', Blockly.GDL.ORDER_COMMA);

    var DEFAULT_ANGLE_BOTTOM = 90;
    var DEFAULT_ANGLE_TOP = 90;

    var command = 'cone ' + value_h + Blockly.GDL.CODE_COMMA + value_r_bottom + Blockly.GDL.CODE_COMMA + value_r_top + Blockly.GDL.CODE_COMMA +
        DEFAULT_ANGLE_BOTTOM + Blockly.GDL.CODE_COMMA + DEFAULT_ANGLE_TOP + Blockly.GDL.CODE_NEWLINE;
    return command;
};
