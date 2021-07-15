<template>
  <div>
    <b-card
      tag="article"
      style="max-width: 20rem; min-width: 20rem"
      class="mb-2"
    >
       <b-card-img
        :src="propiedadZodiaco.imagen"
        alt="Image"
         
        style="min-height: 200px; max-height: 200px"
      ></b-card-img> 
      <b-card-title :title="propiedadZodiaco.signo"></b-card-title>
         

      <div style="text-align: center">
        <b-button
          :href="'/detalle/' + propiedadZodiaco.id"
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
  props: ["propiedadZodiaco"],
};
</script>


<style scoped>
</style>
