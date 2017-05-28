import {once} from 'lodash';

export default once(() => {
    return $('#komentorivi').console({
        welcomeMessage: 'Kirjoita Ö-koodi vasemmalla olevaan kenttään ja suorita se tässä',
        promptLabel: '> ',
        commandHandle: function(input) {
            return input;
        },
        commandValidate: function(input) {
            return !!input;
        }
    });
});