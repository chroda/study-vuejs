Vue.component('greeting', {
  template:'<p>Hey there, I am {{ name }} <button v-on:click="changeName()">Change name</button> </p>',
  data:function(){
    return {
      name: 'Yoshi'
    }
  },
  methods:{
    changeName:function(){
      this.name = 'Mario';
    }
  }
});

var one = new Vue({
  el: '#vue-app-one',

});

var two = new Vue({
  el: '#vue-app-two',

});
