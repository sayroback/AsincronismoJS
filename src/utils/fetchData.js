let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
//const API = "https://rickandmortyapi.com/api/character/";
const fetchData = (url_api) => {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", url_api, true); //true activa el asincronismo por defecto ya esta activado
    //onreadystatechange - Si este cambio sucede entonces...
    xhttp.onreadystatechange = () => {
      // hay 5 estados el 4 es que se a completado
      if (xhttp.readyState === 4) {
        // 200 todo bien - 500 algo fallo - 400 no se encontro algo
        xhttp.status === 200
          ? resolve(JSON.parse(xhttp.responseText))
          : reject(new Error("Error ", url_api));
      }
    };
    xhttp.send();
  });
};

module.exports = fetchData;
