import getKomentorivi from './komentorivi.js';
import {update, store, valitse} from './store.js';

store
    .filter(valitse('COMPILE'))
    .subscribe(() => {
        update('ODOTTAVA_KYSYMYS', null);
    });

export default {
    console: {
        log(...msg) {
            const k = getKomentorivi();
            for (const m of msg) k.report(m + '\n');
        }
    },
    require(moduleName) {
        switch (moduleName) {
            case 'readline': {
                return {
                    createInterface() {
                        return {
                            question(k, cb) {
                                update('ODOTTAVA_KYSYMYS', cb);
                                getKomentorivi().report(k);
                            },
                            close() {}
                        }
                    }
                };
            }
        }
    },
    process: {
        stdin: {},
        stdout: {}
    }
};