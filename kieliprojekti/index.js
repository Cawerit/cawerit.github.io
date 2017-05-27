/* global ace, $ */

import grammar from './.tmp/parseri.js';
import nearley from 'nearley';
import esikasittely from 'kieliprojekti/'

const p = new nearley.Parser(grammar.ParserRules, grammar.ParserStart);

$(initUI);

function initUI() {
    const editor = ace.edit("editori");
    editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/javascript");


    const komentorivi = $('#komentorivi').console({
        promptLabel: '$ ',
        commandHandle: function(input) {
            return 'yeah boi';
        },
        commandValidate: function(input) {
            return false;
        }
    });
}