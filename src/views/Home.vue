<!-- Creado por Dwan Felipe Veloza Paez 
  ############# Julio 2020 ###############
  ----En este trabajo se plantea un ------
  ----aplicativo para cinemas responsive,
  ---- valiendoce de vue.js, axios y -------
  -----vuetify--------------------------
-->

<template>
  <v-container fluid class="pt-0">
    <v-row class="estrenos">
      <!-- v-carousel es un componente propio de vuetify 
      que permite una interaccion agil con slides perfecto 
      para este tipo de aplicativos -->
      <v-carousel :show-arrows="false" hide-delimiter-background>
        <!-- El proceso de llenado se hace con ciclo for tanto 
        para el carousel como las demas interacciones entre modales -->
        <v-carousel-item
          v-for="(item,i) in misestrenos"
          :key="i"
          :src="item.imagen"
          reverse-transition="fade-transition"
          transition="fade-transition"
        >
          <v-row align="end" justify="center" justify-lg="start" class="mt-10 resumen">
            <v-col cols="12" sm="6" style="margin-top: inherit;">
              <v-row class="mt-10">
                <h1>{{ item.nombre }}</h1>
                <P>{{item.description}}</P>
              </v-row>
              <v-row>
                <v-col cols="6" align="center" class="pl-0 pr-1">
                  <!-- Se utiliza la clase hvr-shrink de las variables 
                  globales en la carpeta sass para animaciones con hover -->
                  <v-btn
                    class="watch hvr-shrink"
                    @click="(modal = true), (currentSlide = 2),cambiarestado2(item.imagen)"
                  >
                    <span class="spanAriadna">WATCH NOW</span>
                  </v-btn>
                </v-col>
                <v-col cols="6" align="center" class="pl-0 pr-1">
                  <v-btn
                    class="more hvr-shrink"
                    @click="(modal = true), (currentSlide = 1),cambiarestado(item.id,
                  item.description,
                  item.mod,
                  item.nombre,
                  item.director,
                  item.tiempo,
                  item.fecha,
                  item.valoracion
                  )"
                  >
                    <span class="spanAriadna">MORE INFO</span>
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
<!-- El componente general modal permite accionar ventanas emergentes con la información solicitada -->
          <modal-app v-model="modal" :mostrarCerrar="mostrarCerrar">
            <WatchNow v-if="currentSlide == 2" :imagen="imagenes"></WatchNow>
            <MoreInfo
              v-if="currentSlide == 1"
              :id="identificar"
              :description="descriptions"
              :imagen="mods"
              :nombre="nombres"
              :director="directors"
              :tiempo="tiempos"
              :fecha="fechas"
              :rating="rating"
            ></MoreInfo>
          </modal-app>
        </v-carousel-item>
      </v-carousel>
    </v-row>
    <!-- Se invoca la vista tabs para optimizar espacio -->
    <tabs-app></tabs-app>
  </v-container>
</template>
<script>
/* Se invoca los objetos y/o componentes WatchNow y MoreInfo del tipo watchNow y moreInfo de la carpeta modal */
import WatchNow from "../views/modales/watchNow";
import MoreInfo from "../views/modales/moreInfo";
export default {
  components: {
    WatchNow,
    MoreInfo
  },
  data() {
    return {
      misestrenos: [],
      mispopulares:[],
      mispeliculas:[],
      mostrarCerrar: true,
      modal: false,
      descriptions: "",
      mods: "",
      nombres: "",
      directors: "",
      tiempos: 0,
      fechas: "",
      identificar: 0,
      imagenes: "",
      rating: 0,
      currentSlide: 0
    };
  },
  created() {
    
    /* Consumo el json local estrenos.json */
    this.mispeliculas=require('../assets/movies.json');

    /* Se realiza un filtrado al objeto json para garantizar que 
              solo se imprima por pantalla aquellas películas que tengan una valoración de 5 */

     var filtered = this.mispeliculas.filter(function(item) {
        return item.estreno == true;
      });
      this.misestrenos = filtered;
  
      var filtered2 = this.mispeliculas.filter(function(item) {
        return item.valoracion == 5;
      });
      this.mispopulares = filtered2;

      /* Añadiendo peliculas al store */
    this.$store.commit("peliculas",this.mispeliculas);
       this.$store.commit("estrenos",this.misestrenos);
          this.$store.commit("populares",this.mispopulares);
    


    /* Se evidencia el uso de axios como herramienta Api-Rest del programa a partir del servidor local y el objeto json peliculas */
    
    /* this.axios
      .get("http://localhost:3000/estrenos")
      .then(res => {
        this.misestrenos = res.data;
      })
      .catch(e => {
        console(e.response);
      }); */
  },
  methods: {
    /* Estos métodos actuan localmente dentro de cada vista como un store; 
    a medida que se escale el aplicativo estas variables seran consideradas 
    dentro del propio store de vue.js */
    cambiarestado(
      id,
      description,
      mod,
      nombre,
      director,
      tiempo,
      fecha,
      valoracion
    ) {
      this.identificar = id;
      this.descriptions = description;
      this.mods = mod;
      this.nombres = nombre;
      this.directors = director;
      this.tiempos = tiempo;
      this.fechas = fecha;
      this.rating = valoracion;
    },
    cambiarestado2(img) {
      this.imagenes = img;
    }
  }
};
</script>
<style lang="scss">
.resumen {
  padding: 5% 10%;
}
.v-carousel__controls {
  &.v-item-group,
  .theme--dark {
    &::after,
    :hover,
    :checked,
    :active {
      color: rgb(233, 218, 14) !important;
    }
  }
}
.v-btn--icon,
.v-size--small {
  height: 18px !important;
  width: 18px !important;

  i {
    font-size: 10px !important;
  }
}
@media (min-width: 1025px) {
  .Cartelera {
    padding: 0px 60px;
  }
  .v-carousel__controls {
    position: absolute !important;
    right: -40% !important;
  }

  .resumen {
    padding: 100px;
  }
}
</style>