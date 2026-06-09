var intesszamegy = 0;
var intesszamketto = 0;
var intesszamharom = 0;
var intesszamnegy = 0;
var intesszamot = 0;
var intesszamhat = 0;

var elsoosszeg = 0;
var masodikosszeg = 0;
var harmadikosszeg = 0;
var negyedikosszeg = 0;
var otodikosszeg = 0;
var hatodikosszeg = 0;

var elsoszin = "";
var masodikszin = "";
var harmadikszin = "";
var negyedikszin = "";
var otodikszin = "";
var hatodikszin = "";

var elsonev = "";
var masodiknev = "";
var harmadiknev = "";
var negyediknev = "";
var otodiknev = "";
var hatodiknev = "";

var ertek = 0;

var elojel = "";
var szazalek = "";
var szazalekertekben = 0;

var szamolo = 1;

function plusnavscriptHover() {
  document.getElementById("plusicon").style.animation = "forgas";
  document.getElementById("plusicon").style.animationDuration = "1s";
  document.getElementById("plusicon").style.filter =
    "invert(84%) sepia(9%) saturate(1602%) hue-rotate(95deg) brightness(99%) contrast(88%)";
}

function gamenavscriptHover() {
  document.getElementById("gameicon").style.animation = "forgas";
  document.getElementById("gameicon").style.animationDuration = "1s";
  document.getElementById("gameicon").style.filter =
    "invert(84%) sepia(9%) saturate(1602%) hue-rotate(95deg) brightness(99%) contrast(88%)";
}

function plusnavscript() {
  document.getElementById("plusicon").style.animation = "";
  document.getElementById("plusicon").style.animationDuration = "";
  document.getElementById("plusicon").style.filter = "";
}

function gameplusnavscript() {
  document.getElementById("gameicon").style.animation = "";
  document.getElementById("gameicon").style.animationDuration = "";
  document.getElementById("gameicon").style.filter = "";
}

function eltuntet() {
  setTimeout(function () {
    document.getElementById("szinesform").style.borderBottom = "";
    document.getElementById("name").style.color = "";
    document.getElementById("name").style.borderRight = "";
    document.getElementById("hozzaadgomb").style.backgroundColor = "";
    document.getElementById("hozzaadgomb").style.color = "";
    document.getElementById("name").value = "";
  }, 1000);
}

