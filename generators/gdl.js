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
Blockly.GDL.ORDER_ATOMIC    = 0;            // 0 "" ...
Blockly.GDL.ORDER_UNARY_NEGATION = 1;

Blockly.GDL.ORDER_POWER     = 2;
Blockly.GDL.ORDER_MULTIPLY  = 3;
Blockly.GDL.ORDER_DIVIDE    = Blockly.GDL.ORDER_MULTIPLY;
Blockly.GDL.ORDER_MODULO    = Blockly.GDL.ORDER_MULTIPLY;
Blockly.GDL.ORDER_ADD       = 4;
Blockly.GDL.ORDER_SUBTRACT  = Blockly.GDL.ORDER_ADD;
Blockly.GDL.ORDER_RELATION  = 5;
Blockly.GDL.ORDER_AND       = 6;
Blockly.GDL.ORDER_OR        = 7;
Blockly.GDL.ORDER_EXOR      = 8;

Blockly.GDL.ORDER_COMMA     = 998;          // , parameter separator
Blockly.GDL.ORDER_NONE      = 999;           // 

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
Blockly.GDL.CODE_COMMA_SPACE = Blockly.GDL.CODE_COMMA + Blockly.GDL.CODE_SPACE;
Blockly.GDL.CODE_NEWLINE = '\n';

/**
 * Initialise the database of variable names.
 * @param {!Blockly.Workspace} workspace Workspace to generate code from.
 */
Blockly.GDL.init = function (workspace) {
    if (!Blockly.GDL.variableDB_) {
        Blockly.GDL.variableDB_ =
            new Blockly.Names(Blockly.GDL.RESERVED_WORDS_);
      } else {
        Blockly.GDL.variableDB_.reset();
      }
    Blockly.GDL.variableDB_.setVariableMap(workspace.getVariableMap());
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
