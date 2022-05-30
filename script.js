navigator.geolocation.getCurrentPosition(obtenerUbicacionYMostrar);
async function obtenerUbicacionYMostrar(p) {
  peticion = await fetch("https://api.openweathermap.org/data/2.5/weather?lat="+p.coords.latitude+"&lon="+p.coords.longitude+"&appid=36716e91288f48d1fb0d996c17c7ce73&lang=es&units=metric");
  tiempo2 = await peticion.json();
  document.getElementById("descripcion2").innerHTML = ponerMayus(tiempo2.weather[0].description);
  document.getElementById("temperatura2").innerHTML = Math.floor(tiempo2.main.temp) + " &deg;C";
  document.getElementById("imagen2").src = "http://openweathermap.org/img/wn/" + tiempo2.weather[0].icon + "@2x.png";
  document.getElementById("humedad2").innerHTML = "Humedad: " + tiempo2.main.humidity + "%";
  document.getElementById("tempMax2").innerHTML = "Temperatura Máxima: " + tiempo2.main.temp_max + " &deg;C";
  document.getElementById("tempMin2").innerHTML = "Temperatura Mínima: " + tiempo2.main.temp_min + " &deg;C";
  document.getElementById("nombre2").innerHTML = "<b>" + tiempo2.name + "</b>";
}

function cambiarModoClaro() {
  document.getElementById("cssCambiar").href = "modoClaro.css";
}

function cambiarModoOscuro() {
  document.getElementById("cssCambiar").href = "modoOscuro.css";
}

function ponerMayus(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
async function obtenerTiempo() {
  if (document.getElementById("alicante").checked == true) {
    obtenerHTML("Alicante");
  } else if (document.getElementById("madrid").checked == true) {
    obtenerHTML("Madrid");
  } else if (document.getElementById("valencia").checked == true) {
    obtenerHTML("Valencia");
  } else {
    return;
  }

  async function obtenerHTML(ciudad) {
    peticion = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + ciudad + "&appid=6068b45361e0d6179ab246f11caa1988&lang=es&units=metric");
    tiempo = await peticion.json();
    document.getElementById("card1").innerHTML = `<p class="m-2 text-center" id="titulo">&nbsp;</p> <div class="card" style="width: 18rem;">
      <img src="https://transparentepornaturaleza.com/wp-content/uploads/revslider/transparente-web-2020-Last/PAM_banner_textura.png" class="card-img-top img-fluid" alt="imagen" id="imagen" style="text-align: center">
      <div class="card-body text-center">
        <h5 class="card-title" id="temperatura"></h5>
        <p class="card-text" id="nombre"></p>
        <p class="card-text" id="descripcion"></p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item" id="humedad">Humedad: </li>
        <li class="list-group-item" id="tempMax">Temperatura Máxima: </li>
        <li class="list-group-item" id="tempMin">Temperatura Mínima: </li>
      </ul>
    </div>`;
    document.getElementById("descripcion").innerHTML = ponerMayus(tiempo.weather[0].description);
    document.getElementById("temperatura").innerHTML = Math.floor(tiempo.main.temp) + " &deg;C";
    document.getElementById("imagen").src = "http://openweathermap.org/img/wn/" + tiempo.weather[0].icon + "@2x.png";
    document.getElementById("humedad").innerHTML = "Humedad: " + tiempo.main.humidity + "%";
    document.getElementById("tempMax").innerHTML = "Temperatura Máxima: " + tiempo.main.temp_max + " &deg;C";
    document.getElementById("tempMin").innerHTML = "Temperatura Mínima: " + tiempo.main.temp_min + " &deg;C";
    document.getElementById("nombre").innerHTML = "<b>" + ciudad + "</b>";
    document.getElementById("titulo").innerHTML = "<b>" + ciudad + "</b>";
    
  }
}