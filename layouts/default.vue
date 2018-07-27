<template>
<div > 
<b-navbar  toggleable="md" type="light" fixed="top">
        <b-container>
<b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="#">{{ brand.title }}</b-navbar-brand>
  
  <b-collapse is-nav id="nav_collapse">
    <b-navbar-nav class="ml-auto" >
      <b-nav-item href="#aboutus"  @click="scrollIntoView">Nosotros</b-nav-item>
      <b-nav-item href="#features" @click="scrollIntoView">Servicio</b-nav-item>
      <b-nav-item href="#results"  @click="scrollIntoView">Resultados</b-nav-item>
      <b-nav-item href="#contact"  @click="scrollIntoView">Contacto</b-nav-item>
      <b-nav-item v-bind:href="`${brand.instagram}`" class="follow" ><i class="fa fa-instagram"></i> Síguenos</b-nav-item>
    </b-navbar-nav>
  </b-collapse>  
  </b-container>
    </b-navbar>
    <nuxt />
    
    <footer>
        <p class="text-center copyright">{{ brand.title }} 2018 | Distribuidores independientes de Herbalife.&nbsp;</p>
    </footer>

</div>
    
  
  
</template>

<style>
body {
  margin:0;
  font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size:1rem;
  font-weight:400;
  line-height:1.5;
  color:#212529;
  text-align:left;
  background-color:#fff;
}


.section {
  padding-top:2.5rem;
}

.follow {
  font-weight:600;
}



.fa.fa-instagram {
  font-weight:600;
}

footer {
  padding:50px 0;
  background-color:#fff;
  color:#4b4c4d;
}

.copyright {
  margin-top:14px;
  margin-bottom:0;
  font-size:13px;
  opacity:0.6;
}

.navbar-light{
    background: white;
}
.navbar-toggler:focus {
  background:none;
}

.navbar-toggler:focus {
  background:none;
}

.navbar-toggler {
  border-color:#ddd;
  color:#888;
}

.navbar-nav a.active:hover {
  color:#3bc8c8 !important;
  font-weight:600;
  background:none;
  pointer-events:none;
}

.navbar .navbar-nav .nav-link {
  padding-left:18px;
  padding-right:18px;
}

.navbar-nav .nav-link {
  color:#465765;
}

.navbar-brand {
  font-weight:bold;
  color:inherit;
  text-transform: uppercase;
}

.navbar-nav .nav-link:focus, .navbar-nav .nav-link:hover {
  color:rgba(0,0,0,.7) !important;
}

.nav-link:focus, .nav-link:hover {
  text-decoration:none;
}





</style>
<script>

import $ from 'jquery'
import { mapState } from 'vuex'

export default {
  
  computed: mapState([
    'brand'
  ]),
  
    methods: {
    scrollIntoView (evt) {
      evt.preventDefault()
      const href = evt.target.getAttribute('href')
      const el = href ? document.querySelector(href) : null
      if (el) {
        $('html, body').animate({
      scrollTop: el.offsetTop
    }, 1000);
      }
    }
  }
}
</script>
