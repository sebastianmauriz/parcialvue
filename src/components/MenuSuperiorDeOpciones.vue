<template>

<div>
  <b-navbar type="dark" variant="dark">
    <b-navbar-nav>
       <b-nav-item active href="/">Home</b-nav-item>
        <b-nav-item active href="/agrupados-por-elemento">Agrupados por elemento</b-nav-item>


      <!-- Navbar dropdowns -->
      <b-nav-item-dropdown text="-Seleccione un mes-" right>
        <b-dropdown-item href="/detalle/1">Enero</b-dropdown-item>
        <b-dropdown-item href="/detalle/2">Febrero</b-dropdown-item>
        <b-dropdown-item href="/detalle/3">Marzo</b-dropdown-item>
        <b-dropdown-item href="/detalle/4">Abril</b-dropdown-item>
        <b-dropdown-item href="/detalle/5">Mayo</b-dropdown-item>
        <b-dropdown-item href="/detalle/6">Junio</b-dropdown-item>
        <b-dropdown-item href="/detalle/7">Julio</b-dropdown-item>
        <b-dropdown-item href="/detalle/8">Agosto</b-dropdown-item>
        <b-dropdown-item href="/detalle/9">Septiembre</b-dropdown-item>
        <b-dropdown-item href="/detalle/10">Octubre</b-dropdown-item>
        <b-dropdown-item href="/detalle/11">Noviembre</b-dropdown-item>
        <b-dropdown-item href="/detalle/12">Diciembre</b-dropdown-item>
      </b-nav-item-dropdown>

      
    </b-navbar-nav>
  </b-navbar>
</div>





</template>

<script>
export default {};
</script>
