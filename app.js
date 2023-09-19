"use strict";
/*Global var*/
let prica = [
  {
    naziv: "3 želje",
    pisac: "Sara Zajmović",
    link: "prica1/trizelje.html",
    brojPrice: 1,
    kartica:
      `<div class="kartica-center">
            <div>
                <img src="assets/thumbnai.jpg" class="thumbnail">
            </div>
            <div>
                <h3 class="naslov-price">3 želje</h3>
                <p class="opis-price">Dječak pronalazi ibrik sa duhom koji mu ispunjava 3 želje</p>
                <button class="otvori" onclick="location.href='prica1/trizelje.html'">Otvori priču</button>
            </div>
        </div>`,
  },
  {
    naziv: "Senad i Senada",
    pisac: "Sara Zajmović",
    link: "prica2/dragani.html",
    brojPrice: 2,
    kartica:
      `<div class="kartica-center">
          <div>
            <img src="assets/thumbnail2.jpg" class="thumbnail">
          </div>
          <div>
            <h3 class="naslov-price">Senad i Senada</h3>
            <p class="opis-price">Otac pokusava da napusti svoju djecu</p>
            <button class="otvori" onclick="location.href='prica2/dragani.html'">Otvori priču</button>
          </div>
       </div>`
  },
];

/*Funkcije*/
function pretrazi(tekst) {
  debugger;
  document.getElementById("rezultat").innerHTML = "";
  prica.forEach(element => {
    debugger;
    let stringToFind = element.naziv.toLowerCase();
    let result = stringToFind.includes(tekst.toLowerCase());
    if (result && tekst.length > 1) {
      let a = document.getElementById("rezultat");
      a.href = element.link;
      a.innerHTML += element.kartica;
    }

  });
};
