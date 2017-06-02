
const req = require.context('./doc-tiedostot', false, /.md$/);

const dokumentaatio = new Set();

req.keys().forEach(key => {
    dokumentaatio.add(req(key));
});

export default dokumentaatio;