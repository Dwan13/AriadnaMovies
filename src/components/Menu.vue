<template>
    <v-app-bar
      app
      color="white"
      class="menu"
    >
      <div class="d-flex align-center">
        <v-img
          alt="Ariadna Logo"
          contain
          src="../assets/logo.png"
          transition="scale-transition"
          width="100"
        />

      </div>

      <v-spacer></v-spacer>
      <nav>
      <router-link to="./">
        <a class="rutas hidden-sm-and-down"  title="Ir a la Home">HOME</a>
      </router-link>
      <router-link to="./categories">
        <a class="rutas hidden-sm-and-down"  title="Ir a Categories">CATEGORIES</a>
      </router-link>
      <router-link to="./myFavorites">
        <a class="rutas hidden-sm-and-down"  title="Ir a My Favorites">MY FAVORITES</a>
      </router-link>
      <router-link to="./signIn">
        <a class="rutas registro hidden-sm-and-down"  title="Ir a Sign In">SIGN IN</a>
      </router-link>
      </nav>
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
         class="hidden-lg-and-down"
      >
        <v-icon
        >mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.rutas{
    padding: 3vh 5vh;
    margin: auto;    
    color: black;
    
    &.registro{
        background-color: rgba(128, 128, 128, 0.089);
    }
    &:hover{
        background-color: rgb(250, 236, 39);
    }
}
.menu{
    padding: 0px 100px;
}

@media (max-width: 600px) {
    .menu{
    padding: 0px 0px;
}
nav .rutas{
    position: absolute;
    top: 100%;
    left: 0;
    display: grid;
    z-index: 100;
    }    
}

</style>