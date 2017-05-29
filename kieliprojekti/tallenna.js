/* globals location, btoa, atob */

// Aloitetaan hash tällä jotta "tiedetään" että kyseessä todella on tallennettu data
// eikä joku random string
const MAAGINEN_STRING = 'kptd';

/**
 * Tarkistaa onko urlin hash-osaan "tallennettu" koodia
 */
function lueTallennettu() {
    const
        hash = location.hash,
        ind =  hash ? hash.indexOf(MAAGINEN_STRING) : -1;

    if (ind !== -1) {
        const data = hash.substring(ind + MAAGINEN_STRING.length);
        return decode(data);
    }

    return null;
}

function tallenna(koodi) {
    // Base-64 enkoodataan koodi
    const data = encode(koodi);
    location.hash = MAAGINEN_STRING +  data;
}

function encode(str) {
    return btoa(unescape(encodeURIComponent(str)));
}

function decode(b64str) {
    return decodeURIComponent(escape(atob(b64str)));
}

export { lueTallennettu, tallenna };