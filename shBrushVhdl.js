 /**
  * shBrushVhdl.js
  *
  * http://peej.github.com/phpdoctor/examples/geshi/source/geshi/vhdl.php.html
  *
  * @version
  *   0.7.21 (Dec 12 2014)
  *
  * @copyright
  *   Copyright (C) 2014 ryun.
  *
  * @license
  *   MIT licenses.
  */
;(function()
{
	typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

	function Brush()
	{
    var keywordsLower  = 'access after alias all and architecture assert attribute begin block body buffer bus case component configuration constant dff dffe disconnect downto else elsif end entity error exit failure falling_edge file for function generate generic group guarded help_id if impure in inertial info inout is label latch library linkage literal loop map memory mod new next nor not note null of on open or others out package port postponed procedure process pure range record register reject report return rising_edge segments select severity shared signal subtype then to transport type unaffected units until use used variable wait warning when while with xor';
    var keywords = keywordsLower + ' ' + keywordsLower.toUpperCase();

    var datatypesLower = 'bit bit_vector character boolean integer real time string severity_level positive natural signed unsigned line text std_logic std_logic_vector std_ulogic std_ulogic_vector qsim_state qsim_state_vector qsim_12state qsim_12state_vector qsim_strength mux_bit mux_vector reg_bit reg_vector wor_bit wor_vector work ieee std_logic_signed std_logic_1164 std_logic_arith numeric_std';
    var datatypes = datatypesLower + ' ' + datatypesLower.toUpperCase();

		this.regexList = [
            { regex: /--.*$/gm,                                     css: 'comments' },
            { regex: SyntaxHighlighter.regexLib.doubleQuotedString, css: 'color1' },
            { regex: SyntaxHighlighter.regexLib.singleQuotedString, css: 'color1' },
            { regex: new RegExp(this.getKeywords(keywords),  'gm'), css: 'keyword' },
            { regex: new RegExp(this.getKeywords(datatypes), 'gm'), css: 'string' }
			];

		this.forHtmlScript(SyntaxHighlighter.regexLib.phpScriptTags);
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['vhd','vhdl'];

	SyntaxHighlighter.brushes.Vhdl = Brush;

	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
