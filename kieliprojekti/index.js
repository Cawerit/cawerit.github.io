import 'bootstrap';
import _ from 'lodash';
import initEditori from './editori.js';
import initKomentorivi from './komentorivi.js';
import { store, valitse, update } from './store.js';
import './compile.js';
import './nayta-generoitu-koodi.js';

import esimerkit from './esimerkkitiedostot.js';


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
        tulos_tab_run() {
            update('TULOS_TAB', 'run');
        }
    };

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
        $('#' + key).on('click', a);
    });

});