function jatekosHozzaadasa() {
  var szin = document.getElementById("szin").value;
  var table = document.getElementById("tabla");
  var option = document.createElement("option");
  var beirtnev = document.getElementById("name").value;
  var kezdoosszeg = document.getElementById("osszeg").value;
  var kezdoosszegDarabolt = parseInt(kezdoosszeg).toLocaleString();
  option.text = document.getElementById("name").value;

  if (szamolo == 7) {
    document.getElementById("szinesform").style.borderBottom =
      "1px solid #AC6060";
    document.getElementById("name").style.color = "#AC6060";
    document.getElementById("name").style.borderRight = "1px dashed #AC6060";
    document.getElementById("hozzaadgomb").style.backgroundColor = "#AC6060";
    document.getElementById("hozzaadgomb").style.color = "black";
    eltuntet();
    setTimeout(function () {
      window.alert("A szabályzat szerint maximum 6 ember játszhat");
    }, 500);
  }
  if (szamolo == 6) {
    document.getElementById("szinesform").style.borderBottom =
      "1px solid #80e5b2";
    document.getElementById("name").style.color = "#80e5b2";
    document.getElementById("name").style.borderRight = "1px dashed #80e5b2";
    document.getElementById("hozzaadgomb").style.backgroundColor = "#80e5b2";
    document.getElementById("hozzaadgomb").style.color = "black";
    eltuntet();

    hatodiknev = beirtnev;
    intesszamhat = kezdoosszeg;
    hatodikszin = szin;
    table.rows[6].cells.item(1).innerHTML = hatodiknev;
    table.rows[6].cells.item(2).innerHTML = kezdoosszegDarabolt;
    document.getElementById("hatodikcheck").style.backgroundColor = hatodikszin;
    szamolo++;
  }
  if (szamolo == 5) {
    document.getElementById("szinesform").style.borderBottom =
      "1px solid #80e5b2";
    document.getElementById("name").style.color = "#80e5b2";
    document.getElementById("name").style.borderRight = "1px dashed #80e5b2";
    document.getElementById("hozzaadgomb").style.backgroundColor = "#80e5b2";
    document.getElementById("hozzaadgomb").style.color = "black";
    eltuntet();

    otodiknev = beirtnev;
    intesszamot = kezdoosszeg;
    otodikszin = szin;
    table.rows[5].cells.item(1).innerHTML = otodiknev;
    table.rows[5].cells.item(2).innerHTML = kezdoosszegDarabolt;
    document.getElementById("otodikcheck").style.backgroundColor = otodikszin;
    szamolo++;
  }
  if (szamolo == 4) {
    document.getElementById("szinesform").style.borderBottom =
      "1px solid #80e5b2";
    document.getElementById("name").style.color = "#80e5b2";
    document.getElementById("name").style.borderRight = "1px dashed #80e5b2";
    document.getElementById("hozzaadgomb").style.backgroundColor = "#80e5b2";
    document.getElementById("hozzaadgomb").style.color = "black";
    eltuntet();

    negyediknev = beirtnev;
    intesszamnegy = kezdoosszeg;
    negyedikszin = szin;
    table.rows[4].cells.item(1).innerHTML = negyediknev;
    table.rows[4].cells.item(2).innerHTML = kezdoosszegDarabolt;
    document.getElementById("negyedikcheck").style.backgroundColor =
      negyedikszin;
    szamolo++;
  }
  if (szamolo == 3) {
    document.getElementById("szinesform").style.borderBottom =
      "1px solid #80e5b2";
    document.getElementById("name").style.color = "#80e5b2";
    document.getElementById("name").style.borderRight = "1px dashed #80e5b2";
    document.getElementById("hozzaadgomb").style.backgroundColor = "#80e5b2";
    document.getElementById("hozzaadgomb").style.color = "black";
    eltuntet();

    harmadiknev = beirtnev;
    intesszamharom = kezdoosszeg;
    harmadikszin = szin;
    table.rows[3].cells.item(1).innerHTML = harmadiknev;
    table.rows[3].cells.item(2).innerHTML = kezdoosszegDarabolt;
    document.getElementById("harmadikcheck").style.backgroundColor =
      harmadikszin;
    szamolo++;
  }
  if (szamolo == 2) {
    document.getElementById("szinesform").style.borderBottom =
      "1px solid #80e5b2";
    document.getElementById("name").style.color = "#80e5b2";
    document.getElementById("name").style.borderRight = "1px dashed #80e5b2";
    document.getElementById("hozzaadgomb").style.backgroundColor = "#80e5b2";
    document.getElementById("hozzaadgomb").style.color = "black";
    eltuntet();

    masodiknev = beirtnev;
    intesszamketto = kezdoosszeg;
    masodikszin = szin;
    table.rows[2].cells.item(1).innerHTML = masodiknev;
    table.rows[2].cells.item(2).innerHTML = kezdoosszegDarabolt;
    document.getElementById("masodikcheck").style.backgroundColor = masodikszin;
    szamolo++;
  }
  if (szamolo == 1) {
    document.getElementById("szinesform").style.borderBottom =
      "1px solid #80e5b2";
    document.getElementById("name").style.color = "#80e5b2";
    document.getElementById("name").style.borderRight = "1px dashed #80e5b2";
    document.getElementById("hozzaadgomb").style.backgroundColor = "#80e5b2";
    document.getElementById("hozzaadgomb").style.color = "black";
    eltuntet();

    elsonev = beirtnev;
    intesszamegy = kezdoosszeg;
    elsoszin = szin;
    table.rows[1].cells.item(1).innerHTML = elsonev;
    table.rows[1].cells.item(2).innerHTML = kezdoosszegDarabolt;
    document.getElementById("elsocheck").style.backgroundColor = elsoszin;
    szamolo++;
  }
}

