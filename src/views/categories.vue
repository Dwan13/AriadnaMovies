<!-- Creado por Dwan Felipe Veloza Paez 
  ############# Julio 2020 ###############
  ----En este trabajo se plantea un ------
  ----aplicativo para cinemas responsive,
  ---- valiendoce de vue.js, axios y -------
  -----vuetify--------------------------
-->
<template>
  <v-container fluid class="pt-0">
    <v-row>
      <v-col cols="12" sm="6" offset-sm="3">
        <v-card>
          <v-item-group>
            <v-container fluid>
              <v-row >
                <v-col v-for="(item,i)  in miscategorias" :key="i" cols="12" md="4">
                  <v-item v-slot:default="{ active, toggle }">
                    <v-card
                      :color="active ? 'dark' : ''"
                      class="d-flex align-center"
                      dark
                      height="200"
                      @click="toggle"
                       justify="center"
                    >
                      <v-scroll-y-transition>
                        <div v-if="active" class="display-3 flex-grow-1 text-center">
                          <v-img class="cartelera" :src="item.img"></v-img>
                        </div>
                      </v-scroll-y-transition>
                    </v-card>
                  </v-item>
                  {{item.nombre}}
                </v-col>
              </v-row>
            </v-container>
          </v-item-group>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      miscategorias: []
    };
  },
  created() {
    /* Aplicando axios como Api-Rest */
    this.axios
      .get("http://localhost:3000/clasificaiones")
      .then(res => {
        this.miscategorias = res.data;
      })
      .catch(e => {
        console(e.response);
      });
  }
};
</script>
<style lang="scss" scoped>
  .cartelera {
    position: absolute;
    max-height: 100%;
    top: 0;
  }
</style>