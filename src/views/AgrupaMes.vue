<template>
 
<div style="margin-top:80px">
    

    <b-card-group deck>
      <div v-for="zodi in enero" :key="zodi.id" style="margin-top: 10px">
        <zodiacos :propiedadZodiaco="zodi"></zodiacos>
      </div>
    </b-card-group>
  </div>
 
</template>




<script>
import zodiacos from "@/components/zodiacos";
import MenuSuperiorDeOpciones from "@/components/MenuSuperiorDeOpciones";
export default {
  name: "AgrupaMes",
  components: {
    zodiacos,
    MenuSuperiorDeOpciones
  },
 /* computed:{

    filtrarMes: function (){
      const filtro = this.$route.params.filtro;
      console.log(filtro);
      return this.zodiacoEncontrado.filter((signo) => {
        return (signo.meses.indexOf(filtro.toLowerCase())>-1);
        

       /* if (
          signo.id == 10 || signo.id ==11 
        ) {
          this.enero.push(signo);
          return this.enero
         
        }
         if (
          signo.id == 11 || signo.id ==12 
        ) {
          this.febrero.push(signo);
          return this.febrero
         
        }
         if (
          signo.id == 1 || signo.id ==12 
        ) {
          this.marzo.push(signo);
          return this.marzo
        }
       
       
        
      });

    }

  }, */
  mounted() {
    this.MesEnero()
  },
  data() {
    return {
      zodiacoEncontrado: [],
      enero:[],
    
    };
  },
  
  methods: {
    async MesEnero() {
      
      const parametroId = this.$route.params.id;
        await fetch("http:/test/tb/zodiaco.json")
          .then((res) => res.json()) 
          
          .then((data) => (this.zodiacoEncontrado = data));
          
        this.zodiacoEncontrado.map((signo, i) => {
          if (signo.meses[0] == parametroId || signo.meses[1] == parametroId) {
            this.enero.push(signo);
            
            
          }

        }
        )
        console.log(this.enero)
      },
  },
};
</script>
