/**
 * Created by admin on 2018/3/12.
 */
import App from '../App.vue';

export default [
  {
    path: "/",
    component: App,
    children: [
      {
        path: "",
        component: r => require.ensure([], () => r(require('../page/home/')), 'home')
      },
      {
        path: "/item",
          component: r => require.ensure([], () => r(require('../page/item/')), 'item')
      },
      {
        path: "/result",
          component: r => require.ensure([], () => r(require('../page/result/')), 'result')
      }
    ]
  },

]
