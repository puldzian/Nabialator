/*global $*/

var status = "nie ma jeszcze statusu",
    robie = ["śpię", "siedzę", "stoję", "liczcie pieniądze", "robię kupę", "masuję głowę", "piję herbatę"],
    naczym = ["na tapczanie", "na klawiaturze", "na wersalce", "na chuju", "na towarze", "na lodowisku", "na zleceniu", "na umowie o dzieło", "na zeszycie", "na fajce", "na google maps", "na serwerze pocztowym", "na panoramie firm", "na telefonie"],
    jakco = ["jak jakiś skrót", "jak galareta", "jak kawał chuja", "jak ryba", "jak jajo", "jak herbata", "jak liczydło", "jak dziki pies", "jak wampirze dziecię", "jak kurczak", "jak policjant", "jak ciągnik", "jak piwosz"],
    nazywamsie = ["moja godność to", "mam na imię", "nazywam się", "nie mam wątpliwości, że moje nazwisko brzmi", "mój gatunek to", "ten awatar nazywa się", "moja klasa obiektu to", "dzieci mówią do mnie per", "w dokumentach wpisano mi", "mówią do mnie", "moja nazwa usługi to", "możesz nazywać mnie", "nazwa tego pliku to", "karzdy katolik to", "godność mojej godności to", "moje imię i nazwisko brzmi", "moja nazwa to", "mój pseudonim artystyczny to"],
    nazwa = ["ciapaja", "zębatka", "maszyna z guwna", "karabinek", "Jeremiasz", "ojciec Jeremiasz", "mieszadełko", "cieplutkie pozdrowienia", "ściskacz", "telefon Sony Xperia L", "karta pamięci", "ciągniczek", "ciepła zupka i zimne spodnie", "sopel lodu", "buty do tańca", "kolorowy jarmuż"],
    wczym = ["w majonezie", "w sklepie", "w dupie", "w kabelku", "w budce strarznika", "w kartoflu", "w worku kartofli", "w niemrawej okolicy", "w klepsydrze", "w egipskim kurorcie", "w Polsce", "w twojej dupie", "w dupie twojej starej", "w tafli lodu", "u łukasza", "na ruczaju", "na katapulcie", "w przychodni lekarskiej", "w świni", "w bibliotece w radomiu"],
    jestem = ["przebywam obecnie", "spendzam czas", "jestem zameldowany", "zaznaczam okienko", "zarzywam urlopu", "odpoczywam", "jem obiad", "buduje domek", "gram w katapulte", ""],
    czesc = ["cześć", "witam cieplutko", "witam serdecznie", "dzień dobry", "zapraszam do środka", "proszę nie stać w progu", "dobry wieczur", "szanowni państwo", "cześć, witajcie", "witajcie", "jak się macie"];

var losujCos = function (n) {
        return Math.floor(Math.random() * (n));
    };

var mojagodnosc = function () {
    // generator godości
    // nazywamsie + nazwa
    var nazywamsieMax = nazywamsie.length,
        nazwaMax = nazwa.length,
        losnazywamsie = losujCos(nazywamsieMax),
        losnazwa = losujCos(nazwaMax);
    return nazywamsie[losnazywamsie] + " " + nazwa[losnazwa] + ". ";
};

