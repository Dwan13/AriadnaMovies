<!-- Creado por Dwan Felipe Veloza Paez 
  ############# Julio-Agosto 2020 ###############
  ----En este trabajo se plantea un ------
  ----aplicativo para cinemas responsive,
  ---- valiendoce de vue.js, axios y -------
  -----vuetify--------------------------
-->
<template>
  <v-app>
<menu-app></menu-app>
      <v-main>
          <router-view/>
      </v-main>
  </v-app>
</template>
<style lang="scss" >
@import"sass/globales.scss";
</style>