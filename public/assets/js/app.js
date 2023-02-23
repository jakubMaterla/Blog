function odliczanie()
{
    var date = new Date();

    var dzien = date.getDate()
    var miesiac = date.getMonth();
    var rok = date.getFullYear();
    miesiac = miesiac+1;
    if(miesiac<10) miesiac = "0"+ miesiac;
    if (dzien<10) dzien = "0"+dzien;

    var godz = date.getHours();
    if (godz<10) godz="0"+godz;
    var min = date.getMinutes();
    if (min<10) min="0"+min;
    var sek = date.getSeconds();
    if (sek<10) sek="0"+sek;

    document.querySelector("#zegar h1").innerHTML = godz + ":" + min + ":" + sek;
    document.querySelector("h4").innerHTML = dzien + "." + miesiac + "." + rok;

    setTimeout("odliczanie()", 999);
}

