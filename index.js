const fetchReference = async function () {
  try {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem"
    );
    console.log(response);
    if (response.ok) {
      let data = await response.json();
      console.log("data", data);
    }
  } catch (error) {
    console.log("risposta non andata a buon fine");
  }
};

fetchReference();
