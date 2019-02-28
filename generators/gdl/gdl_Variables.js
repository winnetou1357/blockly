/**
 * Varibale GDL Blocks
 */

'use strict';

goog.provide('Blockly.GDL.Variables');

goog.require('Blockly.GDL');

/**
 * GDL custom code blocks.
 */

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
    {
        "type": "gdl_set_variable",
        "message0": "%1 = %2",
        "args0": [
            {
                "type": "field_variable",
                "name": "VAR",
                "variable": "myVariable"
            },
            {
                "type": "input_value",
                "name": "VALUE"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 0,
        "tooltip": "",
        "helpUrl": ""
    },
    // Block for variable getter.
    {
        "type": "gdl_get_variable",
        "message0": "%1",
        "args0": [
        {    // Beginning of the field variable dropdown
            "type": "field_variable",
            "name": "VAR",    // Static name of the field
            "variable": "myVariable"   // Given at runtime
        }    // End of the field variable dropdown
        ],
        "output": null,    // Null means the return value can be of any type
        "colour": 0
    }
]);

/**
 * Javascript defeinitions
 */


Blockly.GDL['gdl_set_variable'] = function (block) {
    var actVar = Blockly.GDL.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var actVarVal = block.inputList[0].connection.targetBlock();
    var code = actVar + " = " + actVarVal + Blockly.GDL.CODE_NEWLINE;

    return code;
};

Blockly.GDL['gdl_get_variable'] = function (block) {
    var actVar = Blockly.GDL.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);

    return actVar;
};