function jatekosTorlese() {
  var table = document.getElementById("tabla");

  if (szamolo == 2) {
    table.rows[1].cells.item(1).innerHTML = "";
    table.rows[1].cells.item(2).innerHTML = "";
    szamolo--;
    document.getElementById("elsocheck").style.backgroundColor = "";
  }
  if (szamolo == 3) {
    table.rows[2].cells.item(1).innerHTML = "";
    table.rows[2].cells.item(2).innerHTML = "";
    szamolo--;
    document.getElementById("masodikcheck").style.backgroundColor = "";
  }
  if (szamolo == 4) {
    table.rows[3].cells.item(1).innerHTML = "";
    table.rows[3].cells.item(2).innerHTML = "";
    szamolo--;
    document.getElementById("harmadikcheck").style.backgroundColor = "";
  }
  if (szamolo == 5) {
    table.rows[4].cells.item(1).innerHTML = "";
    table.rows[4].cells.item(2).innerHTML = "";
    szamolo--;
    document.getElementById("negyedikcheck").style.backgroundColor = "";
  }
  if (szamolo == 6) {
    table.rows[5].cells.item(1).innerHTML = "";
    table.rows[5].cells.item(2).innerHTML = "";
    szamolo--;
    document.getElementById("otodikcheck").style.backgroundColor = "";
  }
  if (szamolo == 7) {
    table.rows[6].cells.item(1).innerHTML = "";
    table.rows[6].cells.item(2).innerHTML = "";
    document.getElementById("hatodikcheck").style.backgroundColor = "";
    szamolo--;
  }
}

function elsoCheckBoxChecked() {
  if (document.getElementById("elsocheck").checked == true) {
    document.getElementById("elsocheck").style.boxShadow =
      "0.5px 0.5px 30px " + elsoszin;
    document.querySelector("tr:nth-child(2)").style.color = elsoszin;
    document.querySelector("tr:nth-child(2)").style.textShadow =
      "0.5px 0.5px 30px " + elsoszin;

    document.getElementById("masodikcheck").checked = false;
    document.getElementById("harmadikcheck").checked = false;
    document.getElementById("negyedikcheck").checked = false;
    document.getElementById("otodikcheck").checked = false;
    document.getElementById("hatodikcheck").checked = false;
    masodikCheckBoxChecked();
    harmadikCheckBoxChecked();
    negyedikCheckBoxChecked();
    otodikCheckBoxChecked();
    hatodikCheckBoxChecked();
  } else {
    document.getElementById("elsocheck").style.boxShadow = "";
    document.querySelector("tr:nth-child(2)").style.color = "";
    document.querySelector("tr:nth-child(2)").style.textShadow = "";
  }
}

function masodikCheckBoxChecked() {
  if (document.getElementById("masodikcheck").checked == true) {
    document.getElementById("masodikcheck").style.boxShadow =
      "0.5px 0.5px 30px " + masodikszin;
    document.querySelector("tr:nth-child(3)").style.color = masodikszin;
    document.querySelector("tr:nth-child(3)").style.textShadow =
      "0.5px 0.5px 30px " + masodikszin;

    document.getElementById("elsocheck").checked = false;
    document.getElementById("harmadikcheck").checked = false;
    document.getElementById("negyedikcheck").checked = false;
    document.getElementById("otodikcheck").checked = false;
    document.getElementById("hatodikcheck").checked = false;
    elsoCheckBoxChecked();
    harmadikCheckBoxChecked();
    negyedikCheckBoxChecked();
    otodikCheckBoxChecked();
    hatodikCheckBoxChecked();
  } else {
    document.getElementById("masodikcheck").style.boxShadow = "";
    document.querySelector("tr:nth-child(3)").style.color = "";
    document.querySelector("tr:nth-child(3)").style.textShadow = "";
  }
}

function harmadikCheckBoxChecked() {
  if (document.getElementById("harmadikcheck").checked == true) {
    document.getElementById("harmadikcheck").style.boxShadow =
      "0.5px 0.5px 30px " + harmadikszin;
    document.querySelector("tr:nth-child(4)").style.color = harmadikszin;
    document.querySelector("tr:nth-child(4)").style.textShadow =
      "0.5px 0.5px 30px " + harmadikszin;

    document.getElementById("masodikcheck").checked = false;
    document.getElementById("elsocheck").checked = false;
    document.getElementById("negyedikcheck").checked = false;
    document.getElementById("otodikcheck").checked = false;
    document.getElementById("hatodikcheck").checked = false;
    masodikCheckBoxChecked();
    elsoCheckBoxChecked();
    negyedikCheckBoxChecked();
    otodikCheckBoxChecked();
    hatodikCheckBoxChecked();
  } else {
    document.getElementById("harmadikcheck").style.boxShadow = "";
    document.querySelector("tr:nth-child(4)").style.color = "";
    document.querySelector("tr:nth-child(4)").style.textShadow = "";
  }
}

