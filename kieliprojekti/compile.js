import {store, update, valitse} from './store.js';
import getKomentorivi from './komentorivi.js';
import getEditori from './editori.js';
import compiler from 'kieliprojekti/browser.js';
import mockRajapinnat from './mock-rajapinnat.js';
import _ from 'lodash';

// Tuodaan kääntämisessä tarvittavat lisätiedostot "raw"-loaderin avulla normaalina tekstinä
import standardikirjastoJS from 'raw-loader!kieliprojekti/kirjastot/standardikirjasto.js';
import standardikirjasto from 'raw-loader!kieliprojekti/kirjastot/standardikirjasto.ö';



store
    .filter(valitse('COMPILE', 'TULOS_TAB'))
    .subscribe(({ state, key }) => {
        const komentorivi = getKomentorivi();
        let koodi = state.KOODI;
        
        if (key === 'COMPILE') {
            koodi = getEditori().getValue();
            update('KOODI', koodi);
        }

        if (!koodi) {
            return;
        }

        komentorivi.clearScreen();
        let generoitu, virhe;

        try {
            const { generoituKoodi, generoituStandardikirjasto } = compiler(koodi, 'javascript', { standardikirjasto });

            if (state.TULOS_TAB === 'js') {
                // Jos "JavaScript" tab on auki, tarvitaan
                // ainoastaan generoitu koodi, ei esim. standardikirjastoa
                generoitu = generoituKoodi;

                // Tyylisyistä otetaan pois myös "if (typeof ohjelma !== 'function') jms sanity-checkit",
                // sekä ympäriöivä IIFE
                generoitu = generoitu.slice(generoitu.indexOf('\n')); // Otetaan ensimmäinen rivi pois
                generoitu = generoitu.slice(0, generoitu.lastIndexOf("if (typeof ohjelma !== 'function'"));

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

        if (state.TULOS_TAB === 'run') {
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
        } else if(!virhe) {
            update('GENEROITU', generoitu);
        }

        if (virhe) {
            console.error(virhe);
            const v = _.toString(virhe).replace(/Error/, 'Virhe');

            if (state.TULOS_TAB === 'run') {
                komentorivi.report(v);
            } else {
                update('GENEROITU', v);
            }
        }

    });