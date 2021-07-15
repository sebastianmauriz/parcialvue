<template>
  <div class="productos">
    <b-container fluid>
      <b-card-group deck>
        <div v-for="zodi in zodiacoData" :key="zodi.id" style="margin-top: 10px">
          <zodiacos :propiedadZodiaco="zodi"></zodiacos>
        </div>
      </b-card-group>

     
    </b-container>
  </div>
</template>


<script>

  import zodiacos from "@/components/zodiacos.vue";
  import MenuSuperiorDeOpciones from "@/components/MenuSuperiorDeOpciones";


  export default {
    name: "Home",
    components: {
      MenuSuperiorDeOpciones,
      zodiacos
    },
    //mounted es como un constructor, cuando se intancie va a llamar a getInstrumentos
    mounted() {
      this.getZodiaco();
      //console.log(this.zodiacoData)

    },
    computed:{
     

    },
    data() {
      return {
        zodiacoData: [],
        zodiaMeses: [],
        
        //
      };
    },

    methods: {
     
     

      async getZodiaco() {
        const parametroId = this.$route.params.id;
        await fetch("http:/test/tb/zodiaco.json")
          .then((res) => res.json())
          .then((data) => (this.zodiacoData = data));
        console.log(parametroId)
        /*  if(parametroId > 0){
        this.zodiacoData.map((signo, i)=>{
           if(signo.meses[0] == parametroId && 
             signo.meses[1] == (parseInt(1)+parseInt(parametroId)) ||
             signo.meses[1] == parametroId &&
             signo.meses[0] == (parseInt(parametroId)-parseInt(1))
             ){
              this.zodiaMeses= this.zodiacoData
   
             }
          else{
               this.zodiaco=this.zodiacoData
   
             }
       }
        )}  */


      },



    }

    //


  }
</script>