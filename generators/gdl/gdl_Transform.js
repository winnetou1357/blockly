/**
 * Transformation GDL Blocks
 */

'use strict';

goog.provide('Blockly.GDL.Transform');

goog.require('Blockly.GDL');

/**
 * GDL custom code blocks.
 */

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
    {
        "type": "gdl_3d_addx",
        
        "message0": "addx %1",
        "args0": [
            {
                "type": "input_value",
                "name": "X"
            }
        ],
        "message1": "%1",
        "args1": [
            {
                "type": "input_statement",
                "name": "DO0"
            }
        ],
        "message2": "del 1",
        "args2": [],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#7ed6df",
        "tooltip": "",
        "helpUrl": ""
    }, {
        "type": "gdl_3d_addy",
        
        "message0": "addy %1",
        "args0": [
            {
                "type": "input_value",
                "name": "Y"
            }
        ],
        "message1": "%1",
        "args1": [
            {
                "type": "input_statement",
                "name": "DO0"
            }
        ],
        "message2": "del 1",
        "args2": [],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#7ed6df",
        "tooltip": "",
        "helpUrl": ""
    }, {
        "type": "gdl_3d_addz",
        
        "message0": "addz %1",
        "args0": [
            {
                "type": "input_value",
                "name": "Z"
            }
        ],
        "message1": "%1",
        "args1": [
            {
                "type": "input_statement",
                "name": "DO0"
            }
        ],
        "message2": "del 1",
        "args2": [],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#7ed6df",
        "tooltip": "",
        "helpUrl": ""
    }, {
        "type": "gdl_3d_rotx",
        
        "message0": "rotx %1",
        "args0": [
            {
                "type": "input_value",
                "name": "X"
            }
        ],
        "message1": "%1",
        "args1": [
            {
                "type": "input_statement",
                "name": "DO0"
            }
        ],
        "message2": "del 1",
        "args2": [],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#7ed6df",
        "tooltip": "",
        "helpUrl": ""
    }, {
        "type": "gdl_3d_roty",
        
        "message0": "roty %1",
        "args0": [
            {
                "type": "input_value",
                "name": "Y"
            }
        ],
        "message1": "%1",
        "args1": [
            {
                "type": "input_statement",
                "name": "DO0"
            }
        ],
        "message2": "del 1",
        "args2": [],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#7ed6df",
        "tooltip": "",
        "helpUrl": ""
    }, {
        "type": "gdl_3d_rotz",
        
        "message0": "rotz %1",
        "args0": [
            {
                "type": "input_value",
                "name": "Z"
            }
        ],
        "message1": "%1",
        "args1": [
            {
                "type": "input_statement",
                "name": "DO0"
            }
        ],
        "message2": "del 1",
        "args2": [],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#7ed6df",
        "tooltip": "",
        "helpUrl": ""
    }, {
        "type": "gdl_3d_mulx",
        
        "message0": "mulx %1",
        "args0": [
            {
                "type": "input_value",
                "name": "X"
            }
        ],
        "message1": "%1",
        "args1": [
            {
                "type": "input_statement",
                "name": "DO0"
            }
        ],
        "message2": "del 1",
        "args2": [],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#7ed6df",
        "tooltip": "",
        "helpUrl": ""
    }, {
        "type": "gdl_3d_muly",
        
        "message0": "muly %1",
        "args0": [
            {
                "type": "input_value",
                "name": "Y"
            }
        ],
        "message1": "%1",
        "args1": [
            {
                "type": "input_statement",
                "name": "DO0"
            }
        ],
        "message2": "del 1",
        "args2": [],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#7ed6df",
        "tooltip": "",
        "helpUrl": ""
    }, {
        "type": "gdl_3d_mulz",
        
        "message0": "mulz %1",
        "args0": [
            {
                "type": "input_value",
                "name": "Z"
            }
        ],
        "message1": "%1",
        "args1": [
            {
                "type": "input_statement",
                "name": "DO0"
            }
        ],
        "message2": "del 1",
        "args2": [],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#7ed6df",
        "tooltip": "",
        "helpUrl": ""
    }
]);

/**
 * Javascript defeinitions
 */

