mapabuenosaires-to-latlng
=========================

Librería javascript que convierte coordenadas de proyección [Buenos Aires Gauss Krügger](https://recursos-data.buenosaires.gob.ar/ckan2/proyecciones-gkba.pdf) a latitud longitud (WGS84).

Mirá el [ejemplo](http://oskosk.github.io/mapabuenosaires-to-latlng/) usando la API del Mapa Interactivo de Buenos Aires y esta librería;

##Uso


###Incluir el script minificado

```html
<script src="https://oskosk.github.io/mapabuenosaires-to-latlng/dist/mapabuenosaires-to-latlng.js"></script>
``` 

### O descargar mapabuenosaires-to-latlng.js

Descargar `dist/mapabuenosaires-to-latlng.js` e incluirlo en el HTML.

```html
<script src="mapabuenosaires-to-latlng.js"></script>
``` 

##Conversión de un punto

###Pasándole un x e y 

Es decir, pasándole unidades en metros.

```html
<script>
  var x = 102750;// longitud (aunque en esta proyección no se puede hablar de longitud)
  var y = 101750;// latitud (aunque en esta proyección no se puede hablar de latitud)
  var center = mapaBuenosAiresToLatLng(x, y);
  console.log(center);
  // Object {lat: -34.61349129016636, lon: -58.433315651859154} 

</script>
```

###Pasándole un OpenLayers.LonLat

Es decir, pasándole `un OpenLayer.LonLat` que proviene de la proyección del mapa (en metros).

```html
<script>
  var center = new OpenLayers.LonLat(102750, 101750)
  var center = mapaBuenosAiresToLatLng(center);
  console.log(center);
  // Object {lat: -34.61349129016636, lon: -58.433315651859154} 
</script>
```

###Pasándole el centro de un mapa creado con la API de Mapa Buenos Aires

Es decir, pasándole el `OpenLayers.LonLat` que se obtiene como return de `miMapa.api.getCenter()`.

```html
<script>
  var miMapa = new usig.MapaInteractivo('mapa', {
    rootUrl: '../',
    zoomBar: false,
  });
  var center = mapaBuenosAiresToLatLng(miMapa.api.getCenter());
  console.log(center);
  // Object {lat: -34.61349129016636, lon: -58.433315651859154} 

</script>
```

##Dependencias

Esta librería depende de:

* [Proj4](http://trac.osgeo.org/proj4js/). *Ya está incluida en esta librería*.

##Proyección y Sistema de referencia utilizado en el Mapa Interactivo de Buenos Aires

La descripción de este sistema de referencia la podés encontrar en:

https://recursos-data.buenosaires.gob.ar/ckan2/proyecciones-gkba.pdf



El código Proj4 que estoy utilizando es:

```
+proj=tmerc +lat_0=-34.6297166 +lon_0=-58.4627 +k=0.9999980000000001 +x_0=100000 +y_0=100000 +ellps=intl +towgs84=-148,136,90,0,0,0,0 +units=m +no_defs
```

Lo conseguí descargando el paquete de parcelas desde data.buenosaires.gob.ar, abriéndolo con QGIS y exportando (copypaste) la declaración de proyección a PROJ4.

y lo uso de esta manera:

```js
Proj4js.defs["EPSG:221951"] = "+proj=tmerc +lat_0=-34.6297166 +lon_0=-58.4627 +k=0.9999980000000001 +x_0=100000 +y_0=100000 +ellps=intl +towgs84=-148,136,90,0,0,0,0 +units=m +no_defs";
```


##License

Distributed under the MIT license.