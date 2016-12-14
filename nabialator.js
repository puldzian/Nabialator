/*global $*/

var status = "nie mam jeszcze statusu",
    robie = ["śpie", "siedze", "stoje", "licze walute", "robie kupe", "masuje głowe", "pije sobie herbate", "jem kanapke", "odpoczywam", "zarzywam odpoczynku", "dobrze sie bawie", "trenuje", "martwie sie", "ładuje telefon", "sprawdzam poczte", "sprawdzam powiadomienia", "jem zupe", "zalewam vifona", "tresuje pająka", "podpinam ładowarke", "oglądam serial", "jem jajo", "jem majonez", "czytam ebuka", "czytam statusy", "patrze w nabiau", "co ja robie", "gnije", "pokrywam sie pleśniom", "grzybieje", "martwie sie bardzo", "myje sie", "obcinam paznokcie", "co ja w ogule robie", "jakby siedze", "jakby lerze", "robie coś", "jakby odpoczywam", "tak sobie przysiadłem", "mam wolnom chwilke", "skradam sie powoli", "rozkładam posłanie", "toleruje ciebie", "oglondam komputer", "patrze na pieniondze", "czytam smsy", "oglondam selfiki", "boli mnie dupa", "mam bul dupy", "mam durzo pracy"],
    naczym = ["na tapczanie", "na klawiaturze", "na wersalce", "na kutasie", "na kontenerze", "na lotnisku krakuw balice", "na umowie cywilnej", "na umowie o dzieuo", "na notatniku", "na papierosku", "na gugle mapsie", "na serwerze pocztowym", "na bazie teleadresowej", "na telefonie", "na wysypisku odpaduw", "na odpierdol", "na taśmie do produkcji", "na kościelnej ławie", "na wybrzerzu helskim", "na wybrzerzu gdanskim niedaleko stoczni", "na kursorze w komputerze", "na pasku zadań", "na wczasach", "na kursie java skryptu", "na zajenciach z polonistyki", "na dyskotece fajnej", "na śmiesznej herbacie", "na wysypisku guwna", "na urlopie wypoczynkowym", "na wyjściu do sklepu", "na podkładce pod myszke", "na telewizorze", "na fotelu", "na lerzaku", "na antresoli", "na mieście", "na rybach", "na jajcach", "na niczym ciekawym", "na koniu jadąc", "na pokładzie samolotu", "na worku złota", "na kocim grzbiecie", "na ikonie muj komputer", "na koncercie", "na wycieczce", "na piwku", "na wylocie", "na krześle", "na żarty", "na temblaku", "na posterunku", "na komendzie policji"],
    jakco = ["jak jakiś skrót", "jak galareta", "jak jakiś chuj", "jak jakaś ryba", "jak jakieś jajo", "jak jakaś herbata czarna", "jak jakiś kalkulator", "jak dziki pies", "jak jakiś bobas", "jak kurczak", "jak pan policjant", "jak cienrzaruwka na granicy", "jak jakiś piwosz", "jak jakiś suoik", "jak nie wiem co", "jak jakiś debil", "jak kursor na folderze", "jak mikroprocesor", "jak bezrobotny", "jak jakiś glut", "jakoś ostatkiem sił", "jak puszka piwa", "jak jakiś napis albo obrazek", "jak okrent morski", "jak zimna fala loduwki", "jak ciepua fala kuchenki", "jak jakaś picca", "jak kebab", "jak jakiś jubilat", "jak pieczywo w torbie", "jak trujoncy grzyb", "jak niebezpieczny wonrz", "jak donald tramp", "jak stary anona", "jak jan papiesz", "jak papierosek ciepły", "jak smaczny obiad", "jak pan lis", "jak byle co", "jak ciapaja", "jak rarug", "jak szafeczka", "jak jakiś interfejs", "jak android", "jak jakaś pani w sklepie", "jak pieniondz w portfelu"],
    nazywamsie = ["moja godność to", "mam na imie", "nazywam sie", "posuchaj ja nazywam sie", "muj gatunek to", "ten awatar nazywa sie", "moja klasa obiektu to", "dzieci muwiom rze jestem", "w dowodzie mam wpisane", "muwiom do mnie", "moja nazwa usługi to", "moja data warzności to", "nazwa tego pliku", "karzdy katolik to", "godność moja to", "moje imie i nazwisko brzmi", "moja nazwa to", "moja domenta to", "moja marka to", "muj znak firmowy to", "muj adres emajl to", "nazywam sie", "ja nazywam sie", "muw do mnie", "ja nazywam sie", "mam na nazwisko", "muj adres to"],
    nazwa = ["ciapaja", "cichy nabiau", "guwno", "karabinek", "jeremiasz", "ojciec jeremiasz", "mieszadełko", "pozdrowionka", "ściskacz", "telefon sony xperia", "karta pamięci", "ciągniczek", "ciepła zupka i zimne spodnie", "sopel lodu", "uty do tańca", "kolorowy balonik", "piotrek", "leszek", "ukasz", "kinga", "agnieszka", "julka", "wojtek", "chlebek", "smutny chlebek", "bułeczka z serkiem", "traktorek", "korporacja finansowa", "polska firma", "platforma android", "bluza z kapturem", "elektroodpady", "robinson krauze", "zakuad ubezpieczeń", "wampir", "urzytkownik fejsbuka", "adresat poczty", "nadawca przesyłki", "rower gurski", "zły pies", "zwionzek radziecki", "karabin maszynowy", "katolik polski", "stary gajowy", "twuj komputer", "moja mama", "fasola czerwona", "czekoladka", "cukiereczek", "siusiaczek", "dupeczka", "okienko", "miska z ryrzem", "ruski agent", "plastusiowy pamientnik", "nasza klasa", "piosenkarz polski", "kobieta pracujonca", "systemowy buond", "piotrek pucieniczak", "krul polski", "wioleta wilas", "statusiarz jeden", "poszukiwany bandyta", "niebezpieczny pajonk", "głodna osa"],
    wczym = ["w majonezie", "w sklepie sporzywczym", "w dupie", "w korytarzu", "w budce wikinga", "w ziemniaku", "w garnku ziemniakuw", "w ponurej okolicy", "w czasie", "w egipskim kurorcie", "w rosji putinoskiej", "w twojej guowie", "w twoim domu", "w morzu bałtyckim", "u adama i martyny", "w krakowie", "w bibliotece naukowej", "w przychodni lekarskiej", "w chlewie jakimś", "w samolocie do polski", "w pociongu osobowym", "w niczym", "w kosmosie", "w obozie uchodzcuw", "w samochodzie", "w tajdze", "w lesie", "w gradiencie", "w galeri sztuki", "w ciemnej ulicy", "w wojewudztwie pomorskim", "w kopalni głemboko", "w pamienci ram komputera", "w ksionrzce do historii", "w ramach prawa", "w przestrzeni", "w jenzyku polskim", "w podrurzy", "w trakcie antraktu", "w czasie koncertu", "w czystym łurzku", "w łurzku z tobom", "w dawnej stolicy", "w czasie suszy", "w moim pokoju"],
    jestem = ["przebywam obecnie", "spendzam czas", "jestem zameldowany", "zaznaczam okienko", "zarzywam urlopu", "mieszkam", "jem obiady", "buduje domek", "szczelam z pistoletu", "mam zameldowanie", "mam zgode na pobyt", "mam adres", "mam adres zameldowania", "mam zezwolenie na pobyt", "mam karte mieszkańca", "mam mieszkanie", "przebywam obecnie", "jestem teras", "jestem", "rzyje", "rzyje i mam sie dobrze", "przebywam teraz", "odbywam wyrok", "egzystuje"],
    czesc = ["cześć", "witam ciepło", "witam serdecznie", "dzień dobry", "dobry wieczur", "prosze zapraszam", "dobry dzień", "szanowni goście", "cześć witajcie", "witam", "jak sie macie", "no cześć", "hej", "no witam", "witam tutaj", "prosze siadać", "no hejka", "halo", "dzien dobry", "hej hej"];

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
        coBedzie = losujCos(6);
    switch (coBedzie) {
    case 0:
        status = robie[losrobie] + " " + jakco[losjakco];
        break;
        case 1:
        status = robie[losrobie] + " " + jakco[losjakco] + " " + naczym[losnaczym];
        break;
        case 2:
        status = nazywamsie[losnazywamsie] + " " + nazwa[losnazwa];
        break;
        case 3:
        status = czesc[losczesc] + " " + nazywamsie[losnazywamsie] + " " + nazwa[losnazwa];
        break;
        case 4:
        status = czesc[losczesc] + " " + jestem[losjestem] + " " + wczym[loswczym];
        break;
        case 5:
        status = jestem[losjestem] + " " + jakco[losjakco];
        break;
    }
    $("#generator").html(status);
};

// powiedz
var powiedz = function (status) {
    meSpeak.speak(status, {speed: 150});
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
        setTimeout(nabialator, 6000);
    };

$(document).ready(function () {
    "use strict";
    meSpeak.loadConfig("mespeak_config.json");
    meSpeak.loadVoice('pl.json');
    kolorki();
    nabialator();
});


