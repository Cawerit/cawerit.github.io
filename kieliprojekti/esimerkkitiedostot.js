import _ from 'lodash';

const req = require.context('raw-loader!kieliprojekti/esimerkit', false, /.ö$/);
const esimerkit = new Map();

const nimiEsimerkille = tiedostonimi => _.capitalize(_.words(tiedostonimi.replace(/.ö$/, '')).join(' '));

req.keys().forEach(key => {
    esimerkit.set(nimiEsimerkille(key), req(key));
});

export default esimerkit;