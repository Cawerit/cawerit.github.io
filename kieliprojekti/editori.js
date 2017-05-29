import { store, valitse } from './store.js';
import { once, debounce } from 'lodash';
import CodeMirror from 'codemirror';
import 'codemirror/addon/mode/simple';


export default once(() => {
    const editor = CodeMirror(document.getElementById('editori'), {
        mode: 'ö',
        theme: 'monokai',
        lineNumbers: true
    });

    function setSize() {
        const h = $(window).height() - $('nav.navbar-default').height();
        editor.setSize('100%', h);
    }
    $(window).on('resize', debounce(setSize, 300));
    setSize();

    store
        .filter(valitse('VALITTU_ESIMERKKI'))
        .subscribe(({ val }) => {
            editor.setValue(val);
        });
        

    return editor;
});

// Määritetään syntax-hilight ö-kielelle
// docs: https://codemirror.net/demo/simplemode.html
CodeMirror.defineSimpleMode('ö', {
  // The start state contains the rules that are intially used
  start: [
    { regex: /--.*/, token: 'comment' },
    { regex: /""/, token: 'string' },
    { regex: /"[^"]/, token: 'string', next: 'string' },
    { regex: /\b(.+)\s?(\(.*\))(\s?=)/, token: ['variable-3', 'variable-2', 'operator'] },
    // Rules are matched in the order in which they appear, so there is
    // no ambiguity between this one and the one above
    { regex: /\b(kun|on|niin|tai|muutoin|infiksi)\b/, token: 'keyword' },
    { regex: /\b(Tosi|Epätosi)\b/, token: 'atom' },
    { regex: /eiMitään/, token: 'builtin' },
    { regex: /(tämä\()(.*)(\))/, token: ['builtin', null, 'builtin'] },
    { regex: /\s-?[0-9]+\b/i, token: 'number' }
  ],

  // Käsittely usean rivin teksteille
  string: [
      { regex: /\\/, token: 'string', next: 'string_escape' },
      { regex: /[^"\\]+/, token: 'string' },
      { regex: /"/, token: 'string', next: 'start' }
  ],

  string_escape: [
    { regex: /./, token: 'string', next: 'string' }
  ],
  
  meta: {
    dontIndentStates: ['comment'],
    lineComment: '--'
  }
});