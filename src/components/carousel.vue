<template>
<v-container class="animated fadeInLeft" fluid>
  
      <div v-for="(item,i) in misestrenos"
          :key="i">
           <v-col cols="6" sm="12"   :class="'slide'+item.id" >
            <div v-if="status==item.id">
            <img :src="item.imagen" alt="" >
            </div>
        </v-col>
          <v-btn :class="'dot-nav'" @click="cambiarEstado(item.id)"></v-btn>
        </div>
</v-container>
</template>

<script>
export default {
    status:1,
    props:{
        imagen:{
            type:String,
            required:true
        },
        identificador:{
            type:Number,
            required:true,
            default:1
        },
        opciones:{
            type:Array,
            required:false
        }
    },
    methods:{
        cambiarEstado(id){
            alert(id)
            this.status=id
        }
    }
}
</script>

<style>
</style>