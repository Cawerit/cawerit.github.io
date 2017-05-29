import {store, valitse} from './store.js';



store
    .filter(valitse('GENEROITU'))
    .subscribe(({state}) => {
        const selector = `[data-tulos-tab-content="${state.TULOS_TAB}"]`;
        
        const el = $(selector)
            .html('<pre><code>' + state.GENEROITU + '</code></pre>');

        if (state.GENEROITU) {
            hljs.highlightBlock(el[0]);
        }
    });