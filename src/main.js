import Vue from 'vue';
import App from './App.vue';
import App2 from './App2.vue';
//import App3 from './App3.vue';
//import App4 from './App4.vue';
import App5 from './App5.vue';
import App6 from './App6.vue';
import App7 from './App7.vue';
window.onload = () => {
  createApp();
  createApp2();
  createApp3();
  createApp4();
  createApp5();
  createApp6();
  createApp7();
};

function createApp() {
  const elApp = document.createElement('div');
  elApp.id = 'app';
  document.body.appendChild(elApp);

  window.app = new Vue({
    el: '#app',
    render: h => h(App)
  });
}

function createApp2() {
  const elApp2 = document.createElement('div');
  elApp2.id = 'app-2';
  document.body.appendChild(elApp2);

  window.app2 = new Vue({
    el: '#app-2',
    render: h => h(App2)
  });
}

function createApp3() {
  const elApp3 = document.createElement('div');
  elApp3.id = 'app-3';
  document.body.appendChild(elApp3);

  /*
  window.app3 = new Vue({
    el: '#app-3',
    render: h => h(App3)
  });
  */

  const elP = document.createElement('p');
  elP.setAttribute('v-if', 'seen');
  elP.innerText = '你现在看到我了';
  elApp3.appendChild(elP);


  const app3 = new Vue({
    el: '#app-3',
    data: {
      seen: true
    }
  });
  window.app3 = app3;

  
}

function createApp4() {
  const elApp4 = document.createElement('div');
  elApp4.id = 'app-4';
  document.body.appendChild(elApp4);

  /*
  window.app4 = new Vue({
    el: '#app-4',
    template: '<App4/>',
    components: { App4 }
  });
  */

  const elOl = document.createElement('ol');
  elApp4.appendChild(elOl);

  const elLi = document.createElement('li');
  elLi.setAttribute('v-for', 'todo in todos');
  elLi.setAttribute('v-bind:key', 'todo.text');
  elLi.innerText = '{{ todo.text }}';
  elOl.appendChild(elLi);

  window.app4 = new Vue({
    el: '#app-4',
    data: {
      todos: [
        { text: '学习 JavaScript' } ,
        { text: '学习 Vue' },
        { text: '整个牛项目' }
      ]
    }
  });
}

function createApp5() {
  const elApp = document.createElement('div');
  elApp.id = 'app-5';
  document.body.appendChild(elApp);

  window.app5 = new Vue({
    el: '#app-5',
    template: '<App5/>',
    components: { App5 }
  });
}

function createApp6() {
  const elApp = document.createElement('div');
  elApp.id = 'app-6';
  document.body.appendChild(elApp);

  window.app6 = new Vue({
    el: '#app-6',
    template: '<App6/>',
    components: { App6 }
  });
}

function createApp7() {
  const elApp = document.createElement('div');
  elApp.id = 'app-7';
  document.body.appendChild(elApp);

  window.app7 = new Vue({
    el: '#app-7',
    template: '<App7 :todos="todos" />',
    components: { App7 },
    data: {
      todos: [
        { text: '学习 JavaScript' } ,
        { text: '学习 Vue' },
        { text: '整个牛项目' }
      ]
    }
  });
}