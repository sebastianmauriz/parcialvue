<template>
 <div style="margin-top:80px">
    <b-container >
      <b-row>
        <b-col>
           <b-img v-if="zodiacoEncontrado.imagen"
            :src="zodiacoEncontrado.imagen" 
            class="d-block mx-auto sizeImg"
          ></b-img>
             <b-row >
                <b-col >
                    <h2 class="minAltoImg" >Signo</h2>
                    <h1 style="fontSize:15px" v-if="zodiacoEncontrado.signo" >{{zodiacoEncontrado.signo}}</h1>
                </b-col>
            </b-row>
            <b-row >
               <b-col >
                    <h2 class="minAltoImg" >Elemento</h2>
                    <h1 style="fontSize:15px"  >{{zodiacoEncontrado.elemento}}</h1>
                </b-col>
                 <b-col >
                    <h2 class="minAltoImg" >Simbolo</h2>
                    <h1 style="fontSize:15px"  >{{zodiacoEncontrado.simbolo}}</h1>
                </b-col>
                 <b-col >
                    <h2 class="minAltoImg" >Meses</h2>
                    <h1 style="fontSize:15px"  >{{zodiacoEncontrado.meses}}</h1>
                </b-col>
                <b-col >
                    <h2 class="minAltoImg" >Descripción:</h2>
                    <h1 style="fontSize:15px"  >{{zodiacoEncontrado.descripcion}}</h1>
                </b-col>
            </b-row>  
             <b-row>
            <b-col
              ><b-button href="/" variant="primary"
                >VOLVER</b-button
              ></b-col>
          </b-row>   
        </b-col>
        
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
    console.log(this.getZodiacoXId())
  },
  data() {
    return {
      zodiacoEncontrado:[]
    };
        
  },
  methods: {
      async getZodiacoXId() {
        const parametroId = this.$route.params.id;
        const res = await fetch("http:/test/tb/zodiaco.json");
        const resJson = await res.json();
        console.log(resJson);
        this.zodiacoEncontrado = await resJson.find(
          signos => signos.id == parametroId )[0];
        //console.log(this.zodiacoEncontrado);
      }
  
  }
};
</script>


<style scoped>
.minAltoImg{
  font-family:Helvetica;

} 
</style>