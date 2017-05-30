import {once} from 'lodash';
import {update} from './store.js';

export default once(() => {
    const el = $('#komentorivi');
    const k = el.console({
        welcomeMessage: 'Kirjoita Ö-koodi vasemmalla olevaan kenttään ja suorita se tässä klikkaamalla "Käännä"-painiketta',
        promptLabel: '> ',
        commandHandle: function(input) {
            if (input === 'help' || input === 'apua') {
                return (
                    'Kirjoita Ö-koodi vasemman puolen koodikenttään ja klikkaa "Käännä." \n' +
                    'Jos Ö ei vielä suju aivan luonnostaan, voit avata "Esimerkkejä"-listasta valmiiksi\n' +
                    'rakennettuja ohjelmia.'
                );
            }

            if (input === ':q' || input === 'exit' || input === 'lopeta') {
                update('EXIT_INPUT', null);
                setTimeout(() => k.clearScreen());

            } else {
                update('KOMENTORIVI_INPUT', input);
            }
            return '';
        },
        commandValidate: function(input) {
            return !!input;
        }
    });

    el.click(() => {
        k.focus();
    });

    return k;
});