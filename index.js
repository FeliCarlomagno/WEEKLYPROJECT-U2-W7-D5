const fetchReference = async function () {
  try {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem"
    );
    console.log(response);
    if (response.ok) {
      let data = await response.json();
      let jsonArray = data.data;
      console.log("datiArray", jsonArray);

      const cardReference = document.getElementById("cardAppend");
      /*jsonArray.forEach((song) => {
        let newCard = document.createElement("div");
        (newCard.innerHTML =
          newCard.innerHTML +
          `<div class="card" style="width: 18rem;">
        <img src="${song.album.cover_xl}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${song.title}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
        `),
          cardReference.appendChild(newCard);
      });*/

      let newCard = document.createElement("div");
      newCard.classList.add("card", "col-4", "col-md-3", "w-25", "m-5");
      newCard.innerHTML =
        newCard.innerHTML +
        `
        <img src="${jsonArray[0].album.cover_xl}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${jsonArray[0].album.title}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      
        `;
      cardReference.appendChild(newCard);

      let newCard2 = document.createElement("div");
      newCard2.classList.add("card", "col-4", "col-md-3", "w-25", "m-5");
      newCard2.innerHTML =
        newCard2.innerHTML +
        `
        <img src="${jsonArray[1].album.cover_xl}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${jsonArray[1].album.title}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      
        `;
      cardReference.appendChild(newCard2);

      let newCard3 = document.createElement("div");
      newCard3.classList.add("card", "col-4", "col-md-3", "w-25", "m-5");
      newCard3.innerHTML =
        newCard3.innerHTML +
        `
        <img src="${jsonArray[6].album.cover_xl}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${jsonArray[6].album.title}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      
        `;
      cardReference.appendChild(newCard3);
      /************************************************************ */
      const cardReference2 = document.getElementById("cardAppend2");
      let newCard4 = document.createElement("div");
      newCard4.classList.add("card", "col-4", "w-25", "m-5");
      newCard4.innerHTML =
        newCard4.innerHTML +
        `
        <img src="${jsonArray[6].album.cover_xl}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${jsonArray[6].album.title}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      
        `;
      cardReference2.appendChild(newCard4);

      /***************************CAROUSEL*************************************** */
      const carouselReference = document.getElementById("carouselImg");
      carouselReference.innerHTML = `<img src="${jsonArray[12].album.cover_xl}" class="d-block w-100" alt="album cover" />`;

      const carouselReference2 = document.getElementById("carouselImg2");
      carouselReference2.innerHTML = `<img src="${jsonArray[17].album.cover_xl}" class="d-block w-100" alt="album cover" />`;

      const carouselReference3 = document.getElementById("carouselImg3");
      carouselReference3.innerHTML = `<img src="${jsonArray[22].album.cover_xl}" class="d-block w-100" alt="album cover" />`;

      /**************************************************************************** */
      const buttonReference = document.getElementById("buttonDelete");
      /* const buttonDelete = function () {
        jsonArray.rank.forEach((song) => {

        });
      };*/

      let arrayFiltered = jsonArray.rank;
      jsonArray.forEach((song) => {
        let arrayRank = song.rank;
        //console.log(arrayRank);

        arrayRank.forEach((rank) => {
          console.log("Min:", Math.min.apply(null, rank));
        });
      });
    }
  } catch (error) {
    console.log("risposta non andata a buon fine", error);
  }
};

fetchReference();
