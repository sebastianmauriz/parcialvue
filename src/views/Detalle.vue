<template>
  <div style="margin-top: 80px">
    <b-container>
      <b-img
        style="float: left"
        :src="zodiacoEncontrado.imagen"
        class="d-block sizeImg"
      ></b-img>

      <b-row>
        <b-col> </b-col>
        <b-col>
          <b-row>
            <h2 class="minAltoImg">Elemento: {{ zodiacoEncontrado.elemento }}</h2>
            <p class="h1"></p>
          </b-row>
          <b-row>
            <h2 class="minAltoImg">Simbolo:  {{ zodiacoEncontrado.simbolo }}</h2>
            <p class="h1"></p>
          </b-row>
          <b-row>
            <h2 class="minAltoImg">Meses: </h2>
            <p v-if="zodiacoEncontrado.meses[0] ==1 ||zodiacoEncontrado.meses[1] ==1" >Enero-</p>
            <p v-if="zodiacoEncontrado.meses[0] ==2 || zodiacoEncontrado.meses[1] ==2" >Febrero-</p>
            <p v-if="zodiacoEncontrado.meses[0] ==3 ||zodiacoEncontrado.meses[1] ==3" >Marzo</p>
            <p v-if="zodiacoEncontrado.meses[0] ==4 ||zodiacoEncontrado.meses[1] ==4" >Abril-</p>
            <p v-if="zodiacoEncontrado.meses[0] ==5 ||zodiacoEncontrado.meses[1] ==5" >Mayo</p>
            <p v-if="zodiacoEncontrado.meses[0] ==6 ||zodiacoEncontrado.meses[1] ==6" >Junio</p>
            <p v-if="zodiacoEncontrado.meses[0] ==7 ||zodiacoEncontrado.meses[1] ==7" >Julio</p>
            <p v-if="zodiacoEncontrado.meses[0] ==8 ||zodiacoEncontrado.meses[1] ==8" >Agosto</p>
            <p v-if="zodiacoEncontrado.meses[0] ==9 ||zodiacoEncontrado.meses[1] ==9" >Septiembre</p>
            <p v-if="zodiacoEncontrado.meses[0] ==10 ||zodiacoEncontrado.meses[1] ==10" >Octubre</p>
            <p v-if="zodiacoEncontrado.meses[0] ==11 ||zodiacoEncontrado.meses[1] ==11" >Noviembre</p>
            <p v-if="zodiacoEncontrado.meses[0] ==12 ||zodiacoEncontrado.meses[1] ==12" >Diciembre</p>
                      
          </b-row>
          <b-row>
            <h2 class="minAltoImg">Descripción:   {{ zodiacoEncontrado.descripcion }}</h2>
            <p class="h1">
             
            </p>
          </b-row>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <h2 class="minAltoImg">Signo: {{ zodiacoEncontrado.signo }}</h2>

          <p class="h1"></p>
        </b-col>
      </b-row>
      <b-row>
        <b-col><b-button href="/" variant="primary">VOLVER</b-button> </b-col>
      </b-row>
    </b-container>
  </div>
</template>



<script>
export default {
  name: "Detalle",
  components: {},
  mounted() {
    this.getZodiacoXId();
  },
  data() {
    return {
      zodiacoEncontrado: [],

    };
  },
  methods: {
    async getZodiacoXId() {
      const parametroId = this.$route.params.id;
      const res = await fetch("http:/test/tb/zodiaco.json");
      const resJson = await res.json();
      //console.log(resJson);
      this.zodiacoEncontrado = await resJson.filter(
        (signos) => signos.id == parametroId
      )[0];
      console.log(this.zodiacoEncontrado);
    },
  },
};
</script>


<style scoped>
.minAltoImg {
  font-family: Helvetica;
  font-size: 25px;
}
.h1 {
  font-size: 15px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
</style>