import Vue from 'vue';
import App from './App.vue';
import App2 from './App2.vue';


window.onload = () => {
  const elApp = document.createElement('div');
  elApp.id = 'app';
  document.body.appendChild(elApp);

  const elApp2 = document.createElement('div');
  elApp2.id = 'app-2';
  document.body.appendChild(elApp2);

  new Vue({
    el: '#app',
    render: h => h(App)
  });

  new Vue({
    el: '#app-2',
    render: h => h(App2)
  })
};