Blockly.GDL['gdl_3d_addx'] = function (block) {
    var addValue = Blockly.GDL._numValueToCode(block, 'X', Blockly.GDL.ORDER_COMMA);
    var addCode = Blockly.GDL.statementToCode(block, 'DO0');

    var code = 'addx ' + addValue + Blockly.GDL.CODE_NEWLINE;
    code += addCode;
    code += 'del 1' + Blockly.GDL.CODE_NEWLINE;
    
    return code;
};

Blockly.GDL['gdl_3d_addy'] = function (block) {
    var addValue = Blockly.GDL._numValueToCode(block, 'Y', Blockly.GDL.ORDER_COMMA);
    var addCode = Blockly.GDL.statementToCode(block, 'DO0');

    var code = 'addy ' + addValue + Blockly.GDL.CODE_NEWLINE;
    code += addCode;
    code += 'del 1' + Blockly.GDL.CODE_NEWLINE;
    
    return code;
};

Blockly.GDL['gdl_3d_addz'] = function (block) {
    var addValue = Blockly.GDL._numValueToCode(block, 'Z', Blockly.GDL.ORDER_COMMA);
    var addCode = Blockly.GDL.statementToCode(block, 'DO0');

    var code = 'addz ' + addValue + Blockly.GDL.CODE_NEWLINE;
    code += addCode;
    code += 'del 1' + Blockly.GDL.CODE_NEWLINE;
    
    return code;
};

Blockly.GDL['gdl_3d_rotx'] = function (block) {
    var rotValue = Blockly.GDL._numValueToCode(block, 'X', Blockly.GDL.ORDER_COMMA);
    var rotCode = Blockly.GDL.statementToCode(block, 'DO0');

    var code = 'rotx ' + rotValue + Blockly.GDL.CODE_NEWLINE;
    code += rotCode;
    code += 'del 1' + Blockly.GDL.CODE_NEWLINE;
    
    return code;
};

Blockly.GDL['gdl_3d_roty'] = function (block) {
    var rotValue = Blockly.GDL._numValueToCode(block, 'Y', Blockly.GDL.ORDER_COMMA);
    var rotCode = Blockly.GDL.statementToCode(block, 'DO0');

    var code = 'roty ' + rotValue + Blockly.GDL.CODE_NEWLINE;
    code += rotCode;
    code += 'del 1' + Blockly.GDL.CODE_NEWLINE;
    
    return code;
};

Blockly.GDL['gdl_3d_rotz'] = function (block) {
    var rotValue = Blockly.GDL._numValueToCode(block, 'Z', Blockly.GDL.ORDER_COMMA);
    var rotCode = Blockly.GDL.statementToCode(block, 'DO0');

    var code = 'rotz ' + rotValue + Blockly.GDL.CODE_NEWLINE;
    code += rotCode;
    code += 'del 1' + Blockly.GDL.CODE_NEWLINE;
    
    return code;
};

Blockly.GDL['gdl_3d_mulx'] = function (block) {
    var mulValue = Blockly.GDL._numValueToCode(block, 'X', Blockly.GDL.ORDER_COMMA);
    var mulCode = Blockly.GDL.statementToCode(block, 'DO0');

    var code = 'mulx ' + mulValue + Blockly.GDL.CODE_NEWLINE;
    code += mulCode;
    code += 'del 1' + Blockly.GDL.CODE_NEWLINE;
    
    return code;
};

Blockly.GDL['gdl_3d_muly'] = function (block) {
    var mulValue = Blockly.GDL._numValueToCode(block, 'Y', Blockly.GDL.ORDER_COMMA);
    var mulCode = Blockly.GDL.statementToCode(block, 'DO0');

    var code = 'muly ' + mulValue + Blockly.GDL.CODE_NEWLINE;
    code += mulCode;
    code += 'del 1' + Blockly.GDL.CODE_NEWLINE;

    return code;
};

Blockly.GDL['gdl_3d_mulz'] = function (block) {
    var mulValue = Blockly.GDL._numValueToCode(block, 'Z', Blockly.GDL.ORDER_COMMA);
    var mulCode = Blockly.GDL.statementToCode(block, 'DO0');

    var code = 'mulz ' + mulValue + Blockly.GDL.CODE_NEWLINE;
    code += mulCode;
    code += 'del 1' + Blockly.GDL.CODE_NEWLINE;

    return code;
};