function negyedikCheckBoxChecked() {
  if (document.getElementById("negyedikcheck").checked == true) {
    document.getElementById("negyedikcheck").style.boxShadow =
      "0.5px 0.5px 30px " + negyedikszin;
    document.querySelector("tr:nth-child(5)").style.color = negyedikszin;
    document.querySelector("tr:nth-child(5)").style.textShadow =
      "0.5px 0.5px 30px " + negyedikszin;

    document.getElementById("masodikcheck").checked = false;
    document.getElementById("harmadikcheck").checked = false;
    document.getElementById("elsocheck").checked = false;
    document.getElementById("otodikcheck").checked = false;
    document.getElementById("hatodikcheck").checked = false;
    masodikCheckBoxChecked();
    harmadikCheckBoxChecked();
    elsoCheckBoxChecked();
    otodikCheckBoxChecked();
    hatodikCheckBoxChecked();
  } else {
    document.getElementById("negyedikcheck").style.boxShadow = "";
    document.querySelector("tr:nth-child(5)").style.color = "";
    document.querySelector("tr:nth-child(5)").style.textShadow = "";
  }
}

function otodikCheckBoxChecked() {
  if (document.getElementById("otodikcheck").checked == true) {
    document.getElementById("otodikcheck").style.boxShadow =
      "0.5px 0.5px 30px " + otodikszin;
    document.querySelector("tr:nth-child(6)").style.color = otodikszin;
    document.querySelector("tr:nth-child(6)").style.textShadow =
      "0.5px 0.5px 30px " + otodikszin;

    document.getElementById("masodikcheck").checked = false;
    document.getElementById("harmadikcheck").checked = false;
    document.getElementById("negyedikcheck").checked = false;
    document.getElementById("elsocheck").checked = false;
    document.getElementById("hatodikcheck").checked = false;
    masodikCheckBoxChecked();
    harmadikCheckBoxChecked();
    negyedikCheckBoxChecked();
    elsoCheckBoxChecked();
    hatodikCheckBoxChecked();
  } else {
    document.getElementById("otodikcheck").style.boxShadow = "";
    document.querySelector("tr:nth-child(6)").style.color = "";
    document.querySelector("tr:nth-child(6)").style.textShadow = "";
  }
}

function hatodikCheckBoxChecked() {
  if (document.getElementById("hatodikcheck").checked == true) {
    document.getElementById("hatodikcheck").style.boxShadow =
      "0.5px 0.5px 30px " + hatodikszin;
    document.querySelector("tr:nth-child(7)").style.color = hatodikszin;
    document.querySelector("tr:nth-child(7)").style.textShadow =
      "0.5px 0.5px 30px " + hatodikszin;

    document.getElementById("masodikcheck").checked = false;
    document.getElementById("harmadikcheck").checked = false;
    document.getElementById("negyedikcheck").checked = false;
    document.getElementById("otodikcheck").checked = false;
    document.getElementById("elsocheck").checked = false;
    masodikCheckBoxChecked();
    harmadikCheckBoxChecked();
    negyedikCheckBoxChecked();
    otodikCheckBoxChecked();
    elsoCheckBoxChecked();
  } else {
    document.getElementById("hatodikcheck").style.boxShadow = "";
    document.querySelector("tr:nth-child(7)").style.color = "";
    document.querySelector("tr:nth-child(7)").style.textShadow = "";
  }
}

