<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <img alt="Nodejs logo" height="200px" src="../assets/nodejs.jpg" />

    <HelloWorld msg="Welcome to Your Vue.js App + Store Structured + Node/Express API"/>
    <br>
    <h2>👑Example Request From a API👑</h2>
    <input type="text" v-model="search" placeholder="search ...">
    <div>
      <div v-if="isLoading">
        Loading ...
      </div>
      <div v-else>
        <div v-for="(content , index) in filteredDataObj" :key="index">
          <li>{{content.name}}</li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState , mapGetters} from 'vuex';
  import HelloWorld from "@/components/HelloWorld.vue";
  import store from '../store/store.js';

  export default {
    name: "home",
    components: {HelloWorld},
    data(){
      return{
        search: ''
      }
    },
    computed:{
      ...mapState(['data' , 'isLoading']),
      ...mapGetters(['FILTER_SPESIFIC_DATA']),
      filteredDataObj(){
        return this.FILTER_SPESIFIC_DATA(this.search)
      }
    },
    created(){
      store.dispatch('GET_DATA')
    }
  };
</script>

