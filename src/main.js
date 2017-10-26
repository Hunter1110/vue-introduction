import Vue from 'vue';
import App from './App.vue';
import App2 from './App2.vue';
import App3 from './App3.vue';

window.onload = () => {
  const elApp = document.createElement('div');
  elApp.id = 'app';
  document.body.appendChild(elApp);

  const elApp2 = document.createElement('div');
  elApp2.id = 'app-2';
  document.body.appendChild(elApp2);

  const elApp3 = document.createElement('div');
  elApp3.id = 'app-3';
  document.body.appendChild(elApp3);

  new Vue({
    el: '#app',
    render: h => h(App)
  });

  new Vue({
    el: '#app-2',
    render: h => h(App2)
  });

  new Vue({
    el: '#app-3',
    render: h => h(App3)
  })
};

