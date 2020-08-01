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
          de acuerdo con el tipo de petición -->
          <Organizador :miarray="mispeliculas"></Organizador>
        </v-tab-item>
        <v-tab-item>
          <Organizador :miarray="misestrenos"></Organizador>
        </v-tab-item>
        <v-tab-item>
          <Organizador :miarray="mispopulares"></Organizador>
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
  data() {
    return {
      mispeliculas: [],
      misestrenos: [],
      mispopulares: []
    };
  },
  created() {
        /* Aplicando axios como Api-Rest */

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
    buscarPopulares() {
          /* Aplicando axios como Api-Rest */
      this.axios
        .get("http://localhost:3000/peliculas")
        .then(res => {
          this.mispeliculas = res.data;
              /* Se realiza un filtrado al objeto json para garantizar que 
              solo se imprima por pantalla aquellas películas que tengan una valoración de 5 */
          var filtered = this.mispeliculas.filter(function(item) {
            return item.valoracion == 5;
          });
          this.mispopulares = filtered;
        })
        .catch(e => {
          console(e.response);
        });
    },
    llmarEstrenos() {
                /* Aplicando axios como Api-Rest */
      this.axios
        .get("http://localhost:3000/estrenos")
        .then(res => {
          this.misestrenos = res.data;
        })
        .catch(e => {
          console(e.response);
        });
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