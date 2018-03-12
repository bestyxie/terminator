/**
 * Created by admin on 2018/3/1.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import app from './App.vue';
import routes from './router/router';

/*const Foo = {
  template: '<div>Foo</div>'
}

const Bar = {
  template: '<div>Bar</div>'
}

var routes = [
  {
    path: '',
    component: app,
    children: [
      {
        path: '/foo',
        component: Foo
      },
      {
        path: 'bar',
        component: Bar
      }
    ]
  }
]*/

Vue.use(VueRouter);

var router = new VueRouter({
  routes
})

new Vue({
  el: "#main",
  data: {
    text: "hello"
  },
  router
})

