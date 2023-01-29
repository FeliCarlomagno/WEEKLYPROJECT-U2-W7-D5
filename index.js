let arrayAlbums = [];
let arraySong = [];

const fetchReference = async function () {
  try {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=Salmo",
      { method: "GET" }
    );
    console.log(response);
    if (response.ok) {
      let songs = await response.json();
      let songListOne = songs.data;
      console.log("songList", songListOne);

      const cardReference = document.getElementById("cardAppend");
      for (let i = 0; i < 3; i++) {
        let newCard = document.createElement("div");
        newCard.classList.add("card", "col-3", "w-25", "m-3");
        newCard.innerHTML =
          newCard.innerHTML +
          `
        <img src="${songListOne[i].album.cover_xl}" class="card-img-top mt-2 rounded" alt="${songListOne[i].album.title}">
        <div class="card-body d-flex flex-column justify-content-center align-items-center w-100">
          <h5 class="card-title text-center">${songListOne[i].album.title}</h5>
          <p class="card-text">${songListOne[i].title}</p>
        </div>
        `;
        arraySong.push(songListOne[i].title);
        arrayAlbums.push(songListOne[i].album.title);
        console.log("lista degli album", arrayAlbums);

        cardReference.appendChild(newCard);
      }
    }
  } catch (error) {
    console.log("risposta non andata a buon fine", error);
  }
};
fetchReference();
/*********************** CANZONE PREFERITA**********************************/
const fetchReference2 = async function () {
  try {
    let response2 = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q= OneRepublic",
      { method: "GET" }
    );
    console.log(response2);
    if (response2.ok) {
      let songs2 = await response2.json();
      let songListTwo = songs2.data;
      console.log("songList2", songListTwo);

      const cardReference2 = document.getElementById("cardAppend2");
      let newCard2 = document.createElement("div");
      newCard2.classList.add("card", "col-3", "w-25", "m-3");
      newCard2.innerHTML =
        newCard2.innerHTML +
        `
        <img src="${songListTwo[2].album.cover_xl}" class="card-img-top mt-2 rounded" alt="${songListTwo[2].album.title}">
        <div class="card-body d-flex flex-column justify-content-center align-items-center w-100">
          <h5 class="card-title text-center">${songListTwo[2].album.title}</h5>
          <p class="card-text">${songListTwo[2].title}</p>
        </div>
        `;

      arraySong.push(songListTwo[3].title);
      arrayAlbums.push(songListTwo[3].album.title);

      cardReference2.appendChild(newCard2);
    }
  } catch (error) {
    console.log(error);
  }
};
fetchReference2();
/*******************************CAROUSEL******************************************** */

const fetchReferenceCarousel = async function () {
  try {
    let responseCarousel = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q= OneRepublic",
      { method: "GET" }
    );
    console.log(responseCarousel);
    if (responseCarousel.ok) {
      let songs3 = await responseCarousel.json();
      let songListThree = songs3.data;
      console.log("songListThree", songListThree);

      const carouselInner = document.getElementById("carouselImg");
      carouselInner.innerHTML = `
      <img src=" ${songListThree[1].album.cover_xl}" class="d-block w-50 rounded" alt="album_cover image"/>
      <h5 class="card-title mt-3"> ${songListThree[1].album.title}</h5>
      `;

      arrayAlbums.push(songListThree[1].album.title);
    }
  } catch (error) {
    console.log(error);
  }
  /************** */
  try {
    let responseCarousel2 = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q= Imagine Dragons",
      { method: "GET" }
    );
    console.log("secondo carosello", responseCarousel2);
    if (responseCarousel2.ok) {
      let songs4 = await responseCarousel2.json();
      let songListFour = songs4.data;
      console.log("songListFour", songListFour);
      const carouselInner2 = document.getElementById("carouselImg2");
      carouselInner2.innerHTML = ` <img src=" ${songListFour[1].album.cover_xl}" class="d-block w-50 rounded" alt="album_cover image"/>
      <h5 class="card-title mt-3"> ${songListFour[1].album.title}</h5>
      `;

      arrayAlbums.push(songListFour[1].album.title);
    }
  } catch (error) {
    console.log(error);
  }
  /************************** */
  try {
    let responseCarousel3 = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q= G-Eazy",
      { method: "GET" }
    );
    console.log("terzo carosello", responseCarousel3);
    if (responseCarousel3.ok) {
      let songs5 = await responseCarousel3.json();
      let songListFifth = songs5.data;
      console.log("songListFour", songListFifth);
      const carouselInner3 = document.getElementById("carouselImg3");
      carouselInner3.innerHTML = ` <img src=" ${songListFifth[1].album.cover_xl}" class="d-block w-50 rounded" alt="album_cover image"/>
      <h5 class="card-title text-center mt-3"> ${songListFifth[1].album.title}</h5>
      `;

      arrayAlbums.push(songListFifth[1].album.title);
    }
  } catch (error) {
    console.log(error);
  }
};

fetchReferenceCarousel();
