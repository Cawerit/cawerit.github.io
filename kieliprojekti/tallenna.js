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
        return atob(data);
    }

    return null;
}

function tallenna(koodi) {
    // Base-64 enkoodataan koodi
    const data = btoa(koodi);
    location.hash = MAAGINEN_STRING +  data;
}


export { lueTallennettu, tallenna };