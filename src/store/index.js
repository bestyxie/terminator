/**
 * Created by admin on 2018/3/13.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutation';

console.log(mutations);

Vue.use(Vuex);

const state = {
  result: ""
}

export default new Vuex.Store({
  state,
  mutations
})
