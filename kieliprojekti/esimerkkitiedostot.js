import _ from 'lodash';

const req = require.context('raw-loader!kieliprojekti/esimerkit', false, /.ö$/);
const esimerkit = new Map();
const numeroituReg = /^([0-9]+)-(.*)/;
const turhaAlkuReg = /(.*)\//;

const nimiEsimerkille = tiedostonimi => {
    tiedostonimi = tiedostonimi.replace(turhaAlkuReg, '');
    const numeroitu = tiedostonimi.match(numeroituReg);

    let num, loppuosa;
    if (numeroitu) {
        [, num, loppuosa] = numeroitu;
        num += '. ';
    } else {
        num = '';
        loppuosa = tiedostonimi;
    }
    return num + _.capitalize(_.words(loppuosa.replace(/.ö$/, '')).join(' '));
};

req.keys().forEach(key => {
    esimerkit.set(nimiEsimerkille(key), req(key));
});

export default esimerkit;