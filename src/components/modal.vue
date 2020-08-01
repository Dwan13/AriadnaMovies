/* Modal principal basado en el componente v-dialog de vuetify y modificado por el autor */
<template>
<v-dialog
    v-model="modal"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
        scrollable
      >
        <v-card tile>
          <v-toolbar-title
            class="modalApp"
          >
            <button v-if="mostrarCerrar" @click="$emit('click', false)">
          <v-icon class="icon hvr-grow">mdi-close</v-icon>
        </button>            
          </v-toolbar-title>
          <v-card-text>
           <v-flex contain class="dialog-content">
          <slot></slot>
        </v-flex>
          </v-card-text>

          <div style="flex: 1 1 auto;"></div>
        </v-card>
      </v-dialog>
</template>
<script>
export default {
  data() {
    return {};
  },
  model: {
    prop: "modal",
    event: "click"
  },
  props: {
    modal: Boolean,
    width: {
      type: String,
      default: "500px"
    },
    fullscreen: {
      type: Boolean,
      default: true
    },
    mostrarCerrar: {
      type: Boolean,
      default: true
    },
    titulo: {
      type: String,
      default: ""
    },
    colorTitulo: {
      type: String,
      default: "#FFF"
    }
  }
};
</script>

<style lang="scss" scoped>
.icon{
  background-color: white;
}
.modalApp{
  padding: 1% 2%;
  background-color: gray;
}
.dialog-content {
  max-width: 100%;
  margin: auto;
  padding: 10px;
  align-items: center;
  /*font-size: 1.4rem;*/
  @media (max-height: 800px) {
    align-items: start;
  }
}

@media (max-width: 1023px) and (max-height: 1023px) {
  .modalApp{
  padding: 0.5% 5% 4%;
}
}
</style>
