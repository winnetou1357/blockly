/**
 * Math definition GDL Blocks
 */

'use strict';

goog.provide('Blockly.GDL.Math');

goog.require('Blockly.GDL');

/**
 * GDL custom code blocks.
 */

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
    {
        "type": "gdl_math_compare",
        "message0": "%1 %2 %3",
        "args0": [
          {
            "type": "input_value",
            "name": "A",
            "check": "Number"
          },
          {
            "type": "field_dropdown",
            "name": "OP",
            "options": [
              ["=", "EQUAL"],
              ["<", "SMALLER"],
              [">", "BIGGER"],
              ["<=", "SMALLEQ"],
              [">=", "BIGEQ"],
              ["<>", "NOTEQ"]
            ]
          },
          {
            "type": "input_value",
            "name": "B",
            "check": "Number"
          }
        ],
        "inputsInline": true,
        "output": "Number",
        "colour": 190,
    }
]);

/**
 * Javascript defeinitions
 */

Blockly.GDL['math_number'] = function (block) {
    var value = parseFloat(block.getFieldValue('NUM'));
    var order = value >= 0 ? Blockly.GDL.ORDER_ATOMIC
        : Blockly.GDL.ORDER_UNARY_NEGATION;
    return [value, order];
};

Blockly.GDL['math_arithmetic'] = function (block) {
    var OPERATORS = {
        'ADD': ['+', Blockly.GDL.ORDER_ADD],
        'MINUS': ['-', Blockly.GDL.ORDER_SUBTRACT],
        'MULTIPLY': ['*', Blockly.GDL.ORDER_MULTIPLY],
        'DIVIDE': ['/', Blockly.GDL.ORDER_DIVIDE],
        'MODULO': ['%', Blockly.GDL.ORDER_MODULO],
        'POWER': ['^', Blockly.GDL.ORDER_POWER]
    };

    var [op, order] = OPERATORS[block.getFieldValue('OP')];
    var argA = Blockly.GDL._numValueToCode(block, 'A', order);
    var argB = Blockly.GDL._numValueToCode(block, 'B', order);

    var code = argA + Blockly.GDL.CODE_SPACE + op + Blockly.GDL.CODE_SPACE + argB;
    return [code, order];
};

Blockly.GDL['gdl_math_compare'] = function (block) {
    var OPERATORS = {
        'EQUAL': ['=', Blockly.GDL.ORDER_RELATION],
        'SMALLER': ['<', Blockly.GDL.ORDER_RELATION],
        'BIGGER': ['>', Blockly.GDL.ORDER_RELATION],
        'SMALLEQ': ['<=', Blockly.GDL.ORDER_RELATION],
        'BIGEQ': ['>=', Blockly.GDL.ORDER_RELATION],
        'NOTEQ': ['<>', Blockly.GDL.ORDER_RELATION]
    };

    var [op, order] = OPERATORS[block.getFieldValue('OP')];
    var argA = Blockly.GDL._numValueToCode(block, 'A', order);
    var argB = Blockly.GDL._numValueToCode(block, 'B', order);

    var code = argA + Blockly.GDL.CODE_SPACE + op + Blockly.GDL.CODE_SPACE + argB;
    return [code, order];
};