function jatekosszamolas() {
  var sorokszama = document.getElementById("tabla").rows.length;
  switch (sorokszama) {
    case 2:
      elsoosszeg = parseInt(intesszamegy);
      break;
    case 3:
      elsoosszeg = parseInt(intesszamegy);
      masodikosszeg = parseInt(intesszamketto);
      break;
    case 4:
      elsoosszeg = parseInt(intesszamegy);
      masodikosszeg = parseInt(intesszamketto);
      harmadikosszeg = parseInt(intesszamharom);
      break;
    case 5:
      elsoosszeg = parseInt(intesszamegy);
      masodikosszeg = parseInt(intesszamketto);
      harmadikosszeg = parseInt(intesszamharom);
      negyedikosszeg = parseInt(intesszamnegy);
      break;
    case 6:
      elsoosszeg = parseInt(intesszamegy);
      masodikosszeg = parseInt(intesszamketto);
      harmadikosszeg = parseInt(intesszamharom);
      negyedikosszeg = parseInt(intesszamnegy);
      otodikosszeg = parseInt(intesszamot);
      break;
    case 7:
      elsoosszeg = parseInt(intesszamegy);
      masodikosszeg = parseInt(intesszamketto);
      harmadikosszeg = parseInt(intesszamharom);
      negyedikosszeg = parseInt(intesszamnegy);
      otodikosszeg = parseInt(intesszamot);
      hatodikosszeg = parseInt(intesszamhat);
      break;
  }
}

function muvelet() {
  var table = document.getElementById("tabla");
  if (document.getElementById("elsocheck").checked == true) {
    if (parseInt(elsoosszeg) + parseInt(ertek) > 0) {
      elsoosszeg = elsoosszeg + ertek;
      table.rows[1].cells.item(2).innerHTML = elsoosszeg.toLocaleString();
      intesszamegy = parseInt(elsoosszeg);

      document.getElementById("legutobbi").style.color = "#80e5b2";
      document.getElementById("legutobbi").innerHTML =
        elsonev + ": " + elojel + ertek.toLocaleString() + " Forint";

      document.getElementById("elsocheck").checked = false;
      elsoCheckBoxChecked();
    } else {
      document.getElementById("legutobbi").style.color = "#AC6060";
      document.getElementById("legutobbi").innerHTML =
        "lenullázás megakadályozva";
    }
  }

  if (document.getElementById("masodikcheck").checked == true) {
    if (parseInt(masodikosszeg) + parseInt(ertek) > 0) {
      masodikosszeg = masodikosszeg + ertek;
      table.rows[2].cells.item(2).innerHTML = masodikosszeg.toLocaleString();
      intesszamketto = parseInt(masodikosszeg);

      document.getElementById("legutobbi").style.color = "#80e5b2";
      document.getElementById("legutobbi").innerHTML =
        masodiknev + ": " + elojel + ertek.toLocaleString() + " Forint";

      document.getElementById("masodikcheck").checked = false;
      masodikCheckBoxChecked();
    } else {
      document.getElementById("legutobbi").style.color = "#AC6060";
      document.getElementById("legutobbi").innerHTML =
        "lenullázás megakadályozva";
    }
  }
  if (document.getElementById("harmadikcheck").checked == true) {
    if (parseInt(harmadikosszeg) + parseInt(ertek) > 0) {
      harmadikosszeg = harmadikosszeg + ertek;
      table.rows[3].cells.item(2).innerHTML = harmadikosszeg.toLocaleString();
      intesszamharom = parseInt(harmadikosszeg);

      document.getElementById("legutobbi").style.color = "#80e5b2";
      document.getElementById("legutobbi").innerHTML =
        harmadiknev + ": " + elojel + ertek.toLocaleString() + " Forint";

      document.getElementById("harmadikcheck").checked = false;
      harmadikCheckBoxChecked();
    } else {
      document.getElementById("legutobbi").style.color = "#AC6060";
      document.getElementById("legutobbi").innerHTML =
        "lenullázás megakadályozva";
    }
  }
  if (document.getElementById("negyedikcheck").checked == true) {
    if (parseInt(negyedikosszeg) + parseInt(ertek) > 0) {
      negyedikosszeg = negyedikosszeg + ertek;
      table.rows[4].cells.item(2).innerHTML = negyedikosszeg.toLocaleString();
      intesszamnegy = parseInt(negyedikosszeg);

      document.getElementById("legutobbi").style.color = "#80e5b2";
      document.getElementById("legutobbi").innerHTML =
        negyediknev + ": " + elojel + ertek.toLocaleString() + " Forint";

      document.getElementById("negyedikcheck").checked = false;
      negyedikCheckBoxChecked();
    } else {
      document.getElementById("legutobbi").style.color = "#AC6060";
      document.getElementById("legutobbi").innerHTML =
        "lenullázás megakadályozva";
    }
  }
  if (document.getElementById("otodikcheck").checked == true) {
    if (parseInt(otodikosszeg) + parseInt(ertek) > 0) {
      otodikosszeg = otodikosszeg + ertek;
      table.rows[5].cells.item(2).innerHTML = otodikosszeg.toLocaleString();
      intesszamot = parseInt(otodikosszeg);

      document.getElementById("legutobbi").style.color = "#80e5b2";
      document.getElementById("legutobbi").innerHTML =
        otodiknev + ": " + elojel + ertek.toLocaleString() + " Forint";

      document.getElementById("otodikcheck").checked = false;
      otodikCheckBoxChecked();
    } else {
      document.getElementById("legutobbi").style.color = "#AC6060";
      document.getElementById("legutobbi").innerHTML =
        "lenullázás megakadályozva";
    }
  }
  if (document.getElementById("hatodikcheck").checked == true) {
    if (parseInt(hatodikosszeg) + parseInt(ertek) > 0) {
      hatodikosszeg = hatodikosszeg + ertek;
      table.rows[6].cells.item(2).innerHTML = hatodikosszeg.toLocaleString();
      intesszamhat = parseInt(hatodikosszeg);

      document.getElementById("legutobbi").style.color = "#80e5b2";
      document.getElementById("legutobbi").innerHTML =
        hatodiknev + ": " + elojel + ertek.toLocaleString() + " Forint";

      document.getElementById("hatodikcheck").checked = false;
      hatodikCheckBoxChecked();
    } else {
      document.getElementById("legutobbi").style.color = "#AC6060";
      document.getElementById("legutobbi").innerHTML =
        "lenullázás megakadályozva";
    }
  }
}

