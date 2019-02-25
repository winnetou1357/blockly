/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Helper functions for generating GDL for blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.GDL');

goog.require('Blockly.Generator');

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
        "colour": 270,
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
        "colour": 270,
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
        "colour": 270,
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
        "colour": 270,
        "tooltip": "",
        "helpUrl": ""
    }, {
        "type": "gdl_3d_cone",
        
        "message0": "cone    height %1 bottom radius %2 top radius %3",
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
        "colour": 270,
        "tooltip": "",
        "helpUrl": ""
    }, {
        "type": "gdl_controls_if",
        "message0": "if %1 then %2 %3 else %4 %5 endif",
        "args0": [
            {
                "type": "input_value",
                "name": "IF0"
            },
            {
                "type": "input_dummy",
            },
            {
                "type": "input_statement",
                "name": "DO0"
            },
            {
                "type": "input_dummy",
            },
            {
                "type": "input_statement",
                "name": "ELSE"
            }
        ],

        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 225,
        "tooltip": "",
        "helpUrl": ""
    }
]);

/**
 * GDL code generator.
 * @type {!Blockly.Generator}
 */
Blockly.GDL = new Blockly.Generator('GDL');

/**
 * List of illegal variable names.
 * This is not intended to be a security feature.  Blockly is 100% client-side,
 * so bypassing this list is trivial.  This is intended to prevent users from
 * accidentally clobbering a built-in object or function.
 * @private
 */
Blockly.GDL.addReservedWords(
    'IF,THEN,ELSE,FOR,TO,STEP,NEXT' +
    'PRINT' +
    'BLOCK'
);

/**
 * Order of operators
 * http://gdl.graphisoft.com/reference-guide/operators
 */
Blockly.GDL.ORDER_ATOMIC = 0;            // 0 "" ...

Blockly.GDL.ORDER_POWER = 1;
Blockly.GDL.ORDER_MULTIPLY = 2;
Blockly.GDL.ORDER_DIVIDE = Blockly.GDL.ORDER_MULTIPLY;
Blockly.GDL.ORDER_MODULO = Blockly.GDL.ORDER_MULTIPLY;
Blockly.GDL.ORDER_ADD = 3;
Blockly.GDL.ORDER_SUBTRACT = Blockly.GDL.ORDER_ADD;

Blockly.GDL.ORDER_COMMA = 998;          // , parameter separator
Blockly.GDL.ORDER_NONE = 999;           // 

/**
 * List of outer-inner pairings that do NOT require parentheses.
 * @type {!Array.<!Array.<number>>}
 */
Blockly.GDL.ORDER_OVERRIDES = [
];

/**
 * Repeatedly appearing code fragments.
 */
Blockly.GDL.CODE_COMMA = ', ';
Blockly.GDL.CODE_SPACE = ' ';
Blockly.GDL.CODE_NEWLINE = '\n';

/**
 * Initialise the database of variable names.
 * @param {!Blockly.Workspace} workspace Workspace to generate code from.
 */
Blockly.GDL.init = function (workspace) {
    // TODO ?
};

/**
 * Prepend the generated code with the variable definitions.
 * @param {string} code Generated code.
 * @return {string} Completed code.
 */
Blockly.GDL.finish = function (code) {
    // TODO
    return code
};

/**
 * Naked values are top-level blocks with outputs that aren't plugged into
 * anything.
 * @param {string} line Line of generated code.
 * @return {string} Legal line of code.
 */
Blockly.GDL.scrubNakedValue = function (line) {
    return line + Blockly.GDL.CODE_NEWLINE;
};

/**
 * Encode a string as a properly escaped GDL string, complete with quotes.
 * @param {string} string Text to encode.
 * @return {string} GDL string literal.
 * @private
 */
Blockly.GDL.quote_ = function (string) {
    // TODO escape sg?
    var QUOTE = '"';
    return QUOTE + string + QUOTE;
};

/**
 * Common tasks for generating GDL from blocks.
 * Handles comments for the specified block and any connected value blocks.
 * Calls any statements following this block.
 * @param {!Blockly.Block} block The current block.
 * @param {string} code The GDL code created for this block.
 * @return {string} GDL code with comments and subsequent blocks added.
 * @private
 */
