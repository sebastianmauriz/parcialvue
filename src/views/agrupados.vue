<template>
  <b-container class="bv-example-row">
    <b-row><br></b-row>
    
    <b-row>
      <b-col>
        <h3>FUEGO</h3>
      </b-col>
      <b-row>
        <zodiacos
          v-for="zodi in fuego"
          :key="zodi.id"
          :propiedadZodiaco="zodi"
          style="margin-top: 10px"
        ></zodiacos>
      </b-row>
    </b-row>  <br>

    <b-row>
      <b-col>
        <h3>TIERRA</h3>
      </b-col>
      <b-row>
        <zodiacos
          v-for="zodi in tierra"
          :key="zodi.id"
          :propiedadZodiaco="zodi"
          style="margin-top: 10px"
        ></zodiacos>
      </b-row>
    </b-row>  <br>

    <b-row>
      <b-col>
        <h3>AIRE</h3>
      </b-col>
      <b-row>
        <zodiacos
          v-for="zodi in aire"
          :key="zodi.id"
          :propiedadZodiaco="zodi"
          style="margin-top: 10px"
        ></zodiacos>
      </b-row>
    </b-row>  <br>

    <b-row>
      <b-col>
        <h3>AGUA</h3>
      </b-col>
      <b-row>
        <zodiacos
          v-for="zodi in agua"
          :key="zodi.id"
          :propiedadZodiaco="zodi"
          style="margin-top: 10px"
        ></zodiacos>
      </b-row>
    </b-row>  <br>
       
  </b-container>
</template>
 

 
 
<script>
import zodiacos from "@/components/zodiacos";
export default {
  name: "agrupados",
  components: {
    zodiacos,
  },
  mounted() {
    this.getZodiaco();
  },

  data() {
    return {
      zodiacoD: [],
      agua: [],
      aire: [],
      fuego: [],
      tierra: [],
    };
  },
  methods: {
    async getZodiaco() {
      await fetch("http:/test/tb/zodiaco.json")
        .then((res) => res.json())
        .then((data) => (this.zodiacoD = data));
      this.zodiacoD.map((signo, i) => {
        if (signo.elemento === "Agua") {
          this.agua.push(signo);
        }
        if (signo.elemento === "Aire") {
          this.aire.push(signo);
        }
        if (signo.elemento === "Fuego") {
          this.fuego.push(signo);
        }
        if (signo.elemento === "Tierra") {
          this.tierra.push(signo);
        }
      });

      
    },
    

   
  },
};
</script>