<template>
    <div v-bind:id="$store.state.id" class="article-list $store.state.class">
        <div class="container">
            <div class="intro pt-4">
                <h2 class="text-center">{{ results.title }}</h2>
                <p class="text-center">{{results.description}}</p>
            </div>
            <div class="row articles">
                <div class="item" v-bind:class="item.class" v-for="(item,index) in results.items" v-bind:key=index>
                    <a href="#" v-if="item.image"><img class="img-fluid" v-bind:src="item.image"></a>
                    <h3 class="name" v-if="item.name">{{ item.name }}</h3>
                    <p class="description" v-if="item.description">{{ item.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.article-list {
  color:#313437;
  background-color:#fff;
}

.article-list .item {
  padding-top:50px;
  min-height:425px;
  text-align:center;
}

.article-list .item .name {
  font-weight:bold;
  font-size:16px;
  margin-top:20px;
  color:inherit;
}

.article-list .item .description {
    text-align: justify
}

</style>

<script>
import { mapState } from 'vuex'

export default {
      computed: mapState([
    'results'
  ])
}
</script>