Blockly.GDL.scrub_ = function (block, code) {
    var commentCode = '';
    // Only collect comments for blocks that aren't inline.
    if (!block.outputConnection || !block.outputConnection.targetConnection) {
        // Collect comment for this block.
        var comment = block.getCommentText();
        comment = Blockly.utils.wrap(comment, Blockly.GDL.COMMENT_WRAP - 3);
        if (comment) {
            if (block.getProcedureDef) {
                // Use double !! for procedure comments.
                commentCode += Blockly.GDL.prefixLines(comment + '\n', '!! ');
            } else {
                commentCode += Blockly.GDL.prefixLines(comment + '\n', '! ');
            }
        }
        // Collect comments for all value arguments.
        // Don't collect comments for nested statements.
        for (var i = 0; i < block.inputList.length; i++) {
            if (block.inputList[i].type == Blockly.INPUT_VALUE) {
                var childBlock = block.inputList[i].connection.targetBlock();
                if (childBlock) {
                    var comment = Blockly.GDL.allNestedComments(childBlock);
                    if (comment) {
                        commentCode += Blockly.GDL.prefixLines(comment, '! ');
                    }
                }
            }
        }
    }
    var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
    var nextCode = Blockly.GDL.blockToCode(nextBlock);
    return commentCode + code + nextCode;
};

Blockly.GDL._textValueToCode = function (block, field, order) {
    return Blockly.GDL.valueToCode(block, field, order) || '""';
}

Blockly.GDL._numValueToCode = function (block, field, order) {
    return Blockly.GDL.valueToCode(block, field, order) || '0';
}

Blockly.GDL['text_print'] = function (block) {
    var msg = Blockly.GDL._textValueToCode(block, 'TEXT', Blockly.GDL.ORDER_NONE);
    return 'print ' + msg + Blockly.GDL.CODE_NEWLINE;
};

Blockly.GDL['text'] = function (block) {
    var quotedText = Blockly.GDL.quote_(block.getFieldValue('TEXT'));
    return [quotedText, Blockly.GDL.ORDER_ATOMIC];
};

Blockly.GDL['math_number'] = function (block) {
    var value = parseFloat(block.getFieldValue('NUM'));
    var order = value >= 0 ? Blockly.GDL.ORDER_ATOMIC
        : Blockly.GDL.ORDER_UNARY_NEGATION;
    return [value, order];
};

Blockly.GDL['gdl_controls_if'] = function (block) {
    var condition = Blockly.GDL.valueToCode(block, 'IF0', Blockly.GDL.ORDER_NONE) || '0';
    var thenCode = Blockly.GDL.statementToCode(block, 'DO0');
    var elseCode = block.getInput('ELSE') ? Blockly.GDL.statementToCode(block, 'ELSE') : null;

    var code = 'if ' + condition + ' THEN' + Blockly.GDL.CODE_NEWLINE;
    code += thenCode;
    if (elseCode) {
        code += 'else' + Blockly.GDL.CODE_NEWLINE;
        code += elseCode + Blockly.GDL.CODE_NEWLINE;
    }

    code += 'endif' + Blockly.GDL.CODE_NEWLINE;

    return code;
};

Blockly.GDL['math_arithmetic'] = function (block) {
    var OPERATORS = {
        'ADD': ['+', Blockly.GDL.ORDER_ADD],
        'MINUS': ['-', Blockly.GDL.ORDER_SUBTRACT],
        'MULTIPLY': ['*', Blockly.GDL.ORDER_MULTIPLY],
        'DIVIDE': ['/', Blockly.GDL.ORDER_DIVIDE],
        'MODULO': ['%', Blockly.GDL.ORDER_MODULO],   // TODO
        'POWER': ['^', Blockly.GDL.ORDER_POWER]
    };

    var [op, order] = OPERATORS[block.getFieldValue('OP')];
    var argA = Blockly.GDL._numValueToCode(block, 'A', order);
    var argB = Blockly.GDL._numValueToCode(block, 'B', order);

    var code = argA + Blockly.GDL.CODE_SPACE + op + Blockly.GDL.CODE_SPACE + argB;
    return [code, order];
};

Blockly.GDL['gdl_3d_block'] = function (block) {
    // BLOCK command
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