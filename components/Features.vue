<template>
        <div v-bind:id="$store.state.id" class="features-clean" v-bind:class="$store.state.class">
        <div class="container">
            <div class="intro pt-4">
                <h2 class="text-center">{{ features.title }}</h2>
                <p class="text-center">{{features.description}}</p>
            </div>
            <div class="row features">
                <div class="col-sm-6 col-lg-4 item" v-for="(item,index) in features.items" v-bind:key=index>
                    <i class="fa icon" v-bind:class="item.icon"/>
                    <h3 class="name">{{ item.name }}</h3>
                    <p class="description">{{ item.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.features-clean {
  color:#313437;
  background-color:#fff;
  padding-bottom:30px;
}

@media (max-width:767px) {
  .features-clean {
    padding-bottom:10px;
  }
}

.features-clean p {
  color:#7d8285;
}

.features-clean h2 {
  font-weight:bold;
  margin-bottom:40px;
  padding-top:40px;
  color:inherit;
}

@media (max-width:767px) {
  .features-clean h2 {
    margin-bottom:25px;
    padding-top:25px;
    font-size:24px;
  }
}

.features-clean .intro {
  font-size:16px;
  max-width:500px;
  margin:0 auto 60px;
}

@media (max-width:767px) {
  .features-clean .intro {
    margin-bottom:40px;
  }
}

.features-clean .item {
  min-height:100px;
  padding-left:80px;
  margin-bottom:40px;
}

@media (max-width:767px) {
  .features-clean .item {
    min-height:0;
  }
}

.features-clean .item .name {
  font-size:20px;
  font-weight:bold;
  margin-top:0;
  margin-bottom:20px;
  color:inherit;
}

.features-clean .item .description {
  font-size:15px;
  margin-bottom:0;
}

.features-clean .item .icon {
  font-size:40px;
  color:#1485ee;
  float:left;
  margin-left:-65px;
}


</style>
<script>
import { mapState } from 'vuex'

export default {
      computed: mapState([
    'features'
  ])
}
</script>
