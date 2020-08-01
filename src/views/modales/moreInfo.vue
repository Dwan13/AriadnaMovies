<template>
  <v-container fluid :class='"pt-0"+id'>
    <v-row justify="center">
      <v-col cols="6">
        <img :src="imagen" alt />
      </v-col>
      <v-col cols="6">
        <v-row>
          <v-col cols="12">{{nombre}}</v-col>
          <v-col cols="12">{{director}}</v-col>
          <v-col cols="6">{{tiempo}}</v-col>
          <v-col cols="6">{{fecha}}</v-col>
        </v-row>
      </v-col>
      <v-col cols="12">{{description}}</v-col>
      <v-col cols="12"></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
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

<style>
</style>