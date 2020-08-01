<template>
  <v-container fluid class="pt-0">
    <v-row class="estrenos">
      <v-carousel :show-arrows="false" hide-delimiter-background>
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
                  <v-btn
                    class="watch"
                    @click="(modal = true), (currentSlide = 2),cambiarestado2(item.imagen)"
                  >
                    <span class="spanAriadna">WATCH NOW</span>
                  </v-btn>
                </v-col>
                <v-col cols="6" align="center" class="pl-0 pr-1">
                  <v-btn
                    class="more"
                    @click="(modal = true), (currentSlide = 1),cambiarestado(item.id,
                  item.description,
                  item.mod,
                  item.nombre,
                  item.director,
                  item.tiempo,
                  item.fecha
                  )"
                  >
                    <span class="spanAriadna">MORE INFO</span>
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>

          <modal-app v-model="modal" :mostrarCerrar="mostrarCerrar">
            <WatchNow @finished="mostrarCerrar = true" v-if="currentSlide == 2" :imagen="imagenes"></WatchNow>
            <MoreInfo
              @finished="mostrarCerrar = true"
              v-if="currentSlide == 1"
              :id="identificar"
              :description="descriptions"
              :imagen="mods"
              :nombre="nombres"
              :director="directors"
              :tiempo="tiempos"
              :fecha="fechas"
            ></MoreInfo>
          </modal-app>
        </v-carousel-item>
      </v-carousel>
    </v-row>
    <tabs-app></tabs-app>
  </v-container>
</template>
<script>
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
      modal: false,
      descriptions: "",
      mods: "",
      nombres: "",
      directors: "",
      tiempos: 0,
      fechas: "",
      identificar: 0,
      imagenes: "",
      currentSlide: 0
    };
  },
  created() {
    this.axios
      .get("http://localhost:3000/estrenos")
      .then(res => {
        this.misestrenos = res.data;
      })
      .catch(e => {
        console(e.response);
      });
  },
  methods: {
    cambiarestado(id, description, mod, nombre, director, tiempo, fecha) {
      this.identificar = id;
      this.descriptions = description;
      this.mods = mod;
      this.nombres = nombre;
      this.directors = director;
      this.tiempos = tiempo;
      this.fechas = fecha;
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