var mymap = L.map("mapa_teste").setView([-22.3498, -42.899], 10);
L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2Fsb21hb251bmVzIiwiYSI6ImNrZmo5cTU1eTBnZWIycWt1YXlqZzVic20ifQ.9pH1x5F39U3p0fCzAU3fTA",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1Ijoic2Fsb21hb251bmVzIiwiYSI6ImNrZmo5cTU1eTBnZWIycWt1YXlqZzVic20ifQ.9pH1x5F39U3p0fCzAU3fTA",
  }
).addTo(mymap);
var marker = L.marker([-22.402, -42.9562]).addTo(mymap);
marker
  .bindPopup(
    "<h3 style='margin-bottom:0;text-align:center;'>Aqui estamos!</h3><br><p style='margin-top:1px;text-align:center;font-size:15px;'>Serviços para toda a Região Serrana e Grande Rio.</p>"
  )
  .openPopup();
