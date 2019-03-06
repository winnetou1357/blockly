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
        "extensions":["gdl_math_op_tooltip"], 
        "inputsInline": true,
        "output": "Number",
        "colour": "#e056fd",
    },{
        "type": "gdl_math_operator",
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
              ["&", "AND"],
              ["|", "OR"],
              ["@", "EXOR"]
            ]
          },
          {
            "type": "input_value",
            "name": "B",
            "check": "Number"
          }
        ],
        "extensions":["gdl_math_op_tooltip"], 
        "inputsInline": true,
        "output": "Number",
        "colour": "#e056fd",
    }, {
        "type": "gdl_math_abs",
        "message0": "abs(%1)",
        "args0": [
            {
                "type": "input_value",
                "name": "A"
            }
        ],
        "output": "Number",
        "colour": "#e056fd",
        "tooltip": "",
        "helpUrl": ""
    }, {
        "type": "gdl_math_sqr",
        "message0": "sqr(%1)",
        "args0": [
            {
                "type": "input_value",
                "name": "A"
            }
        ],
        "output": "Number",
        "colour": "#e056fd",
        "tooltip": "",
        "helpUrl": ""
    }, {
        "type": "gdl_math_sin",
        "message0": "sin(%1)",
        "args0": [
            {
                "type": "input_value",
                "name": "A"
            }
        ],
        "output": "Number",
        "colour": "#e056fd",
        "tooltip": "",
        "helpUrl": ""
    }, {
        "type": "gdl_math_cos",
        "message0": "cos(%1)",
        "args0": [
            {
                "type": "input_value",
                "name": "A"
            }
        ],
        "output": "Number",
        "colour": "#e056fd",
        "tooltip": "",
        "helpUrl": ""
    }, {
        "type": "gdl_math_tan",
        "message0": "tan(%1)",
        "args0": [
            {
                "type": "input_value",
                "name": "A"
            }
        ],
        "output": "Number",
        "colour": "#e056fd",
        "tooltip": "",
        "helpUrl": ""
    }
]);

Blockly.GDL.Math.TOOLTIPS_BY_OP = {  
    // math_compare
    'EQUAL': 'Equals with',
    'SMALLER': 'Smaller than',
    'BIGGER': 'Bigger than',
    'SMALLEQ': 'Smaller than or equals',
    'BIGEQ': 'Bigger than or equals',
    'NOTEQ': 'Not equals',
  
    // math_operator
    'AND': 'AND: both the inputs are true',
    'OR': 'OR: at least 1 input is true',
    'EXOR': 'EXOR: exactly 1 input is true'
  };

Blockly.Extensions.register('gdl_math_op_tooltip',
  Blockly.Extensions.buildTooltipForDropdown(
      'OP', Blockly.GDL.Math.TOOLTIPS_BY_OP));

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

Blockly.GDL['gdl_math_operator'] = function (block) {
    var OPERATORS = {
        'AND': ['&', Blockly.GDL.ORDER_AND],
        'OR': ['|', Blockly.GDL.ORDER_OR],
        'EXOR': ['@', Blockly.GDL.ORDER_EXOR]
    };

    var [op, order] = OPERATORS[block.getFieldValue('OP')];
    var argA = Blockly.GDL._numValueToCode(block, 'A', order);
    var argB = Blockly.GDL._numValueToCode(block, 'B', order);

    var code = argA + Blockly.GDL.CODE_SPACE + op + Blockly.GDL.CODE_SPACE + argB;
    return [code, order];
};

Blockly.GDL['gdl_math_abs'] = function (block) {
    var order = Blockly.GDL.ORDER_ATOMIC;
    var value_abs = Blockly.GDL._numValueToCode(block, 'A', Blockly.GDL.ORDER_NONE);

    var code = 'abs(' + value_abs + ')';
    return [code, order];
};

Blockly.GDL['gdl_math_sqr'] = function (block) {
    var order = Blockly.GDL.ORDER_ATOMIC;
    var value_sqr = Blockly.GDL._numValueToCode(block, 'A', Blockly.GDL.ORDER_NONE);

    var code = 'sqr(' + value_sqr + ')';
    return [code, order];
};

Blockly.GDL['gdl_math_sin'] = function (block) {
    var order = Blockly.GDL.ORDER_ATOMIC;
    var value_sin = Blockly.GDL._numValueToCode(block, 'A', Blockly.GDL.ORDER_NONE);

    var code = 'sin(' + value_sin + ')';
    return [code, order];
};

Blockly.GDL['gdl_math_cos'] = function (block) {
    var order = Blockly.GDL.ORDER_ATOMIC;
    var value_cos = Blockly.GDL._numValueToCode(block, 'A', Blockly.GDL.ORDER_NONE);

    var code = 'cos(' + value_cos + ')';
    return [code, order];
};

Blockly.GDL['gdl_math_tan'] = function (block) {
    var order = Blockly.GDL.ORDER_ATOMIC;
    var value_tan = Blockly.GDL._numValueToCode(block, 'A', Blockly.GDL.ORDER_NONE);

    var code = 'tan(' + value_tan + ')';
    return [code, order];
};