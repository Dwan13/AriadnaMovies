/* El modal moreinfo se ocupa de representar todos los datos relevantes de la película */
<template>
  <v-container fluid :class='"pt-0 "+id'>
    <v-row justify="center">
      <v-col cols="12" sm="4">
        <img :src="imagen" alt="imagen" class="radios" />
      </v-col>
      <v-col cols="12" sm="8" justify="center" align="center" class="info radios">
        <v-row>
          <v-col cols="12">
            <h2>{{nombre}}</h2>
          </v-col>
          <v-col cols="12">
            <h3>Director:</h3>
            {{director}}
          </v-col>
          <v-col cols="6">
            <h3>Duración:</h3>
            {{tiempo}} mt
          </v-col>
          <v-col cols="6">
            <h3>Fecha:</h3>
            {{fecha}}
          </v-col>
          <v-col cols="12" class="mt-10">
            <h3>Valoración</h3>
          </v-col>
          <v-col cols="12" class="mt-10">
            <!-- v-rating es un componente que se encarga de dar una valoración a las películas de acuerdo al rating que estas poseean,
            mientras avanza el proyecto estas valoraciones tambien se guardaran en el store y se podrá hacer un promedio -->
            <v-rating color="orange" background-color="dark lighten-3" v-model="rating" ></v-rating>
          </v-col>
          <v-col cols="12" align="left" class="mt-4 pl-10 pr-10">
            <h4>Sinopsis:</h4>
            {{description}}
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    rating:{
    type:Number,
    required:false,
    default:0
    },
    imagen: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    nombre: {
      type: String,
      required: true
    },
    director: {
      type: String,
      required: true
    },
    tiempo: {
      type: Number,
      required: true
    },
    fecha: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.info {
  background: linear-gradient(
    rgba(253, 30, 0, 0.479),
    rgba(248, 248, 248, 0.973)
  );
}
h3,
h2 {
  color: rgba(255, 255, 255, 0.774);
}
.radios {
  border-radius: 30px;
}
</style>