<template>
  <v-container fluid class="pt-0">
      <v-row justify="center">
          <v-col cols="6" sm="12"><img :src="imagen" :alt='"Imagen de"+imagen'></v-col>
      </v-row>
  </v-container>

</template>

<script>
export default {
props:{
     imagen:{
            type:String,
            required:true
        }
}
}
</script>

<style lang="scss">
img{
    max-width: 100%;
}
</style>