// Número definido según lo que devuelve
// miMapa.api.getProjection().
Proj4js.defs["EPSG:221951"] = "+proj=tmerc +lat_0=-34.629269 +lon_0=-58.4633 +k=0.9999980000000001 +x_0=100000 +y_0=100000 +ellps=intl +units=m +no_defs";

function mapaBuenosAiresToLatLng(x, y) {
  var point = new OpenLayers.LonLat(x, y);
  var lonLat = point.transform(new OpenLayers.Projection("EPSG:221951"), "EPSG:4326");
  return {
    lat: lonLat.lat,
    lon: lonLat.lon,
  }
}