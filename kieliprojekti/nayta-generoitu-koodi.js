import {store, valitse} from './store.js';



store
    .filter(valitse('GENEROITU'))
    .subscribe(({state}) => {
        const selector = `[data-tulos-tab-content="${state.TULOS_TAB}"]`;
        
        $(selector)
            .text(state.GENEROITU);
    });