function plusszszazalekszamitas() {
  var table = document.getElementById("tabla");

  if (szazalek.length == 1) {
    ertek = parseFloat("0.0" + szazalek);
  } else {
    ertek = parseFloat("0." + szazalek);
  }

  if (document.getElementById("elsocheck").checked == true) {
    szazalekertekben = elsoosszeg * ertek;
    elsoosszeg = elsoosszeg + elsoosszeg * ertek;
    table.rows[1].cells.item(2).innerHTML =
      parseInt(elsoosszeg).toLocaleString();
    intesszamegy = parseInt(elsoosszeg);

    document.getElementById("elsocheck").checked = false;
    elsoCheckBoxChecked();

    document.getElementById("legutobbi").style.color = "#80e5b2";
    document.getElementById("legutobbi").innerHTML =
      elsonev +
      ": +" +
      szazalek +
      "% (+" +
      szazalekertekben.toLocaleString() +
      "Ft)";
  }
  if (document.getElementById("masodikcheck").checked == true) {
    szazalekertekben = masodikosszeg * ertek;
    masodikosszeg = masodikosszeg + masodikosszeg * ertek;
    table.rows[2].cells.item(2).innerHTML =
      parseInt(masodikosszeg).toLocaleString();
    intesszamketto = parseInt(masodikosszeg);

    document.getElementById("masodikcheck").checked = false;
    masodikCheckBoxChecked();

    document.getElementById("legutobbi").style.color = "#80e5b2";
    document.getElementById("legutobbi").innerHTML =
      masodiknev +
      ": +" +
      szazalek +
      "% (+" +
      szazalekertekben.toLocaleString() +
      "Ft)";
  }
  if (document.getElementById("harmadikcheck").checked == true) {
    szazalekertekben = harmadikosszeg * ertek;
    harmadikosszeg = harmadikosszeg + harmadikosszeg * ertek;
    table.rows[3].cells.item(2).innerHTML =
      parseInt(harmadikosszeg).toLocaleString();
    intesszamharom = parseInt(harmadikosszeg);

    document.getElementById("harmadikcheck").checked = false;
    harmadikCheckBoxChecked();

    document.getElementById("legutobbi").style.color = "#80e5b2";
    document.getElementById("legutobbi").innerHTML =
      harmadiknev +
      ": +" +
      szazalek +
      "% (+" +
      szazalekertekben.toLocaleString() +
      "Ft)";
  }
  if (document.getElementById("negyedikcheck").checked == true) {
    szazalekertekben = negyedikosszeg * ertek;
    negyedikosszeg = negyedikosszeg + negyedikosszeg * ertek;
    table.rows[4].cells.item(2).innerHTML =
      parseInt(negyedikosszeg).toLocaleString();
    intesszamnegy = parseInt(negyedikosszeg);

    document.getElementById("negyedikcheck").checked = false;
    negyedikCheckBoxChecked();

    document.getElementById("legutobbi").style.color = "#80e5b2";
    document.getElementById("legutobbi").innerHTML =
      negyediknev +
      ": +" +
      szazalek +
      "% (+" +
      szazalekertekben.toLocaleString() +
      "Ft)";
  }
  if (document.getElementById("otodikcheck").checked == true) {
    szazalekertekben = otodikosszeg * ertek;
    otodikosszeg = otodikosszeg + otodikosszeg * ertek;
    table.rows[5].cells.item(2).innerHTML =
      parseInt(otodikosszeg).toLocaleString();
    intesszamot = parseInt(otodikosszeg);

    document.getElementById("otodikcheck").checked = false;
    otodikCheckBoxChecked();

    document.getElementById("legutobbi").style.color = "#80e5b2";
    document.getElementById("legutobbi").innerHTML =
      otodiknev +
      ": +" +
      szazalek +
      "% (+" +
      szazalekertekben.toLocaleString() +
      "Ft)";
  }
  if (document.getElementById("hatodikcheck").checked == true) {
    szazalekertekben = hatodikosszeg * ertek;
    hatodikosszeg = hatodikosszeg + hatodikosszeg * ertek;
    table.rows[6].cells.item(2).innerHTML =
      parseInt(hatodikosszeg).toLocaleString();
    intesszamhat = parseInt(hatodikosszeg);

    document.getElementById("hatodikcheck").checked = false;
    hatodikCheckBoxChecked();

    document.getElementById("legutobbi").style.color = "#80e5b2";
    document.getElementById("legutobbi").innerHTML =
      hatodiknev +
      ": +" +
      szazalek +
      "% (+" +
      szazalekertekben.toLocaleString() +
      "Ft)";
  }
}

