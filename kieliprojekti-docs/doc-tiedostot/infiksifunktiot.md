# Infiksifunktiot

Infiksifunktiot ovat olennainen osa Ö:tä. Monet tärkeät toiminnot jotka muissa kielissä olisi
toteutettu sisäänrakennetuilla operaattoreilla onkin Ö:ssä toteutettu infiksifunktioina. Esimerkiksi
“+” (summaus), “-” (vähennys), “*” (kertolasku) jne. on toteutettu kielen infiksifunktiota käyttämällä,
eli ne ovat samanarvoisia käyttäjän mahdollisesti luomien muiden infiksifunktioiden kanssa. (tästä kuitenkin seuraa se, että argumentit 
esimerkiksi yhteenlaskussa täytyy erottaa välilyönnillä + merkistä!) Käyttäjä
voi halutessaan vaikka korvata valmiiksi tehdyt funktiot määrittelemällä ne uudelleen ja vaikuttaa presedenssillä siihen, 
missä järjestyksessä funktiot arvioidaan. Jokaisen infiksifunktion
tulee sisältää vähintään yksi erikoismerkki, joten ne on helppo erottaa muista funktioista. Kaikki
infiksifunktiot ovat vasemmalle-assosiatiivisia. Käyttäjän luomat infiksifunktiot ovat samanarvoisia
valmiiksi tehtyjen kanssa. Lisäksi kaikki Ö-kielen funktiot ovat valmiiksi curry-muunnettuja, eli mikäli
funktiokutsu ei tarjoa kaikkia funktion tarvitsemia argumentteja, kutsu palauttaa uuden funktion
jossa annetut argumentit on sidottu valmiiksi.

Ö-kielen käyttäjä voi määrittää omia infiksifunktioita presedensseineen kaikkineen yksinkertaisella syntaksilla.
Esimerkki infiksifunktion luomisesta voisi olla muotoa `infiksi 5 testi! (a, b) = a + b`. Se siis toimii muuten samalla tavalla kuin 
funktion luominen, mutta sen eteen pitää vain asettaa sana "infiksi" ja luotavan infiksifunktion *presedenssinumero*. Presedenssinumero 
korvaa sulkeet infiksifunktiossa, eli se kertoo missä järjestyksessä se tulee suorittaa muihin infiksifunktioihin nähden. Mitä suurempi
presedenssi, sitä aikaisemmin infiksifunktio suoritetaan.

Ö:n standardikirjastossa olevat valmiit infiksifunktiot on lueteltu alapuolella. Infiksifunktioiden presedenssi on eroteltu 
niistä puolipisteellä. 

## Standardikirjaston infiksifunktiot:

\+ (a, b);
presedenssi 10

\- (a, b);
presedenssi 10

\* (a, b);
presedenssi 11

/ (a, b);
presedenssi 11

++ (a, b);
presedenssi 10

% (a, b);
presedenssi 11

^ (a, b);
presedenssi 12

on: (a, b);
presedenssi 8

muutoin: (ehkäArvo, taiSitten);
presedenssi 1

: (a, b);
presedenssi 4

@ (kokoelma, indeksi);
presedenssi 20

@? (kokoelma, indeksi);
presedenssi 20

+loppuun (lista, a);
presedenssi 4

&& (a, b);
presedenssi 6

|| (a, b);
presedenssi 5

\> (a, b);
presedenssi 8

< (a, b);
presedenssi 8

\>> (a, b);
presedenssi 1

|> (val, fn);
presedenssi 0

sitten: (a, b);
presedenssi 4

| (kokoelma, pari);
presedenssi 3
