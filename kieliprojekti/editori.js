import { store, update, valitse } from './store.js';
import { once } from 'lodash';

export default once(() => {
    const editor = ace.edit('editori');
    editor.setTheme('ace/theme/monokai');
    editor.getSession().setMode('ace/mode/javascript');
    // Disabloi deprecation-varoitus
    editor.$blockScrolling = Infinity;
    // Disabloi validointi
    editor.getSession().setUseWorker(false);

    store
        .filter(valitse('VALITTU_ESIMERKKI'))
        .subscribe(({ val }) => {
            editor.setValue(val);
            update('KOODI', val);
        });

    return editor;
});