function minuszszazalekszamitas() {
  var table = document.getElementById("tabla");

  if (szazalek.length == 1) {
    ertek = parseFloat("0.0" + szazalek);
  } else {
    ertek = parseFloat("0." + szazalek);
  }

  if (document.getElementById("elsocheck").checked == true) {
    szazalekertekben = elsoosszeg * ertek;
    elsoosszeg = elsoosszeg - elsoosszeg * ertek;
    table.rows[1].cells.item(2).innerHTML =
      parseInt(elsoosszeg).toLocaleString();
    intesszamegy = parseInt(elsoosszeg);

    document.getElementById("elsocheck").checked = false;
    elsoCheckBoxChecked();

    document.getElementById("legutobbi").style.color = "#80e5b2";
    document.getElementById("legutobbi").innerHTML =
      elsonev +
      ": -" +
      szazalek +
      "% (-" +
      szazalekertekben.toLocaleString() +
      "Ft)";
  }
  if (document.getElementById("masodikcheck").checked == true) {
    szazalekertekben = masodikosszeg * ertek;
    masodikosszeg = masodikosszeg - masodikosszeg * ertek;
    table.rows[2].cells.item(2).innerHTML =
      parseInt(masodikosszeg).toLocaleString();
    intesszamketto = parseInt(masodikosszeg);

    document.getElementById("masodikcheck").checked = false;
    masodikCheckBoxChecked();

    document.getElementById("legutobbi").style.color = "#80e5b2";
    document.getElementById("legutobbi").innerHTML =
      masodiknev +
      ": -" +
      szazalek +
      "% (-" +
      szazalekertekben.toLocaleString() +
      "Ft)";
  }
  if (document.getElementById("harmadikcheck").checked == true) {
    szazalekertekben = harmadikosszeg * ertek;
    harmadikosszeg = harmadikosszeg - harmadikosszeg * ertek;
    table.rows[3].cells.item(2).innerHTML =
      parseInt(harmadikosszeg).toLocaleString();
    intesszamharom = parseInt(harmadikosszeg);

    document.getElementById("harmadikcheck").checked = false;
    harmadikCheckBoxChecked();

    document.getElementById("legutobbi").style.color = "#80e5b2";
    document.getElementById("legutobbi").innerHTML =
      harmadiknev +
      ": -" +
      szazalek +
      "% (-" +
      szazalekertekben.toLocaleString() +
      "Ft)";
  }
  if (document.getElementById("negyedikcheck").checked == true) {
    szazalekertekben = negyedikosszeg * ertek;
    negyedikosszeg = negyedikosszeg - negyedikosszeg * ertek;
    table.rows[4].cells.item(2).innerHTML =
      parseInt(negyedikosszeg).toLocaleString();
    intesszamnegy = parseInt(negyedikosszeg);

    document.getElementById("negyedikcheck").checked = false;
    negyedikCheckBoxChecked();

    document.getElementById("legutobbi").style.color = "#80e5b2";
    document.getElementById("legutobbi").innerHTML =
      negyediknev +
      ": -" +
      szazalek +
      "% (-" +
      szazalekertekben.toLocaleString() +
      "Ft)";
  }
  if (document.getElementById("otodikcheck").checked == true) {
    szazalekertekben = otodikosszeg * ertek;
    otodikosszeg = otodikosszeg - otodikosszeg * ertek;
    table.rows[5].cells.item(2).innerHTML =
      parseInt(otodikosszeg).toLocaleString();
    intesszamot = parseInt(otodikosszeg);

    document.getElementById("otodikcheck").checked = false;
    otodikCheckBoxChecked();

    document.getElementById("legutobbi").style.color = "#80e5b2";
    document.getElementById("legutobbi").innerHTML =
      otodiknev +
      ": -" +
      szazalek +
      "% (-" +
      szazalekertekben.toLocaleString() +
      "Ft)";
  }
  if (document.getElementById("hatodikcheck").checked == true) {
    szazalekertekben = hatodikosszeg * ertek;
    hatodikosszeg = hatodikosszeg - hatodikosszeg * ertek;
    table.rows[6].cells.item(2).innerHTML =
      parseInt(hatodikosszeg).toLocaleString();
    intesszamhat = parseInt(hatodikosszeg);

    document.getElementById("hatodikcheck").checked = false;
    hatodikCheckBoxChecked();

    document.getElementById("legutobbi").style.color = "#80e5b2";
    document.getElementById("legutobbi").innerHTML =
      hatodiknev +
      ": -" +
      szazalek +
      "% (-" +
      szazalekertekben.toLocaleString() +
      "Ft)";
  }
}

