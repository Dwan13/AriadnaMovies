<template>
<v-container fluid class="pt-0">
    <v-row>
        
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
<style lang="scss">
</style>