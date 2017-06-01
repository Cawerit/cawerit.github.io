import allDocs from './all-docs.js';
import debounce from 'lodash/debounce';

const
    hashReg = /#\/*(.*)/,
    docElements = parseDocElements(),
    allKeys = Array.from(docElements.keys());

function parseDocElements() {
    const r = new Map();

    allDocs.forEach(d => {
        const
            $d = $(`<div>${d}</div>`),
            header = $d.find('h1').eq(0).text();

        if (!header) {
            throw new Error(`File "${$d.html()}" does not have a proper header.\nAdd "## Header" to the top of the file.`);
        }
                
        r.set(header.trim(), $d);
    });

    return r;
}

function setArticle(key) {
    const template = docElements.get(key) || '';

    $('#main').html(template);
}

function getLink(key) {
    return '#' + encodeURIComponent(key);
}

function addLink(ul, key) {
    return $('<li></li>')
        .append(
            $(`<a href="${getLink(key)}"></a>`)
                .text(key)
        )
        .appendTo(ul);
}

function getDocKeyFromHash() {
    const
      hash = decodeURIComponent(location.hash || '').match(hashReg),
      key = hash && hash[1].trim();

    if (key && docElements.has(key)) {
        return key;
    } else {
        const [[r]] = docElements;
        return r;
    }
}

$(function() {

    const initialDoc = getDocKeyFromHash()

    setArticle(initialDoc);

    window.onhashchange = function() {
        setArticle(getDocKeyFromHash());
    };

    const ul = $('#sidebar>ul');
    for (let [key] of docElements) {
        addLink(ul, key);
    }

    $('#search')
        .on('input', debounce(function() {
            const
                $el = $(this),
                val = $el.val();

            let filtered;

            if (val) {
                const vals = val.split(' ');
                
                filtered =
                    allKeys.filter(k =>
                        vals.some(v => !!v && k.indexOf(v) !== -1)
                    );
            } else {
                filtered = allKeys;
            }

            ul.html('');
            filtered.forEach(k => addLink(ul, k));
        }, 200));

});