// zmieniacz tła
var kolorki = function () {
    // skopiowane stąd: https://codepen.io/quasimondo/pen/lDdrF
    var colors = new Array(
        [62, 35, 255],
        [60, 255, 60],
        [255, 35, 98],
        [45, 175, 230],
        [255, 0, 255],
        [255, 128, 0]);
    var step = 0;
    //color table indices for:
    // current color left
    // next color left
    // current color right
    // next color right
    var colorIndices = [0, 1, 2, 3];

    //transition speed
    var gradientSpeed = 0.05;
    function updateGradient() {
        if ( $===undefined ) return;
        var c0_0 = colors[colorIndices[0]];
        var c0_1 = colors[colorIndices[1]];
        var c1_0 = colors[colorIndices[2]];
        var c1_1 = colors[colorIndices[3]];
        var istep = 1 - step;
        var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
        var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
        var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
        var color1 = "rgb("+r1+","+g1+","+b1+")";

        var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
        var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
        var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
        var color2 = "rgb("+r2+","+g2+","+b2+")";

        $("body").css({background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({    background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});

        step += gradientSpeed;
    if ( step >= 1 ) {
        step %= 1;
        colorIndices[0] = colorIndices[1];
        colorIndices[2] = colorIndices[3];

        //pick two new target color indices
        //do not pick the same as the current one
        colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
        colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
        }
}

setInterval(updateGradient,10);
}

// rozstawiacz obrazków
var obrazki = function () {
    // numer = liczba obrazków w folderze +1
    var numer1 = losujCos(12);
    var numer2 = losujCos(12);
    var numer3 = losujCos(12);
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) - 400;
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 400;
    var ww = losujCos(w);
    var hh = losujCos(h);
    document.getElementById("img1").style.bottom=hh;
    document.getElementById("img1").style.right=ww;
    document.getElementById("img1").style.backgroundImage="url(img/" + numer1 + ".png)";
    var ww = losujCos(w);
    var hh = losujCos(h);
    document.getElementById("img2").style.bottom=hh;
    document.getElementById("img2").style.right=ww;
    document.getElementById("img2").style.backgroundImage="url(img/" + numer2 + ".png)";
    var ww = losujCos(w);
    var hh = losujCos(h);
    document.getElementById("img3").style.bottom=hh;
    document.getElementById("img3").style.right=ww;
    document.getElementById("img3").style.backgroundImage="url(img/" + numer3 + ".png)";
};

// główny generator statusów
var generator = function () {
    // generuj każdą z części składowych i będziemy dobierać
    // do każdego kejsa osobny układ
    var robieMax = robie.length,
        losrobie = losujCos(robieMax),
        naczymMax = naczym.length,
        losnaczym = losujCos(naczymMax),
        jakcoMax = jakco.length,
        losjakco = losujCos(jakcoMax),
        nazywamsieMax = nazywamsie.length,
        losnazywamsie = losujCos(nazywamsieMax),
        nazwaMax = nazwa.length,
        losnazwa = losujCos(nazwaMax),
        wczymMax = wczym.length,
        loswczym = losujCos(wczymMax),
        jestemMax = jestem.length,
        losjestem = losujCos(jestemMax),
        czescMax = czesc.length,
        losczesc = losujCos(czescMax),
        // losuj z liczby case'ów - 1
        coBedzie = losujCos(4);
    switch (coBedzie) {
    case 0:
        status = jestem[losjestem] + " " + wczym[loswczym] + ". ";
        break;
    case 1:
        status = czesc[losczesc] + ", " + nazywamsie[losnazywamsie] + " " + nazwa[losnazwa] + ". ";
        break;
    case 2:
        status = nazywamsie[losnazywamsie] + " " + nazwa[losnazwa] + ", " + robie[losrobie] + " " + naczym[losnaczym] + ". ";
        break;
    case 3:
        status = robie[losrobie] + " " + naczym[losnaczym] + " " + jakco[losjakco] + ". ";
        break;
    }
    $("#generator").html(status);
};

// powiedz
var powiedz = function (status) {
    meSpeak.speak(status);
}

// funcja główna
var nabialator = function () {
        // wygas scene
        // zmien tlo
        // zmien status
        generator();
        // zmien obrazki
        obrazki();
        // rozjasnij scene
        // przeczytaj status
        powiedz(status);
        // setTimeout(powiedz, 1000);
        // zacznij od nowa
        setTimeout(nabialator, 5000);
    };

$(document).ready(function () {
    "use strict";
    meSpeak.loadConfig("mespeak_config.json");
    meSpeak.loadVoice('pl.json');
    kolorki();
    nabialator();
});


