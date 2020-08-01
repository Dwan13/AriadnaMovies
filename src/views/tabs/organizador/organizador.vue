/* El proceso que ocurre con el organizador es similar al de la home, 
sin embargo, dado que se requiere de otras interacciones no se puede vincular a la home */
<template>
<div>
   <v-container fluid>
            <v-row justify="center">
              <v-col v-for="(item,i) in miarray" :key="i" cols="6" md="3" sm="6">
                <!-- v-hover permite ralizar el tipo de interacciones que se exigen en los requerimientos para cada cartelera
                de películas; es decir visualizar botones y título uno a la vez-->
                <v-hover v-slot:default="{ hover }">
                  <v-card class="mx-auto" color="grey lighten-4" max-width="600">
                    <v-img :aspect-ratio="260/400" :src="item.mod">
                      <v-expand-transition>
                        <div
                          v-if="hover"
                          class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal white--text"
                          style="height: 100%;"
                          align="center"
                        >
                          <v-row justify="center">
                            <v-col cols="12" class="pl-5 pr-5">
                              <h1 class="titleWeb">{{item.nombre}}</h1>
                              <h2 class="titleMove">{{item.nombre}}</h2>
                            </v-col>
                            <v-col cols="8">
                              <v-btn
                                class="watch hvr-grow"
                                @click="(modal = true), (currentSlide = 2),cambiarestado2(item.imagen)"
                              >
                                <span class="spanAriadna">WATCH NOW</span>
                              </v-btn>
                            </v-col>
                            <v-col cols="8">
                              <v-btn
                                class="more hvr-grow"
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
                        </div>
                      </v-expand-transition>
                    </v-img>
                  </v-card>
                </v-hover>
              </v-col>
            </v-row>
          </v-container>
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
          </div>
</template>

<script>
import WatchNow from "../../modales/watchNow";
import MoreInfo from "../../modales/moreInfo";
export default {
  components: {
    WatchNow,
    MoreInfo
  },
  data() {
    return {
      modal: false,
      mostrarCerrar: true,
      descriptions: "",
      mods: "",
      nombres: "",
      directors: "",
      tiempos: 0,
      fechas: "",
      identificar: 0,
      imagenes: "",
      rating:0,
      currentSlide: 0
    };
  },
props:{
    miarray:{
        type:Array,
        required:true
    }
},
methods:{
    cambiarestado(id, description, mod, nombre, director, tiempo, fecha, valoracion) {
      this.identificar = id;
      this.descriptions = description;
      this.mods = mod;
      this.nombres = nombre;
      this.directors = director;
      this.tiempos = tiempo;
      this.fechas = fecha;
      this.rating=valoracion;
    },
    cambiarestado2(img) {
      this.imagenes = img;
    }
}
}
</script>

<style>

</style>