import allDocs from './all-docs.js';

const
    hashReg = /#\/*(.*)/,
    docElements = parseDocElements();


function parseDocElements() {
    const r = new Map();

    allDocs.forEach(d => {
        const
            $d = $(`<div>${d}</div>`),
            header = $d.find('h2').eq(0).text();

        if (!header) {
            throw new Error(`File "${$d.html()}" does not have a proper header.\nAdd "## Header" to the top of the file.`);
        }
                
        r.set(header, $d);
    });

    return r;
}

function setArticle(key) {
    const template = docElements.get(key) || '';

    $('#main').html(template);
}


$(function() {

    const hash = (location.hash || '').match(hashReg);

    let initialDoc;

    if (hash && allDocs.has(hash)) {
        initialDoc = hash;
    } else {
        [[initialDoc]] = docElements;
    }

    setArticle(initialDoc);

});