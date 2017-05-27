/* global ace, Terminal */

var editor = ace.edit("editori");
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/javascript");


var komentorivi = $('#komentorivi').console({
    promptLabel: '$ ',
    commandHandle: function() {
        return 'haa';
    }
});

komentorivi.promptText('testi');