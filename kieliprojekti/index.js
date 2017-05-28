/* global ace, $ */

import 'bootstrap';
import _ from 'lodash';
import parseri from 'kieliprojekti/browser.js';

import standardikirjastoJS from 'raw-loader!kieliprojekti/kirjastot/standardikirjasto.js';
import standardikirjasto from 'raw-loader!kieliprojekti/kirjastot/standardikirjasto.ö';


$(initUI);

const mockRajapinnat = `

    var console = kieliprojekti.mock.console;
    var require = kieliprojekti.mock.require;
    var process = kieliprojekti.mock.process;

`;

function initUI() {
    const editor = ace.edit("editori");
    editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/javascript");
    // Disabloi deprecation-varoitus
    editor.$blockScrolling = Infinity;
    // Disabloi validointi
    editor.getSession().setUseWorker(false);

    let odottavaKysymys;

    const komentorivi = $('#komentorivi').console({
        welcomeMessage: 'Kirjoita Ö-koodi vasemmalla olevaan kenttään ja suorita se tässä',
        promptLabel: '> ',
        commandHandle: function(input) {
            if (odottavaKysymys) {
                odottavaKysymys(input);
                odottavaKysymys = undefined;
            }
            return '';
        },
        commandValidate: function(input) {
            return !!input;
        }
    });

    window.kieliprojekti = {
        mock: {
            console: {
                log(...msg) {
                    for (const m of msg) komentorivi.report(m + '\n');
                }
            },
            require(moduleName) {
                switch (moduleName) {
                    case 'readline': {
                        return {
                            createInterface() {
                                return {
                                    question(k, cb) {
                                        komentorivi.report(k);
                                        odottavaKysymys = cb;
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
        }  
    };

    const template = tpl => () => {
        editor.setValue(tpl);
    };

    const helloWorldTemplate = `
tila = ""

ohjelma(tila) =
    kun tila
    on "" niin kysy("Mikä on nimesi? ", identiteetti)
    tai näytä("Hei " ++ tila) muutoin
    `;

    const actions = {
        
        "hello-world-esimerkki": template(helloWorldTemplate),

        compile(el) {
            komentorivi.clearScreen();
            const koodi = editor.getValue();
            let tulos;
            try {
                
                const { generoituKoodi, generoituStandardikirjasto } = parseri(koodi, 'javascript', { standardikirjasto });
                const br = '\n\n';

                tulos = `(function(){
                    ${mockRajapinnat}
                    (function() {
                        ${standardikirjastoJS}

                        ${generoituStandardikirjasto}

                        ${generoituKoodi}
                    })();
                })();`
            } catch (virhe) {
                console.error(virhe);
                komentorivi.report(virhe, 'prompt');
            }
            new Function(tulos)();
        }
    };

    _.forOwn(actions, (a, key) => {
        $('#' + key).on('click', a);
    });

}