import {once} from 'lodash';
import {update} from './store.js';

export default once(() => {
    return $('#komentorivi').console({
        welcomeMessage: 'Kirjoita Ö-koodi vasemmalla olevaan kenttään ja suorita se tässä',
        promptLabel: '> ',
        commandHandle: function(input) {
            update('KOMENTORIVI_INPUT', input);
            return '';
        },
        commandValidate: function(input) {
            return !!input;
        }
    });
});