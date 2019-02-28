/**
 * Control flow GDL Blocks
 */

'use strict';

goog.provide('Blockly.GDL.Controls');

goog.require('Blockly.GDL');

/**
Blockly.Extensions.register('gdl_for_variable',
  new function() {
  var block = this;
  var textInput = function() {
    var actVarName = Blockly.GDL.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  };
  var targetName = block.inputList[3].connection.targetBlock();
  targetName.setText(textInput);
  }
);
 */

/**
 * GDL custom code blocks.
 */

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
    {
        "type": "gdl_controls_if_el_end",
        "message0": "if %1 then",
        "args0": [
            {
                "type": "input_value",
                "name": "IF0"
            }
        ],
        "message1": "%1",
        "args1": [
            {
                "type": "input_statement",
                "name": "DO0"
            }
        ],
        "message2": "else",
        "args2": [],
        "message3": "%1",
        "args3": [
           {
                "type": "input_statement",
                "name": "ELSE"
            }
        ],
        "message4": "endif",
        "args4": [],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 225,
        "tooltip": "",
        "helpUrl": ""
    }, {
        "type": "gdl_controls_if_end",
        "message0": "if %1 then",
        "args0": [
            {
                "type": "input_value",
                "name": "IF0"
            }
        ],
        "message1": "%1",
        "args1": [
            {
                "type": "input_statement",
                "name": "DO0"
            }
        ],
        "message2": "endif",
        "args2": [],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 225,
        "tooltip": "",
        "helpUrl": ""
    }, {
        "type": "gdl_controls_for",
        "message0": "for %1 = %2 to %3",
        "args0": [
            {
                "type": "field_variable",
                "name": "VAR",
                "variable": "i"
            },
            {
                "type": "input_value",
                "name": "FROM"
            },
            {
                "type": "input_value",
                "name": "TO"
            }
        ],
        "message1": "%1",
        "args1": [
            {
                "type": "input_statement",
                "name": "DO0"
            }
        ],
        "message2": "next %1",
        "args2": [
            {
                "type": "field_label",
                "name": "NEXT"
            },
        ],
        //"extensions":["gdl_for_variable"], 
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 225,
        "tooltip": "",
        "helpUrl": ""
    }
]);



/**
 * Javascript defeinitions
 */

Blockly.GDL['gdl_controls_if_el_end'] = function (block) {
    var condition = Blockly.GDL.valueToCode(block, 'IF0', Blockly.GDL.ORDER_NONE) || '0';
    var thenCode = Blockly.GDL.statementToCode(block, 'DO0');
    var elseCode = block.getInput('ELSE') ? Blockly.GDL.statementToCode(block, 'ELSE') : null;

    var code = 'if ' + condition + ' then' + Blockly.GDL.CODE_NEWLINE;
    code += thenCode;
    if (elseCode) {
        code += 'else' + Blockly.GDL.CODE_NEWLINE;
        code += elseCode;
    }

    code += 'endif' + Blockly.GDL.CODE_NEWLINE;

    return code;
};

Blockly.GDL['gdl_controls_if_end'] = function (block) {
    var condition = Blockly.GDL.valueToCode(block, 'IF0', Blockly.GDL.ORDER_NONE) || '0';
    var thenCode = Blockly.GDL.statementToCode(block, 'DO0');

    var code = 'if ' + condition + ' then' + Blockly.GDL.CODE_NEWLINE;
    code += thenCode;
    code += 'endif' + Blockly.GDL.CODE_NEWLINE;

    return code;
};

Blockly.GDL['gdl_controls_for'] = function (block) {
    var actVar = Blockly.GDL.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var fromVar = Blockly.GDL.valueToCode(block, 'FROM', Blockly.GDL.ORDER_NONE) || '0';
    var toVar = Blockly.GDL.valueToCode(block, 'TO', Blockly.GDL.ORDER_NONE) || '0';
    var forCode = Blockly.GDL.statementToCode(block, 'DO0');

    var code = 'for ' + actVar + ' = ' + fromVar + ' to ' + toVar + Blockly.GDL.CODE_NEWLINE;
    code += forCode;
    code += 'next ' + actVar + Blockly.GDL.CODE_NEWLINE;

    return code;
};
