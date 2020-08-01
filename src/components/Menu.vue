/* Menu del aplicativo */
<template>
  <div>
    <v-app-bar app color="white" class="menu">
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
        <!-- Uso de router-link de vue para la navegación entre páginas -->
        <router-link to="./">
        <!-- la clase hidden-sm-and-down permite ocultar el menu principal una vez se entra en modo responsive -->
          <a class="rutas hidden-sm-and-down" title="Ir a la Home">HOME</a>
        </router-link>
        <router-link to="./categories">
          <a class="rutas hidden-sm-and-down" title="Ir a Categories">CATEGORIES</a>
        </router-link>
        <router-link to="./myFavorites">
          <a class="rutas hidden-sm-and-down" title="Ir a My Favorites">MY FAVORITES</a>
        </router-link>
        <router-link to="./signIn">
          <a class="rutas registro hidden-sm-and-down" title="Ir a Sign In">SIGN IN</a>
        </router-link>
      </nav>
      <v-btn target="_blank" text class="iconoResponsive" @click.stop="drawer = !drawer">
         <v-icon class="iconoResponsive__despliegue" x-large>hamburger-menu</v-icon>
        <v-app-bar-nav-icon ></v-app-bar-nav-icon>
      </v-btn>
    </v-app-bar>
<!-- Se implemento v-navigation-drawer para tener un menú responsive -->
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-layout mt-4 ml-2 column align-center>
        <v-flex>
          <v-list-item class="Items">
            <v-list-item-content>
              <router-link to="./">
                <a class="rutas" title="Ir a la Home">HOME</a>
              </router-link>
            </v-list-item-content>
            <v-list-item-content>
              <router-link to="./categories">
                <a class="rutas" title="Ir a Categories">CATEGORIES</a>
              </router-link>
            </v-list-item-content>
            <v-list-item-content>
              <router-link to="./myFavorites">
                <a class="rutas" title="Ir a My Favorites">MY FAVORITES</a>
              </router-link>
            </v-list-item-content>
            <v-list-item-content>
              <router-link to="./signIn">
                <a class="rutas" title="Ir a Sign In">SIGN IN</a>
              </router-link>
            </v-list-item-content>
          </v-list-item>
        </v-flex>
      </v-layout>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      drawer: null
    };
  }
};
</script>
<style lang="scss" scoped>
.mdi:before,
.mdi-set{
  font-size: xx-large !important;
}
.Items {
  list-style-type: square;
  display: inline;
  padding: 0 1em 0 0;
}
.v-navigation-drawer {
  z-index: 1000;
}
.iconoResponsive {
  display: none;
}
.v-list-item__content{
  padding: 10px !important;
}
.rutas {
  position: relative;
  padding: 3% 30px;
  margin: auto;
  color: black;
  &.registro {
    background-color: rgba(128, 128, 128, 0.089);
  }
  &:hover {
    background-color: rgb(250, 236, 39);
  }
}
.menu {
  padding: 0 70px;
}

@media (max-width: 1023px) {
  .iconoResponsive {
    display: block;
    &__despliegue {
      margin-top: 20%;
    }
  }
  .menu {
    padding: 0px 0px;
  }
}
</style>