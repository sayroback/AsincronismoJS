let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const API = "https://rickandmortyapi.com/api/character/";
function fetchData(url_api, callback) {
  let xhttp = new XMLHttpRequest();
  xhttp.open("GET", url_api, true); //true activa el asincronismo por defecto ya esta activado
  //onreadystatechange - Si este cambio sucede entonces...
  xhttp.onreadystatechange = function (event) {
    // hay 5 estados el 4 es que se a completado
    if (xhttp.readyState === 4) {
      // 200 todo bien - 500 algo fallo - 400 no se encontro algo
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText)); // los valores que entran son (ERROR, se transforma la info obtenida)
      } else {
        const error = new Error("Error " + url_api);
        return callback(error, null);
      }
    }
  };
  xhttp.send();
}

fetchData(API, function (error1, data1) {
  if (error1) return console.error(error1);
  fetchData(API + data1.results[0].id, function (error2, data2) {
    if (error2) return console.error(error2);
    fetchData(data2.origin.url, function (error3, data3) {
      if (error3) return console.error(error3);
      console.log(data1.info.count);
      console.log(data2.name);
      console.log(data3.dimension);
    });
  });
});
