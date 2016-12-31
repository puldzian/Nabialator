/*global $*/

var status = "nie mam jeszcze statusu",
    robie = ["śpie", "siedze", "stoje", "licze walute", "robie kupe", "masuje głowe", "pije sobie herbate", "jem kanapke", "odpoczywam", "zarzywam odpoczynku", "dobrze sie bawie", "trenuje", "martwie sie", "ładuje telefon", "sprawdzam poczte", "sprawdzam powiadomienia", "jem zupe", "zalewam vifona", "tresuje pająka", "podpinam ładowarke", "oglądam serial", "jem jajo", "jem majonez", "czytam ebuka", "czytam statusy", "patrze w nabiau", "robie", "gnije", "pokrywam sie pleśniom", "grzybieje", "martwie sie bardzo", "myje sie", "obcinam paznokcie", "co ja w ogule robie", "siedze", "lerze", "robie coś", "odpoczywam", "tak sobie przysiadłem", "mam wolnom chwilke", "skradam sie powoli", "rozkładam posłanie", "toleruje ciebie", "oglondam komputer", "patrze na pieniondze", "czytam smsy", "oglondam selfiki", "boli mnie dupa", "mam bul dupy", "mam durzo pracy"],
    naczym = ["na tapczanie", "na klawiaturze", "na wersalce", "na kutasie", "na kontenerze", "na lotnisku krakuw balice", "na umowie cywilnej", "na umowie o dzieuo", "na notatniku", "na papierosku", "na gugle mapsie", "na serwerze pocztowym", "na bazie teleadresowej", "na telefonie", "na wysypisku odpaduw", "na odpierdol", "na taśmie do produkcji", "na kościelnej ławie", "na wybrzerzu helskim", "na wybrzerzu gdanskim niedaleko stoczni", "na kursorze w komputerze", "na pasku zadań", "na wczasach", "na kursie java skryptu", "na zajenciach z polonistyki", "na dyskotece fajnej", "na śmiesznej herbacie", "na wysypisku guwna", "na urlopie wypoczynkowym", "na wyjściu do sklepu", "na podkładce pod myszke", "na telewizorze", "na fotelu", "na lerzaku", "na antresoli", "na mieście", "na rybach", "na jajcach", "na niczym ciekawym", "na koniu jadąc", "na pokładzie samolotu", "na worku złota", "na kocim grzbiecie", "na ikonie muj komputer", "na koncercie", "na wycieczce", "na piwku", "na wylocie", "na krześle", "na żarty", "na temblaku", "na posterunku", "na komendzie policji"],
    jakco = ["jak jakiś skrót", "jak galareta", "jak jakiś chuj", "jak ryba", "jak jajo", "jak czarna herbata", "jak kalkulator", "jak dziki pies", "jak bobas", "jak kurczak", "jak pan policjant", "jak cienrzaruwka", "jak ponury piwnik", "jak suoik warszawski", "jak nie wiem co", "jak jakiś debil", "jak kursor na folderze", "jak mikroprocesor", "jak bezrobotny", "jak glut z nosa", "ostatkiem sił", "jak puszka piwa", "jak jakiś napis albo obrazek", "jak okrent morski", "jak zimna fala loduwki", "jak ciepua fala kuchenki", "jak jakaś picca", "jak kebab", "jak jakiś jubilat", "jak pieczywo w torbie", "jak trujoncy grzyb", "jak niebezpieczny wonrz", "jak donald tramp", "jak stary anona", "jak jan papiesz", "jak ciepły papierosek", "jak smaczny obiad", "jak pan lis", "jak byle co", "jak ciapaja", "jak rarug", "jak szafeczka", "jak jakiś interfejs", "jak android", "jak pani w sklepie", "jak pieniondz w portfelu"],
    nazywamsie = ["moja godność to", "mam na imie", "nazywam sie", "posuchaj ja nazywam sie", "muj gatunek to", "ten awatar nazywa sie", "moja klasa obiektu to", "dzieci muwiom rze jestem", "w dowodzie mam wpisane", "muwiom do mnie", "moja nazwa usługi to", "moja data warzności to", "nazwa tego pliku to", "karzdy katolik to", "godność moja to", "moje imie i nazwisko brzmi", "moja nazwa to", "moja domena to", "moja marka to", "muj znak firmowy to", "muj adres emajl to", "nazywam sie", "ja nazywam sie", "muw do mnie", "ja nazywam sie", "mam na nazwisko", "muj adres to", "karzdy robotnik to", "niekarzdy polak to", "muj zawud to"],
    nazwa = ["ciapaja", "cichy nabiau", "guwno", "karabinek", "jeremiasz", "ojciec jeremiasz", "mieszadełko", "pozdrowionka", "ściskacz", "telefon sony xperia", "karta pamięci", "ciągniczek", "ciepła zupka i zimne spodnie", "sopel lodu", "buty do tańca", "kolorowy balonik", "piotrek", "leszek", "uukasz", "kinga", "agnieszka", "julka", "wojtek", "chlebek", "smutny chlebek", "bułeczka z serkiem", "traktorek", "korporacja finansowa", "polska firma", "platforma android", "bluza z kapturem", "elektroodpady", "robinson krauze", "zakuad ubezpieczeń", "wampir", "urzytkownik fejsbuka", "adresat poczty", "nadawca przesyłki", "rower gurski", "zły pies", "zwionzek radziecki", "karabin maszynowy", "katolik polski", "stary gajowy", "twuj komputer", "moja mama", "fasola czerwona", "czekoladka", "cukiereczek", "siusiaczek", "dupeczka", "okienko", "miska z ryrzem", "ruski agent", "plastusiowy pamientnik", "nasza klasa", "piosenkarz polski", "kobieta pracujonca", "systemowy buond", "piotrek pucieniczak", "krul polski", "wioleta wilas", "statusiarz jeden", "poszukiwany bandyta", "niebezpieczny pajonk", "głodna osa"],
    wczym = ["w majonezie", "w sklepie sporzywczym", "w dupie", "w korytarzu", "w budce wikinga", "w ziemniaku", "w garnku ziemniakuw", "w ponurej okolicy", "w czasie", "w egipskim kurorcie", "w rosji putinoskiej", "w twojej guowie", "w twoim domu", "w morzu bałtyckim", "u adama i martyny", "w krakowie", "w bibliotece naukowej", "w przychodni lekarskiej", "w chlewie jakimś", "w samolocie do polski", "w pociongu osobowym", "w niczym", "w kosmosie", "w obozie uchodzcuw", "w samochodzie", "w tajdze", "w lesie", "w gradiencie", "w galeri sztuki", "w ciemnej ulicy", "w wojewudztwie pomorskim", "w kopalni głemboko", "w pamienci ram komputera", "w ksionrzce do historii", "w ramach prawa", "w przestrzeni", "w jenzyku polskim", "w podrurzy", "w trakcie antraktu", "w czasie koncertu", "w czystym łurzku", "w łurzku z tobom", "w dawnej stolicy", "w czasie suszy", "w moim pokoju"],
    jestem = ["przebywam obecnie", "spendzam czas", "jestem zameldowany", "zaznaczam okienko", "zarzywam urlopu", "mieszkam", "jem obiady", "buduje domek", "szczelam z pistoletu", "mam zameldowanie", "mam zgode na pobyt", "mam adres", "mam adres zameldowania", "mam zezwolenie na pobyt", "mam karte mieszkańca", "mam mieszkanie", "przebywam obecnie", "jestem teras", "jestem", "rzyje", "rzyje i mam sie dobrze", "przebywam teraz", "odbywam wyrok", "egzystuje"],
    czesc = ["cześć", "witam ciepło", "witam serdecznie", "dzień dobry", "dobry wieczur", "prosze zapraszam", "dobry dzień", "szanowny gościu", "cześć witaj", "witam", "jak sie masz", "no cześć", "hej", "no witam", "witam tutaj", "prosze siadać", "no hejka", "halo", "dzień dobry", "hej hej", "halo kolego"],
    duch = ["duch", "grzyb", "obywatel", "przedmiot", "komputer", "utwur", "teledysk", "garnek", "talerz", "prezydent", "akumulator", "tablet", "kontomierz", "malarz", "pistolet", "magiczny garnek", "kalafior", "bigos", "alkomat", "policjant", "rzołnierz", "literat", "proboszcz", "inspektor", "owoc", "katamaran", "kapelusz", "grzybek", "teściowa", "wisuawa szymborska", "cichy nabiau"],
    ziemia = ["ziemi", "zupy", "kanapy", "maupy", "planety", "krainy", "gminy", "pościeli", "okolicy", "choinki", "stonogi", "wanny", "ściany", "brody", "rzyletki", "tragedii", "aplikacji", "fortuny", "miejscowości", "osady", "dzielnicy", "potrawy", "kapusty", "obory", "wsi", "wioski", "ulicy", "przestrzeni", "doliny", "fabryki", "klasyki", "rzeki", "baterii", "kopalni", "publiczności", "ciamajdy", "podrurzy", "wycieczki", "nocy", "imprezy"],
    pigulka = ["pigułke", "kanapke", "tabletke", "globulke", "kreseczke", "strzykawke", "truskawke", "kapuste", "zupke", "drugie danie", "zielone", "piwo", "kutasa", "kaktusa", "baterie", "maryhuane", "koruta", "wudke"],
    osobo = ["osobo", "kobieto", "menszczyzno", "głowo", "piesku", "kotku", "chomiczku", "jaszczurko", "wampirze", "piesko", "kocia mamo", "dziewucho", "dziewczyno", "lizaku", "wariacie", "wariatko", "petardo", "chorobo", "piotrek", "alicjo", "kolerzanko", "kolego", "ziomku", "koleszko", "humanistko", "filozofie", "panie doktorze", "pani dokturowa"],
    swiat = ["ych świont", "ego nowego roku", "ych rodzinnych świont", "ych imienin", "ych urodzin", "ego roku 2014", "ego roku 2017", "ych świont borzego narodzenia", "ego świenta hanuka", "ego ramadanu", "ego dnia ojca", "ego nowego roku", "ych dorzynek", "ych wyboruw prezydenckich", "ego jajeczka", "ego dyngusa", "ych jajkuw", "ych kaloryferuw", "ego dnia mamy", "ego dnia babci", "ego dnia dziatka", "ego dnia polaka", "ych zakupuw w sklepie", "ego pobytu w toalecie"],
    wesolych = ["wesoł", "ciepł", "rodzinn", "udan", "szczenśliw", "zdrow", "urocz", "bardzo fajn", "mił", "zabawn", "fajn"],
    pocaluj = ["pocałuj", "polirz", "posmyraj", "pocauuj", "pouaskocz", "kopnij", "posmakuj", "jebnij", "klepnij", "ugryź", "kliknij", "posmaruj", "posmyraj", "pocałuj", "pokonaj", "dotknij"],
    mnie = ["mnie", "sie", "jom", "go", "siebie", "czuowieka", "chuopaka", "dziewczyne"],
    wdupe = ["w dupe", "w brzuch", "w głowe", "w renke", "w noge", "w oko", "w ucho", "w odbytnice", "w odbyt", "w wontrobe", "w kiszke", "we włosy"],
    zyczeci = ["rzycze ci", "rzycze tobie"],
    wez = ["weź", "zjedz", "daj", "podaj", "oddaj", "utnij mi"],
    jedzenie = ["zupa", "drugie danie", "kapusta", "rosuł", "bigos", "sernik", "makowiec", "kotlet schabowy", "ziemniaki", "sałatka kolesuaw", "pierogi ruskie", "pierogi ze serem", "krupnik", "kapuśniak", "kremuwka", "wuzetka", "herbatniki", "kotlet mielony", "flaki", "kieubasa", "ciasto francuskie", "ponczki", "drorzdżuwka", "groch z kapustom", "grochuwka", "zupa fasolowa", "suszi", "śledzik w occie", "wegańskie suszi", "burger sojowy", "hamburger", "sałatka cezara", "kurczak pieczony", "kluski ślonskie", "kopytka", "ryż", "sajgonki", "frytki", "lody waniliowe", "frytki belgijskie", "frytki polskie", "tabletka na bul guowy", "kotlet mielony", "zrazy wouowe", "zawijany ser", "serdel", "paruwka sojowa", "kanapka z pomidorem", "czipsy solone", "czipsy paprykowe", "czekolada", "bita śmietana", "eskalopki", "galareta", "karp", "pstrong z grila", "tofu z warzywami", "zupka chińska", "zupka ser w ziołach", "zapiekanka", "zupa jarzynowa", "zupa warzywna", "zupa gospodarcza", "krem z dyni", "kotleciki sojowe", "pulpety w sosie", "szproty podwendzane", "makrela wendzona", "herbata z cytrynom", "kawa z mlekiem", "paluszki rybne", "filet z ryby", "filet z kurczaka", "bułka", "chlebuś z masłem", "suchy chlebuś", "kanapka ze serem", "kanapka z pasztetem", "paszteciki", "barszcz czerwony", "barszcz biały", "rzur", "ramen z jajkiem", "jajecznica", "jajko sadzone", "krupnik", "japko", "kimczi", "kurczak w sezamie", "kasza gryczana", "kasza jaglana", "kuskus", "serek wiejski", "jogurt", "herbata owocowa"],
    potrawe = ["śniadanie", "obiat", "kolacje", "potwieczorek", "deser", "lancz", "brancz", "drugie śniadanie", "wieczerze", "jedzenie"],
    dzisiaj = ["dzisiaj", "jutro", "pojutrze", "popojutrze", "w poniedziauek", "we wtorek", "w sirode", "we czwartek", "w piontek", "w sobote", "w niedziele", "kiedyś", "może jutro"],
    zjem = ["zjem", "poukne", "włorze sobie do gemby", "zjedz", "pouknij", "wysraj", "ugotuj", "usmarz", "ugotuj", "zjedz", "zaraz zjem", "usmarze", "ugotuje", "zjem", "smakuje mi"],
    lezy = ["lerzy", "siedzi", "mieszka", "rzyje", "przebywa"],
    uwaga = ["uwaga", "ahtung", "alarm", "uwarzaj bo", "ostrorznie", "prosze o uwage", "posuchaj mnie", "miej baczenie", "darz bur", "czuwaj", "ahoj", "suchaj no"],
    wpada = ["wpada", "wpuywa", "spada", "leci", "odpuywa", "odchodzi", "wychodzi", "schodzi", "ścieka", "puynie", "przesuwa sie", "porusza sie", "zmierza", "podrurzuje", "dochodzi"];

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
    var ileTego = losujCos(6);
    var numer1 = losujCos(183);
    var numer2 = losujCos(183);
    var numer3 = losujCos(183);
    var numer4 = losujCos(183);
    var numer5 = losujCos(183);
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
    var ww = losujCos(w);
    var hh = losujCos(h);
    document.getElementById("img4").style.bottom=hh;
    document.getElementById("img4").style.right=ww;
    document.getElementById("img4").style.backgroundImage="url(img/" + numer4 + ".png)";
    var ww = losujCos(w);
    var hh = losujCos(h);
    document.getElementById("img5").style.bottom=hh;
    document.getElementById("img5").style.right=ww;
    document.getElementById("img5").style.backgroundImage="url(img/" + numer5 + ".png)";
    ileTegoDawac = losujCos(6);
    switch (ileTego) {
      case(0):
            document.getElementById("img1").style.display="true";
            document.getElementById("img2").style.display="true";
            document.getElementById("img3").style.display="none";
            document.getElementById("img4").style.display="none";
            document.getElementById("img5").style.display="none";
            break;
        case(1):
            document.getElementById("img1").style.display="true";
            document.getElementById("img2").style.display="true";
            document.getElementById("img3").style.display="none";
            document.getElementById("img4").style.display="none";
            document.getElementById("img5").style.display="none";
            break;
        case(2):
            document.getElementById("img1").style.display="true";
            document.getElementById("img2").style.display="true";
            document.getElementById("img3").style.display="true";
            document.getElementById("img4").style.display="none";
            document.getElementById("img5").style.display="none";
            break;
        case(3):
            document.getElementById("img1").style.display="true";
            document.getElementById("img2").style.display="true";
            document.getElementById("img3").style.display="true";
            document.getElementById("img4").style.display="none";
            document.getElementById("img5").style.display="none";
            break;
        case(4):
            document.getElementById("img1").style.display="true";
            document.getElementById("img2").style.display="true";
            document.getElementById("img3").style.display="true";
            document.getElementById("img4").style.display="true";
            document.getElementById("img5").style.display="none";
            break;
        case(5):
            document.getElementById("img1").style.display="true";
            document.getElementById("img2").style.display="true";
            document.getElementById("img3").style.display="true";
            document.getElementById("img4").style.display="true";
            document.getElementById("img5").style.display="true";
        break;
    }
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
        duchMax = duch.length,
        losduch = losujCos(duchMax),
        ziemiaMax = ziemia.length,
        losziemia = losujCos(ziemiaMax),
        pigulkaMax = pigulka.length,
        lospigulka = losujCos(pigulkaMax),
        osoboMax = osobo.length,
        lososobo = losujCos(osoboMax),
        wesolychMax = wesolych.length,
        loswesolych = losujCos(wesolychMax),
        swiatMax = swiat.length,
        losswiat = losujCos(swiatMax),
        pocalujMax = pocaluj.length,
        lospocaluj = losujCos(pocalujMax),
        mnieMax = mnie.length,
        losmnie = losujCos(mnieMax),
        wdupeMax = wdupe.length,
        loswdupe = losujCos(wdupeMax),
        zyczeciMax = zyczeci.length,
        loszyczeci = losujCos(zyczeciMax),
        wezMax = wez.length,
        loswez = losujCos(wezMax),
        jedzenieMax = jedzenie.length,
        losjedzenie = losujCos(jedzenieMax),
        losjedzenie2 = losujCos(jedzenieMax),
        losjedzenie3 = losujCos(jedzenieMax),
        potraweMax = potrawe.length,
        lospotrawe = losujCos(potraweMax),
        dzisiajMax = dzisiaj.length,
        losdzisiaj = losujCos(dzisiajMax),
        zjemMax = zjem.length,
        loszjem = losujCos(zjemMax),
        lezyMax = lezy.length,
        loslezy = losujCos(lezyMax),
        uwagaMax = uwaga.length,
        losuwaga = losujCos(uwagaMax),
        wpadaMax = wpada.length,
        loswpada = losujCos(wpadaMax),
        // losuj z liczby case'ów - 1
        coBedzie = losujCos(25);
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
        case 6:
        status = "niech zstompi " + duch[losduch] + " twuj i odnowi oblicze tej " + ziemia[losziemia];
        break;
        case 7:
        status = czesc[losczesc] + " " + osobo[lososobo];
        break;
        case 8:
        status = wez[loswez] + " " + pigulka[lospigulka];
        break;
        case 9:
        status = nazywamsie[losnazywamsie] + " " + duch[losduch];
        break;
        case 10:
        status = uwaga[losuwaga] + " " + jedzenie[losjedzenie] + " " + wpada[loswpada] + " do " + ziemia[losziemia];
        break;
        case 11:
        status = jestem[losjestem] + " " + naczym[losnaczym];
        break;
        case 12:
        status = "oto " + duch[losduch];
        break;
        case 13:
        status = wesolych[loswesolych] + swiat[losswiat];
        break;
        case 14:
        status = pocaluj[lospocaluj] + " " + mnie[losmnie] + " " + wdupe[loswdupe];
        break;
        case 15:
        status = pocaluj[lospocaluj] + " " + mnie[losmnie] + " " + jakco[losjakco];
        break;
        case 16:
        status = pocaluj[lospocaluj] + " " + mnie[losmnie] + " " + wdupe[loswdupe] + " " + osobo[lososobo];
        break;
        case 17:
        status = zyczeci[loszyczeci] + " " + wesolych[loswesolych] + swiat[losswiat];
        break;
        case 18:
        status = "na" + " " + potrawe[lospotrawe] + " " + dzisiaj[losdzisiaj] + " " + jedzenie[losjedzenie];
        break;
        case 19:
        status = zjem[loszjem] + " " + jedzenie[losjedzenie] + " na "+ potrawe[lospotrawe] + " " + jakco[losjakco];
        break;
        case 20:
        status = zjem[loszjem] + " " + jedzenie[losjedzenie] + " " + jedzenie[losjedzenie2] + " i " + jedzenie[losjedzenie3];
        break;
        case 21:
        status = nazywamsie[losnazywamsie] + " " + jedzenie[losjedzenie] + " albo " + nazwa[losnazwa];
        break;
        case 22:
        status = jedzenie[losjedzenie] + " " + naczym[losnaczym];
        break;
        case 23:
        status = duch[losduch] + " " + lezy[loslezy] + " " + naczym[losnaczym];
        break;
    }
    $("#generator").html(status);
};

// powiedz
var powiedz = function (status) {
    meSpeak.speak(status, {speed: 130});
}

var uruchamiacz = function () {
    nabialator();
}

// funcja główna
var nabialator = function () {
        // wygas scene
        document.getElementById("intro").style.display="none";
        document.getElementById("introsub").style.display="none";
        document.getElementById("start").style.display="none";
        // włącz muzyke
        // zmien status
        generator();
        // zmien obrazki
        obrazki();
        // rozjasnij scene
        // przeczytaj status
        powiedz(status);
        // setTimeout(powiedz, 1000);
        // zacznij od nowa
        setTimeout(nabialator, 4500);
    };

$(document).ready(function () {
    "use strict";
    meSpeak.loadConfig("mespeak_config.json");
    meSpeak.loadVoice('pl.json');
    kolorki();
//    nabialator();
});


