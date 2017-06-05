import 'bootstrap';
import _ from 'lodash';
import initEditori from './editori.js';
import initKomentorivi from './komentorivi.js';
import { store, valitse, update } from './store.js';
import { lueTallennettu, tallenna } from './tallenna.js';
import './compile.js';
import './nayta-generoitu-koodi.js';
import './styles.js';

import esimerkit from './esimerkkitiedostot.js';

const LS_KEY_FIRST = 'kayty-aiemmin';

$(function () {

    // Kiinnitä ace-editori elementtiin #editori
    initEditori();
    initKomentorivi();

    // Rakennetaan esimerkkilista "kieliprojekti/esimerkit" kansiossa olevista tiedostoista
    const esimerkitUl = $('#esimerkit');
    esimerkit.forEach((tpl, nimi) => {
        const btn = $(`<li><a href="">${nimi}</a></li>`);
        btn.click(e => {
            e.preventDefault();
            update('VALITTU_ESIMERKKI', tpl);
        });
        esimerkitUl.append(btn);
    });

    const actions = {
        compile() {
            update('COMPILE', null);
        },
        tulos_tab_js() {
            update('TULOS_TAB', 'js');
        },
        tulos_tab_clj(){
            update('TULOS_TAB', 'clj');  
        },
        tulos_tab_run() {
            update('TULOS_TAB', 'run');
        },
        tallenna() {
            const val = initEditori().getValue();
            if (val && val.trim().length) {
                tallenna(val);
            }
        }
    };
    
    $('#piilota_standardikirjasto').click(function() {
        update('PIILOTA_KIRJASTO', this.checked); 
    });
    
    update('PIILOTA_KIRJASTO', true);

    store
        .filter(valitse('TULOS_TAB'))
        .subscribe(({val}) => {
            const id = 'tulos_tab_' + val;

            $('[data-tulos-tab-content]').hide();
            $(`[data-tulos-tab-content="${val}"`).show();
            $('#tulos li').removeClass('active');
            $('#' + id).addClass('active');
        });

    update('TULOS_TAB', 'js');

    _.forOwn(actions, (a, key) => {
        $('#' + key).on('click', e => {
            e.preventDefault();
            a(e);
        });
    });

    const urlKoodi = lueTallennettu();

    if (urlKoodi) {
        update('VALITTU_ESIMERKKI', urlKoodi);
    } else {
        if (typeof localStorage !== 'undefined' && localStorage.getItem(LS_KEY_FIRST) !== 'true') {
            localStorage.setItem(LS_KEY_FIRST, 'true');

            const [[, esimerkki1]] = esimerkit;

            update('VALITTU_ESIMERKKI', esimerkki1);
        }
    }

    localStorage.setItem(LS_KEY_FIRST, 'true');

});