
<template>
  <div class="productos">
    <b-container fluid>
      <b-card-group deck>
        <div
          v-for="zodi in zodiacoData"
          :key="zodi.id"
          style="margin-top: 10px"
        >
          <zodiacos :zodiacoParam="zodi"></zodiacos>
        </div>
      </b-card-group>
    </b-container>
  </div>
</template>


<script>

import zodiacos from "@/components/zodiacos.vue";

export default {
  name: "Home",
  components: {
 
    zodiacos
  },
  //mounted es como un constructor, cuando se intancie va a llamar a getInstrumentos
  mounted() {
    this.getZodiaco();
  },
  data() {
    return {
      zodiacoData: [],
    };
  },
  methods: {
       
       async getZodiaco(){
         await fetch("http:/test/tb/zodiaco.json")
         .then((res) => res.json())
         .then((data) => (this.zodiacoData = data));
     }
      }

//
    
  
};
</script>

   