function plussz500k() {
  ertek = 500000;
  elojel = "+";
  jatekosszamolas();
  muvelet();
}

function plussz1m() {
  ertek = 1000000;
  elojel = "+";
  jatekosszamolas();
  muvelet();
}

function plussz() {
  ertek = parseInt(document.getElementById("muveletszam").value);
  elojel = "+";
  if (ertek > 0 || ertek < 0) {
    jatekosszamolas();
    muvelet();
    document.getElementById("muveletszam").value = "";
  } else {
    document.getElementById("legutobbi").style.color = "#AC6060";
    document.getElementById("legutobbi").innerHTML = "hibás adat";
  }
}

function minusz() {
  ertek = parseInt("-" + document.getElementById("muveletszam").value);
  elojel = "";
  if (ertek > 0 || ertek < 0) {
    jatekosszamolas();
    muvelet();
    document.getElementById("muveletszam").value = "";
  } else {
    document.getElementById("legutobbi").style.color = "#AC6060";
    document.getElementById("legutobbi").innerHTML = "hibás adat";
  }
}

function hetsz() {
  szazalek = "7";
  jatekosszamolas();
  plusszszazalekszamitas();
}

function plusszszazalek() {
  var beirtsz = document.getElementById("szazalekszam").value;
  if (parseInt(beirtsz) > 0) {
    szazalek = beirtsz;
    jatekosszamolas();
    plusszszazalekszamitas();
    document.getElementById("szazalekszam").value = "";
  } else {
    document.getElementById("legutobbi").style.color = "#AC6060";
    document.getElementById("legutobbi").innerHTML = "hibás adat";
  }
}

function minuszszazalek() {
  var beirtsz = document.getElementById("szazalekszam").value;
  if (parseInt(beirtsz) > 0) {
    szazalek = beirtsz;
    jatekosszamolas();
    minuszszazalekszamitas();
    document.getElementById("szazalekszam").value = "";
  } else {
    document.getElementById("legutobbi").style.color = "#AC6060";
    document.getElementById("legutobbi").innerHTML = "hibás adat";
  }
}
