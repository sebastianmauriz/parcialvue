<template>

<div>
  <b-navbar type="dark" variant="dark">
    <b-navbar-nav>
       <b-nav-item active href="/">Home</b-nav-item>
        <b-nav-item active href="/agrupados">Agrupados por elemento</b-nav-item>
       
      
    

      <!-- Navbar dropdowns -->
      <b-nav-item-dropdown text="-Seleccione un mes-" right>
        <b-dropdown-item href="/agrupa-mes/1">Enero</b-dropdown-item>
        <b-dropdown-item href="/agrupa-mes/2">Febrero</b-dropdown-item>
        <b-dropdown-item href="/agrupa-mes/3">Marzo</b-dropdown-item>
        <b-dropdown-item href="/agrupa-mes/4">Abril</b-dropdown-item>
        <b-dropdown-item href="/agrupa-mes/5" >Mayo</b-dropdown-item>
        <b-dropdown-item href="/agrupa-mes/6">Junio</b-dropdown-item>
        <b-dropdown-item href="/agrupa-mes/7">Julio</b-dropdown-item>
        <b-dropdown-item href="/agrupa-mes/8">Agosto</b-dropdown-item>
        <b-dropdown-item href="/agrupa-mes/9">Septiembre</b-dropdown-item>
        <b-dropdown-item href="/agrupa-mes/10">Octubre</b-dropdown-item>
        <b-dropdown-item href="/agrupa-mes/11">Noviembre</b-dropdown-item>
        <b-dropdown-item href="/agrupa-mes/12">Diciembre</b-dropdown-item>
      </b-nav-item-dropdown>
     
      
    </b-navbar-nav>
  </b-navbar>
</div>





</template>

<script>

import zodiacos from "@/components/zodiacos.vue";
export default {
  name:"MenuSuperiorDeOpciones",
  components:{
    zodiacos
  },
  mounted() {
  },
  data() {
    return {
     
     zodiacoEncontrado:[]
      
     //
    };
  },
  methods: {
   
  }
}


</script>
