import getKomentorivi from './komentorivi.js';
import {store} from './store.js';
import 'rxjs/add/operator/first';

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
                                store
                                    .first()
                                    .subscribe(({key, val}) => {
                                        if (key === 'KOMENTORIVI_INPUT') {
                                            cb(val);
                                        }
                                    });
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