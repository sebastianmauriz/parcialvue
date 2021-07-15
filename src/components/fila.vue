<template>
     <div>
    <b-card
      tag="article"
      style="max-width: 20rem; min-width: 20rem"
      class="mb-2"
    >
       <b-card-img
        :src="zodiacoParam.imagen"
        alt="Image"
         
        style="min-height: 200px; max-height: 200px"
      ></b-card-img> 
      <b-card-title :title="zodiacoParam.signo"></b-card-title>
         

      <div style="text-align: center">
        <b-button
          :href="'/detalle/' + zodiacoParam.id"
          variant="primary"
          style="width: 100%"
        >
          <b>Ver Detalle</b>
        </b-button>
      </div>
    </b-card>
  </div>
</template>


<script>
export default {
    name: "fila",
    components: {},
  props: ["filas"],


 data() {
    return {
      zodiacoD: [],
    };
  },
  methods: {
       
       async getZodiaco(){
         await fetch("http:/test/tb/zodiaco.json")
         .then((res) => res.json())
         .then((data) => (this.zodiacoD = data));
         
     },
     elementos(zodiaco){
         const encontrar;
         const agua = this.zodiacoD.map((signo,i)=>{
             if(signo.elemento=="Agua"){
                 return encontrar;
             }
         })
     }
      }
      };
</script>