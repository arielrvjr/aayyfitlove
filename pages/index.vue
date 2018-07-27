<template>
    <b-container >
    <about id="aboutus" class="section" />
    <features id="features" class="section" />
    <results id="results" class="section"/>  
    <contact id="contact" class="section" />
    </b-container>
</template>


<script>

import Contact from '~/components/Contact.vue'
import About from '~/components/About.vue'
import Results from '~/components/Results.vue'
import Features from '~/components/Features.vue'

export default {
  components: {
    Contact,
    About,
    Features,
    Results
  },
  created(){
    this.$store.dispatch('init');
  }
}
</script>
