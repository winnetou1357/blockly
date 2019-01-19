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
        "type": "gdl_3D_block",
        "message0": "BLOCK %1 szélesség %2 %3 mélység %4 %5 magasság %6 %7",
        "args0": [
            {
                "type": "input_dummy"
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "input_value",
                "name": "X",
                "check": "Number"
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "input_value",
                "name": "Y",
                "check": "Number"
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "input_value",
                "name": "Z",
                "check": "Number"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
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
 * Initialise the database of variable names.
 * @param {!Blockly.Workspace} workspace Workspace to generate code from.
 */
Blockly.GDL.init = function(workspace) {
    // TODO ?
};

/**
 * Prepend the generated code with the variable definitions.
 * @param {string} code Generated code.
 * @return {string} Completed code.
 */
Blockly.GDL.finish = function(code) {
    // TODO
    return code
};

/**
 * Naked values are top-level blocks with outputs that aren't plugged into
 * anything.
 * @param {string} line Line of generated code.
 * @return {string} Legal line of code.
 */
Blockly.GDL.scrubNakedValue = function(line) {
    return line + '\n';
};
  
/**
 * Encode a string as a properly escaped GDL string, complete with quotes.
 * @param {string} string Text to encode.
 * @return {string} GDL string literal.
 * @private
 */
Blockly.GDL.quote_ = function(string) {
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
Blockly.GDL.scrub_ = function(block, code) {
    // TODO
    return code;
};

Blockly.GDL['text_print'] = function(block) {
    // Print statement.
    var msg = Blockly.GDL.valueToCode(block, 'TEXT',
        Blockly.GDL.ORDER_NONE) || '""';
    return 'PRINT ' + msg + '\n';
};

Blockly.GDL['text'] = function(block) {
    // Text literal.
    var quotedText = Blockly.GDL.quote_(block.getFieldValue('TEXT'));
    return [quotedText, Blockly.GDL.ORDER_ATOMIC];
};

Blockly.GDL['math_number'] = function(block) {
    var value = parseFloat(block.getFieldValue('NUM'));
    var order = value >= 0 ? Blockly.GDL.ORDER_ATOMIC
                           : Blockly.GDL.ORDER_UNARY_NEGATION;
  return [value, order];
};

Blockly.GDL['math_arithmetic'] = function(block) {
    var OPERATORS = {
        'ADD': ['+', Blockly.GDL.ORDER_ADD],
        'MINUS': ['-', Blockly.GDL.ORDER_SUBTRACT],
        'MULTIPLY': ['*', Blockly.GDL.ORDER_MULTIPLY],
        'DIVIDE': ['/', Blockly.GDL.ORDER_DIVIDE],
        'MODULO': ['%', Blockly.GDL.ORDER_MODULO],   // TODO
        'POWER': ['^', Blockly.GDL.ORDER_POWER]
    };
    
    var [op, order] = OPERATORS[block.getFieldValue('OP')];
    var argA = Blockly.GDL.valueToCode(block, 'A', order) || '0';
    var argB = Blockly.GDL.valueToCode(block, 'B', order) || '0';

    var code = argA + ' ' + op + ' ' + argB;
    return [code, order];
};

Blockly.GDL['gdl_3D_block'] = function(block) {
    // BLOCK command
    var value_x = Blockly.GDL.valueToCode(block, 'X', Blockly.GDL.ORDER_COMMA) || '0';
    var value_y = Blockly.GDL.valueToCode(block, 'Y', Blockly.GDL.ORDER_COMMA) || '0';
    var value_z = Blockly.GDL.valueToCode(block, 'Z', Blockly.GDL.ORDER_COMMA) || '0';
    
    var command = 'BLOCK ' + value_x + ', ' + value_y + ', ' + value_z + '\n';
    return command;
};
