<!-- Creado por Dwan Felipe Veloza Paez 
  ############# Julio 2020 ###############
  ----En este trabajo se plantea un ------
  ----aplicativo para cinemas responsive,
  ---- valiendoce de vue.js, axios y -------
  -----vuetify--------------------------
-->

<template>
  <v-row class="mt-5 Cartelera" justify="center">
    <v-col>
      <!-- Se utiliza v-tabs de vuetify para crear interacciones ágiles de acuerdo al componente organizador -->
      <v-tabs background-color="white" color="deep-black accent-4" centered>
        <v-tab>All</v-tab>
        <v-tab @click="llmarEstrenos()">New Releases</v-tab>
        <v-tab @click="buscarPopulares()">Most Popular</v-tab>
        <v-tab>Trends</v-tab>
        <v-tab>My Favorites</v-tab>
        <v-tab>Recommendations</v-tab>

        <v-tab-item>
          <!-- El componente organizador utiliza un prop llamada miarray que permite distribuir las películar
          de acuerdo con el tipo de petición-->
          <Organizador :miarray="Peliculas()"></Organizador>
        </v-tab-item>
        <v-tab-item>
          <Organizador :miarray="Estrenos()"></Organizador>
        </v-tab-item>
        <v-tab-item>
          <Organizador :miarray="Populares()"></Organizador>
        </v-tab-item>
        <v-tab-item></v-tab-item>
        <v-tab-item></v-tab-item>
        <v-tab-item></v-tab-item>
      </v-tabs>
    </v-col>
  </v-row>
</template>

<script>
import Organizador from "../../views/tabs/organizador/organizador";
export default {
  components: {
    Organizador
  },
  methods: {
    Peliculas(){
         return this.$store.state.misPeliculas
    },
    Estrenos(){
 return this.$store.state.misEstrenos
    },
    Populares() {
      return this.$store.state.misPopulares
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
/* Media queries para el proceso de responsive */
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