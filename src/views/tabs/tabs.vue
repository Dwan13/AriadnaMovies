<template>
  <v-row class="mt-5 Cartelera" justify="center">
    <v-col>
      <v-tabs background-color="white" color="deep-black accent-4" centered>
        <v-tab>All</v-tab>
        <v-tab>New Releases</v-tab>
        <v-tab>Most Popular</v-tab>
        <v-tab>Trends</v-tab>
        <v-tab>My Favorites</v-tab>
        <v-tab>Recommendations</v-tab>

        <v-tab-item>
          <v-container fluid>
            <v-row>
              <v-col v-for="(item,i) in mispeliculas" :key="i" cols="6" md="3" sm="6">
                <v-hover v-slot:default="{ hover }">
                  <v-card class="mx-auto" color="grey lighten-4" max-width="600">
                    <v-img :aspect-ratio="260/400" :src="item.imagen">
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
                                class="watch"
                                @click="(modal = true), (currentSlide = 2),cambiarestado2(item.imagen)"
                              >
                                <span class="spanAriadna">WATCH NOW</span>
                              </v-btn>
                            </v-col>
                            <v-col cols="8">
                              <v-btn
                                class="more"
                                @click="(modal = true), (currentSlide = 1),cambiarestado(item.id,
                                item.description,
                                item.imagen,
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
                        </div>
                      </v-expand-transition>
                    </v-img>
                  </v-card>
                </v-hover>
                
              </v-col>
            </v-row>
          </v-container>
          <modal-app v-model="modal" :mostrarCerrar="mostrarCerrar">
                  <WatchNow
                    @finished="mostrarCerrar = true"
                    v-if="currentSlide == 2"
                    :imagen="imagenes"
                  ></WatchNow>
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
        </v-tab-item>
        <v-tab-item></v-tab-item>
        <v-tab-item></v-tab-item>
        <v-tab-item></v-tab-item>
        <v-tab-item></v-tab-item>
        <v-tab-item></v-tab-item>
      </v-tabs>
    </v-col>
  </v-row>
</template>

<script>
import WatchNow from "../modales/watchNow";
import MoreInfo from "../modales/moreInfo";
export default {
  components: {
    WatchNow,
    MoreInfo
  },
  data() {
    return {
      mispeliculas: [],
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
      .get("http://localhost:3000/peliculas")
      .then(res => {
        this.mispeliculas = res.data;
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
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.9;
  position: absolute;
  width: 100%;
}
.titleWeb {
  display: block;
}
.titleMove {
  display: none;
}

@media (max-width: 1024px) {
  .titleWeb {
    display: none;
  }
  .titleMove {
    display: block;
  }
  .v-card--reveal {
    &.title {
      font-size: 10px;
    }
  }
  .spanAriadna {
    font-size: 10px;
  }
}
</style>