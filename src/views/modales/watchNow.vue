/* Este modal permite un acercamiento muy abstracto de la ventana final para la reproducción de películas */
<template>
  <v-container fluid class="pt-0">
    <v-row justify="center">
      <v-col cols="6" sm="12" align="center">
          <v-card >
        <img class="play hvr-grow" src="../../assets/play.png" alt="play" @click="probar()"  />
        <img :src="imagen" :alt='"Imagen de"+imagen' />
          </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    imagen: {
      type: String,
      required: true
    }
  },
  methods:{
      probar(){
          alert("Prueba evento")
      }
  }
};
</script>

<style lang="scss">
img {
  max-width: 100%;
}
.play {
    position: absolute;
    top: 50%;
    left: 50%;
    cursor: pointer;
  z-index: 100;
}
.v-sheet,.v-card {
    box-shadow: none !important;
}

</style>