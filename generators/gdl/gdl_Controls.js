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
        "colour": "#686de0",
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
        "colour": "#686de0",
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
        "message2": "next",
        "args2": [],
        // "mutator": "gdl_controls_for_mutator",
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#686de0",
        "tooltip": "",
        "helpUrl": ""
    }
]);


// TODO failed to make this mutator work. Its purpose is to place the
// loop variable name after the trailing 'next; keyword, but it caused.
// 
// /**
//  * Mixin for mutator functions in the 'gdl_controls_for_mutator' extension.
//  * @mixin
//  * @augments Blockly.Block
//  * @package
//  */
// Blockly.GDL.GDL_CONTROLS_FOR_MUTATOR_MIXIN = {
//     /**
//      * Create XML to represent the trailing 'loopVarName'.
//      * @return {Element} XML storage element.
//      * @this Blockly.Block
//      */
//     mutationToDom: function() {
//       var container = document.createElement('mutation');
//       var loopVarName = this.getField('VAR').getText ();
//       container.setAttribute('loopVarName', loopVarName);
//       return container;
//     },
//     /**
//      * Parse XML to restore the 'divisorInput'.
//      * @param {!Element} xmlElement XML storage element.
//      * @this Blockly.Block
//      */
//     domToMutation: function(xmlElement) {
//       var loopVarName = xmlElement.getAttribute('loopVarName');
//       this.updateShape_(loopVarName);
//     },
//     /**
//      * Modify this block to have 'loopVarName' at the end, following the 'next' keyword.
//      * @param {boolean} loopVarName the variablename of the lop variable
//      * @private
//      * @this Blockly.Block
//      */
//     updateShape_: function(loopVarName) {
//       // Add or remove a Value Input.
//       var nextField = this.getField('FOR_NEXT');
//       nextField.setText (loopVarName);
//     }
//   };
  
//   /**
//    * 'gdl_controls_for_mutator' extension to the 'gdl_controls_for' block that
//    * updates the variable name at the end of the for-loop ('next' statement).
//    * @this Blockly.Block
//    * @package
//    */
//   Blockly.GDL.GDL_CONTROLS_FOR_MUTATOR_EXTENSION = function () {
//       var block = this;
//       block.getField('VAR').setValidator(function (option) {
//           var loopVarName = block.getText('VAR');
//           this.sourceBlock_.updateShape_(loopVarName);
//       });
//   };
  
//   Blockly.Extensions.registerMutator('gdl_controls_for_mutator',
//       Blockly.GDL.GDL_CONTROLS_FOR_MUTATOR_MIXIN,
//       Blockly.GDL.GDL_CONTROLS_FOR_MUTATOR_EXTENSION);


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
