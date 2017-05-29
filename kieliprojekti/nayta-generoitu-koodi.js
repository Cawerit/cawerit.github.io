import {store, valitse} from './store.js';



store
    .filter(valitse('GENEROITU'))
    .subscribe(({state}) => {
        const selector = `[data-tulos-tab-content="${state.TULOS_TAB}"]`;
        const codeEl = $('<pre class="compile-output"><code></code></pre>');
        
        codeEl.text(state.GENEROITU);
        $(selector).empty().append(codeEl);

        if (state.GENEROITU) {
            hljs.highlightBlock(codeEl[0]);
        }
    });