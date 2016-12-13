/*global $*/

// Zbiór wyrazów
var status = "nie ma jeszcze statusu",
    robie = ["leżę", "siedzę", "stoję", "rucham", "robię kupę", "masuję głowę", "piję herbatę"],
    robieMax = robie.length,
    losrobie,
    naczym = ["na tapczanie", "na klawiaturze", "na wersalce", "na chuju", "na towarze", "na lodowisku", "na zleceniu", "na umowie o dzieło", "na feju", "na fajce"],
    naczymMax = naczym.length,
    losnaczym,
    jakco = ["jak jakiś skrót", "jak galareta", "jak kawał chuja", "jak węgorz w piździe", "jak jajo w majonezie", "jak herbata"],
    jakcoMax = jakco.length,
    losjakco,
    // img1 = document.getElementsByClassName("img1"),
    img2 = document.getElementsByClassName("img2"),
    img3 = document.getElementsByClassName("img3"),
    img4 = document.getElementsByClassName("img4"),
    img5 = document.getElementsByClassName("img5"),
    losimg1,
    losimg2,
    losimg3,
    losimg4,
    losimg5;

// Funkcje
var losujCos = function (n) {
        return Math.floor(Math.random() * (n));
    },
    czynnoscnajak = function () {
        // generator podstawowego statusu
        // ja robię + na czymś + jak
        losrobie = losujCos(robieMax),
        losnaczym = losujCos(naczymMax),
        losjakco = losujCos(jakcoMax);
        status = robie[losrobie] + " " + naczym[losnaczym] + " " + jakco[losjakco];
        $(".generator").html(status);
    },
    powiedz = function () {
        responsiveVoice.speak(status, "Polish Female");
    },
    pokazObrazki = function () {
        // tu będzie losowanie, póki co wyjebane
        var img = document.createElement("img");
        img.src = "img/01.png";
        img.id = "picture";
        var img1 = document.getElementsById("img1");
        img1.appendChild(img);

    }



/*function image()
{
    //dynamically add an image and set its attribute
    var img=document.createElement("img");
    img.src="p1.jpg"
    img.id="picture"
    var foo = document.getElementById("fooBar");
    foo.appendChild(img);
}

<span id="fooBar">&nbsp;</span>*/






// Jedziemy
$(document).ready(function () {
    "use strict";
    czynnoscnajak();
    pokazObrazki();
    setTimeout(powiedz, 600)

});
