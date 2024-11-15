const data = [
  {
    characters: [
      {
        id: 1,
        name: "Luke Skywalker",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
        homeworld: "tatooine",
      },
      {
        id: 2,
        name: "C-3PO",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
        homeworld: "tatooine",
      },
      {
        id: 3,
        name: "R2-D2",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
        homeworld: "naboo",
      },
      {
        id: 4,
        name: "Darth Vader",
        pic: "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
        homeworld: "tatooine",
      },
      {
        id: 5,
        name: "Leia Organa",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
        homeworld: "alderaan",
      },
      {
        id: 6,
        name: "Owen Lars",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
        homeworld: "tatooine",
      },
      {
        id: 7,
        name: "Beru Whitesun lars",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
        homeworld: "tatooine",
      },
      {
        id: 8,
        name: "R5-D4",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
        homeworld: "tatooine",
      },
      {
        id: 9,
        name: "Biggs Darklighter",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
        homeworld: "tatooine",
      },
      {
        id: 10,
        name: "Obi-Wan Kenobi",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
        homeworld: "stewjon",
      },
      {
        id: 11,
        name: "Anakin Skywalker",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
        homeworld: "tatooine",
      },
      {
        id: 12,
        name: "Wilhuff Tarkin",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
        homeworld: "eriadu",
      },
      {
        id: 13,
        name: "Chewbacca",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
        homeworld: "kashyyyk",
      },
      {
        id: 14,
        name: "Han Solo",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
        homeworld: "corellia",
      },
      {
        id: 15,
        name: "Greedo",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
        homeworld: "Rodia",
      },
      {
        id: 16,
        name: "Jabba Desilijic Tiure",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
        homeworld: "tatooine",
      },
      {
        id: 18,
        name: "Wedge Antilles",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/6/60/WedgeHelmetless-ROTJHD.jpg",
        homeworld: "corellia",
      },
      {
        id: 19,
        name: "Jek Tono Porkins",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
        homeworld: "bestine",
      },
      {
        id: 20,
        name: "Yoda",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
      },
      {
        id: 21,
        name: "Palpatine",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
        homeworld: "naboo",
      },
    ],
  },
];

//null ve undefined filtrelendi
const homeworldsRaw = data[0].characters.map(
  (character) => character.homeworld ?? "other"
);

// tekrarlayan verileri siliyoruz
const homeworldsUnique = [...new Set(homeworldsRaw)];

// make all homeworld values lowercase
const homeworldsLowercase = homeworldsUnique.map((character) =>
  character.toLowerCase()
);
const homeworlds = homeworldsLowercase;
// donguyla radiolari bastirma
const radio_container = document.querySelector(".radio-container");

function showRadioBoxes() {
  homeworlds.forEach((homeworld) => {
    radio_container.innerHTML += `
    <div class="radio">
        <input 
            type="radio" 
            id="homeworld-${homeworld}" 
            value="${homeworld}" 
            class="radio-box">
        <label 
            for="homeworld-${homeworld}">
            ${homeworld}
        </label>
    </div>
`;
  });
}
//radio butonlarini goster
showRadioBoxes();

//karakterleri goster
function renderCharacters(radio) {
  const cardContainer = document.querySelector(".row");

  cardContainer.innerHTML = "";

  data[0].characters.forEach((element) => {
    //eger checkboxtaki value dongumuzde donen karakterlerin value' su ile ayniysa karakteri bastir
    console.log(element.homeworld);

    const homeworld = element.homeworld ?? "other";
    if (homeworld.toLowerCase() === radio.value) {
      cardContainer.innerHTML += `
                <div class="card">
                    <div class="card-content">
                        <h4 class="name">Name: ${element.name}</h4>
                        <h4 class="homeworld">Homeworld: ${element.homeworld}</h4>
                    </div>
                    <div class="card-image"><img
                        src="${element.pic}"></div>
                    </div>`;
    }
  });
}

//radio box mantigi
const radios = document.querySelectorAll(".radio-box");

radios.forEach((radio) => {
  radio.addEventListener("click", function () {
    if (this.checked) {
      radios.forEach((r) => {
        if (r !== this) r.checked = false;
      });
    } else {
      this.checked = true;
    }
  });
});
let selectedRadio = null;
// hangi inputa tiklandigni kaydetme
radios.forEach((radio) => {
  radio.addEventListener("click", function () {
    if (selectedRadio === this) {
      selectedRadio = null;
    } else {
      selectedRadio = this;
      console.log(`Selected: ${this.value}`);

      renderCharacters(this);
    }
  });
});
