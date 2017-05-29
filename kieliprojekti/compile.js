import {store, update, valitse} from './store.js';
import getKomentorivi from './komentorivi.js';
import getEditori from './editori.js';
import compiler from 'kieliprojekti/browser.js';
import mockRajapinnat from './mock-rajapinnat.js';

// Tuodaan kääntämisessä tarvittavat lisätiedostot "raw"-loaderin avulla normaalina tekstinä
import standardikirjastoJS from 'raw-loader!kieliprojekti/kirjastot/standardikirjasto.js';
import standardikirjasto from 'raw-loader!kieliprojekti/kirjastot/standardikirjasto.ö';



store
    .filter(valitse('COMPILE', 'TULOS_TAB'))
    .subscribe(({ state, key }) => {
        const komentorivi = getKomentorivi();
        let koodi = state.KOODI;
        
        if (key === 'COMPILE') {
            komentorivi.clearScreen();
            koodi = getEditori().getValue();
            update('KOODI', koodi);
        }

        if (!koodi) {
            return;
        }

        let generoitu, virhe;

        try {
            const { generoituKoodi, generoituStandardikirjasto } = compiler(koodi, 'javascript', { standardikirjasto });

            if (state.TULOS_TAB === 'js') {
                // Jos "JavaScript" tab on auki, tarvitaan
                // ainoastaan generoitu koodi, ei esim. standardikirjastoa
                generoitu = generoituKoodi;
            } else {
                // Jos "Suorita" tab on auki, generoidaan suoritettavaksi kelpaava ohjelma
                generoitu =
                    `(function() {
                        ${standardikirjastoJS}

                        ${generoituStandardikirjasto}

                        ${generoituKoodi}
                    })();`;
            }
        } catch (e) {
            virhe = e;
        }

        if (state.TULOS_TAB === 'run' && generoitu && !virhe) {
            // Suoritetaan generoitu js
            try {
                
                new Function(
                    'console',
                    'require',
                    'process',
                    generoitu
                )(
                    mockRajapinnat.console,
                    mockRajapinnat.require,
                    mockRajapinnat.process
                );

            } catch(e) {
                virhe = e;
            }
        } else {
            update('GENEROITU', generoitu);
        }

    });