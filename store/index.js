import Vuex from 'vuex'

import dataJson from '~/data'

const createStore = () => {
  return new Vuex.Store({
    state: {
      brand: {},
      about: {},
      results: {},
      features: {}
    },
    actions:{
        init({commit}) {
          commit('SET_SITE', dataJson)
        }          
                
    },
    mutations:{
        SET_SITE(state,site) {
          console.log('site', site);
          state.brand = site.brand;
          state.about = site.about;
          state.features = site.features;
          state.results = site.results;
        }
    }
  })
}

export default createStore