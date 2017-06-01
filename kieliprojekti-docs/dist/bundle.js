/* */
!function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=6)}([function(t,n,e){var r=e(1),o=r.Symbol;t.exports=o},function(t,n,e){var r=e(11),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},function(t,n){function e(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)}t.exports=e},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(5),o=new Set;r.keys().forEach(function(t){o.add(r(t))}),n.default=o},function(t,n,e){function r(t,n,e){function r(n){var e=s,r=v;return s=v=void 0,X=n,m=t.apply(r,e)}function p(t){return X=t,S=setTimeout(g,n),B?r(t):m}function d(t){var e=t-x,r=t-X,o=n-e;return k?c(o,G-r):o}function b(t){var e=t-x,r=t-X;return void 0===x||e>=n||e<0||k&&r>=G}function g(){var t=i();if(b(t))return f(t);S=setTimeout(g,d(t))}function f(t){return S=void 0,w&&s?r(t):(s=v=void 0,m)}function h(){void 0!==S&&clearTimeout(S),X=0,s=x=v=S=void 0}function W(){return void 0===S?m:f(i())}function I(){var t=i(),e=b(t);if(s=arguments,v=this,x=t,e){if(void 0===S)return p(x);if(k)return S=setTimeout(g,n),r(x)}return void 0===S&&(S=setTimeout(g,n)),m}var s,v,G,m,S,x,X=0,B=!1,k=!1,w=!0;if("function"!=typeof t)throw new TypeError(u);return n=a(n)||0,o(e)&&(B=!!e.leading,k="maxWait"in e,G=k?l(a(e.maxWait)||0,n):G,w="trailing"in e?!!e.trailing:w),I.cancel=h,I.flush=W,I}var o=e(2),i=e(16),a=e(17),u="Expected a function",l=Math.max,c=Math.min;t.exports=r},function(t,n,e){function r(t){return e(o(t))}function o(t){var n=i[t];if(!(n+1))throw new Error("Cannot find module '"+t+"'.");return n}var i={"./kun-on.md":7,"./ohjelma.md":8,"./tila.md":9};r.keys=function(){return Object.keys(i)},r.resolve=o,t.exports=r,r.id=5},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){var n=f.get(t)||"";$("#main").html(n)}function i(t){return"#"+encodeURIComponent(t)}function a(t,n){return $("<li></li>").append($('<a href="'+i(n)+'"></a>').text(n)).appendTo(t)}function u(){var t=decodeURIComponent(location.hash||"").match(g),n=t&&t[1].trim();if(n&&f.has(n))return n;var e=l(f,1);return l(e[0],1)[0]}var l=function(){function t(t,n){var e=[],r=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(e.push(a.value),!n||e.length!==n);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return e}return function(n,e){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return t(n,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=e(3),p=r(c),d=e(4),b=r(d),g=/#\/*(.*)/,f=function(){var t=new Map;return p.default.forEach(function(n){var e=$("<div>"+n+"</div>"),r=e.find("h1").eq(0).text();if(!r)throw new Error('File "'+e.html()+'" does not have a proper header.\nAdd "## Header" to the top of the file.');t.set(r.trim(),e)}),t}(),h=Array.from(f.keys());$(function(){o(u()),window.onhashchange=function(){o(u())};var t=$("#sidebar>ul"),n=!0,e=!1,r=void 0;try{for(var i,c=f[Symbol.iterator]();!(n=(i=c.next()).done);n=!0){var p=i.value,d=l(p,1),g=d[0];a(t,g)}}catch(t){e=!0,r=t}finally{try{!n&&c.return&&c.return()}finally{if(e)throw r}}$("#search").on("input",(0,b.default)(function(){var n=$(this),e=n.val(),r=void 0;if(e){var o=e.split(" ");r=h.filter(function(t){return o.some(function(n){return!!n&&-1!==t.indexOf(n)})})}else r=h;t.html(""),r.forEach(function(n){return a(t,n)})},200))})},function(t,n){t.exports='<h1 id="kun-on-niin">kun .. on .. niin</h1>\n<p><code>Kun .. on .. niin</code> on rakenne Ö-kielen ehtolauseille.</p>\n<pre><code>kun a\n    on c niin näytä(&quot;Samat arvot!&quot;)\n    tai näytä(&quot;Eri arvot!&quot;) muutoin\n</code></pre><p><a class="btn btn-default" href="https://cawerit.github.io/kieliprojekti/#kptdCi0tIEFsdXN0ZXRhYW4gasOkbGxlZW4gb2hqZWxtYW4gdGlsYS4KLS0gVMOkbGzDpCBrZXJ0YWEgc2Fub3RhYW4gc2VuIG9sZXZhbiAiZWlNaXTDpMOkbiIsIGtvc2thIGvDpHl0w6RtbWUKLS0gbXVpdGEgbXV1dHR1amlhIHTDpHNzw6Qgb2hqZWxtYXNzYS4KLS0gImVpTWnDpMOkbiIgb24gZXJpdHlpbmVuIGFydm8gam9rYSBtZXJra2FhIHB1dXR0dXZhYSBhcnZvYS4KdGlsYSA9IGVpTWl0w6TDpG4KCi0tIFZvaXQgbXnDtnMgYXNldHRhYSBtdWl0YSBtdXV0dHVqaWEgc2FtYWxsYSBzeW50YWtzaWxsYS4KLS0gTXV1dHR1amFuaW1lbiB0dWxlZSBzaXPDpGx0w6TDpCB0YXZhbGxpc2lhIGtpcmphaW1pYSwgc2Vrw6QgaGFsdXRlc3Nhc2kKLS0gbXnDtnMgbnVtZXJvaXRhIGphICJfIiB0YWkgIiQiIG1lcmtrZWrDpC4KLS0gSHVvbWFhIGV0dGVpIG11dXR0dWppZW4gbcOkw6RyaXR5c2rDpHJqZXN0eWtzZWxsw6Qgb2xlIG1lcmtpdHlzdMOkLgotLSBUw6Rtw6Qgb2hqZWxtYSB0b2ltaWkgdmFpa2thICJhIiBvbiBtw6TDpHJpdGV0dHkgZW5uZW4gImIiLW11dXR0dWphYS4KYSA9IGIgKyAxCmIgPSA1CgotLSBNdXV0dHVqaWxsYSB2b2kgbXnDtnMgb2xsYSBvbWEgcnVua28sIGhpZW1hbiBrdWluIGZ1bmt0aW9pbGxhLgpjID0KICAgIGFwdW11dXR0dWphID0gYiAtIDIKICAgIGFwdW11dXR0dWphICogMgoKb2hqZWxtYSgpID0KICAgIC0tIMOWLWtpZWxlc3PDpCBlaHRvbGF1c2VlbGxhIG9uIHNldXJhYXZhIHJha2VubmU6CiAgICAtLSBrdW4gYXJ2byBvbiBhIG5paW4gYiBvbiBjIG5paW4gZCB0YWkgZSBtdXV0b2luCiAgICAtLSAib24geCBuaWluIHkiIHBhcmVqYSB2b2kgeWhkaXN0w6TDpCBuaWluIG1vbnRhIGt1aW4gaGFsdWFhLCBrdW5oYW4KICAgIC0tIHZpaW1laXNlbsOkIHR1bGVlICJ0YWkgeiBtdXV0b2luIi4gU2lzZW5ueWtzaWxsw6QgamEgcml2aW52YWloZG9pbGxhCiAgICAtLSBlaSB0w6Rzc8OkIGtvaHRhYSBvbGUgbWVya2l0eXN0w6QsIGt1bmhhbiBsdWtpamFsbGUgbsOkeXR0w6TDpCBoeXbDpGx0w6QuCgogICAgLS0gS29rZWlsZSBtdXV0dGFhIHlsbMOkb2xldmlhIG11dXR0dWppYSBqYSBrYXRzbyBtaXRlbiBzZQogICAgLS0gdmFpa3V0dGFhIHR1bG9rc2VlbgogICAga3VuIGEKICAgICAgICBvbiBjIG5paW4gbsOkeXTDpCgiU2FtYXQgYXJ2b3QhIikKICAgICAgICB0YWkgbsOkeXTDpCgiRXJpIGFydm90ISIpIG11dXRvaW4K" target="_blank">\n    Kokeile\n</a></p>\n'},function(t,n){t.exports='<h1 id="ohjelma">ohjelma</h1>\n<p>Jokainen Ö-ohjelma sisältää funktion nimeltä &quot;ohjelma&quot;.\nohjelma-funktio saa parametrinaan tilan, joka määritetään erikseen.</p>\n<pre><code>ohjelma(tila) =\n    näytä(tila)\n</code></pre><p><a class="btn btn-default" href="https://cawerit.github.io/kieliprojekti/#kptdLS0gVGVydmV0dWxvYSDDli1vaGplbG1vaW50aWtpZWxlbiBwYXJpaW4hCi0tIFTDpHNzw6Qgb24gaHl2aW4geWtzaW5rZXJ0YWluZW4gb2hqZWxtYSBqb2thIHR1bG9zdGFhCi0tIHZpZXN0aW4ga29uc29saWluLgoKLS0gTsOkbcOkIGthaGRlbGxhIHZpaXZhbGxhIGFsb2l0ZXR1dCByaXZpdCBvdmF0IGtvbW1lbm50dGVqYSwKLS0gam90a2Egb3ZhdCB0w6TDpGxsw6Qgc2ludW4gYXB1bmFzaSBlaXbDpHRrw6QgdmFpa3V0YQotLSBvaGplbG1hbiBzdW9yaXR1a3NlZW4uIAoKCi0tIFRpbGEgdGVrZWUgb2hqZWxtaXN0YSBoecO2ZHlsbGlzacOkIGphIHNpa3NpcMOkIGpva2FpbmVuCi0tIMOWLW9oamVsbWEgYWxrYWEgbcOkw6RyaXR0w6Rtw6RsbMOkIHNpbGxlIGFsa3V0aWxhLgotLSBUaWxhIHZvaSBvbGxhIG1pdMOkIGlraW7DpCBoYWx1YXQsIHTDpHNzw6QgZXNpbWVya2lzc8OkIHNlCi0tIG9uIGlsb2luZW4gdGVrc3RpLgp0aWxhID0gIkhlaSBtYWFpbG1hISIKCi0tIEpva2FpbmVuIMOWLW9oamVsbWEgc2lzw6RsdMOkw6QgbXnDtnMgZnVua3Rpb24gbmltZWx0w6QgIm9oamVsbWEiLgotLSBvaGplbG1hLWZ1bmt0aW8gc2FhIHBhcmFtZXRyaW5hYW4gdGlsYW4sIGpva2EganV1cmkgYWllbW1pbgotLSBtw6TDpHJpdGV0dGlpbi4Kb2hqZWxtYSh0aWxhKSA9CiAgICAtLSBGdW5rdGlvbiB2aWltZWluZW4gcml2aSBwYWxhdXRldGFhbiBrdXRzdWphbGxlLgogICAgLS0gVMOkc3PDpCBwYWxhdXRhbW1lICJrb21lbm5vbiIsIGpva2Ega8Okc2tlZSBzdW9yaXR1c3ltcMOkcmlzdMO2w6QKICAgIC0tIG7DpHl0dMOkbcOkw6RuIGFpZW1taW4gbcOkw6RyaXR0w6Rtw6RtbWUgdmllc3Rpbi4KICAgIG7DpHl0w6QodGlsYSk=" target="_blank">\n    Kokeile\n</a></p>\n'},function(t,n){t.exports='<h1 id="tila">tila</h1>\n<p>Blaa blaa</p>\n'},function(t,n,e){function r(t){return null==t?void 0===t?l:u:c&&c in Object(t)?i(t):a(t)}var o=e(0),i=e(12),a=e(13),u="[object Null]",l="[object Undefined]",c=o?o.toStringTag:void 0;t.exports=r},function(t,n,e){(function(n){var e="object"==typeof n&&n&&n.Object===Object&&n;t.exports=e}).call(n,e(18))},function(t,n,e){function r(t){var n=a.call(t,l),e=t[l];try{t[l]=void 0;var r=!0}catch(t){}var o=u.call(t);return r&&(n?t[l]=e:delete t[l]),o}var o=e(0),i=Object.prototype,a=i.hasOwnProperty,u=i.toString,l=o?o.toStringTag:void 0;t.exports=r},function(t,n){function e(t){return o.call(t)}var r=Object.prototype,o=r.toString;t.exports=e},function(t,n){function e(t){return null!=t&&"object"==typeof t}t.exports=e},function(t,n,e){function r(t){return"symbol"==typeof t||i(t)&&o(t)==a}var o=e(10),i=e(14),a="[object Symbol]";t.exports=r},function(t,n,e){var r=e(1),o=function(){return r.Date.now()};t.exports=o},function(t,n,e){function r(t){if("number"==typeof t)return t;if(i(t))return a;if(o(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=o(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(u,"");var e=c.test(t);return e||p.test(t)?d(t.slice(2),e?2:8):l.test(t)?a:+t}var o=e(2),i=e(15),a=NaN,u=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,p=/^0o[0-7]+$/i,d=parseInt;t.exports=r},function(t,n){var e;e=function(){return this}();try{e=e||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(e=window)}t.exports=e}]);