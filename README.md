mapabuenosaires-to-latlng
=========================

Librería javascript que convierte coordenadas de proyección Buenos Aires Gauss Krügger a latitud longitud (WGS84).

##Uso

###Incluir el script minificado

```
<script src="https://oskosk.github.io/mapabuenosaires-to-latlng/dist/mapabuenosaires-to-latlng.js"></script>
``` 

###Pasándole un x e y 

Es decir, pasándole unidades en metros.

```
<script>
  var x = 102750;// longitud (aunque en esta proyección no se puede hablar de longitud)
  var y = 101750;// latitud (aunque en esta proyección no se puede hablar de latitud)
  var center = mapaBuenosAiresToLatLng();
  console.log(center);
</script>
```

###Pasándole un OpenLayers.LonLat

Es decir, pasándole unidades en metros.

```
<script>
  var center = new OpenLayers.LonLat(102750, 101750)
  var center = mapaBuenosAiresToLatLng();
  console.log(center);
  // Object {lat: -34.61272133494985, lon: -58.43331717987316}
</script>
```

###Pasándole el centro de un mapa creado con la API de Mapa Buenos Aires

Es decir, pasándole el OpenLayers.LonLat que se obtiene como return de `miMapa.api.getCenter()`.

```
<script>
  var miMapa = new usig.MapaInteractivo('mapa', {
    rootUrl: '../',
    zoomBar: false,
  });
  var center = mapaBuenosAiresToLatLng(miMapa.api.getCenter());
  console.log(center);
    // Object {lat: -34.61272133494985, lon: -58.43331717987316}

</script>
```

##Dependencias

Esta librería depende de:

* OpenLayers (ya que el mapa interactivo de Buenos Aires v3 utiliza OpenLayers como librería de mapas).

Esta dependencia no es problema ya que al utilizar la api de Mapa buenos Aires, OpenLayers está incluido de manera predeterminada.

###Proyección y Sistema de referencia utilizado en el mapa buenos aires

https://recursos-data.buenosaires.gob.ar/ckan2/proyecciones-gkba.pdf

##License

Distributed under the MIT license.