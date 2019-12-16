<template>
  <div id="app">
    <p v-bind:class="{bluetext : isA}">{{ message }}</p>
    <button v-bind:disabled="isEnable" @click="reverseMessage">反转消息</button>
    <input v-model="message">
    <p-item v-bind:item="persion"></p-item>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      message: 'Welcome to Your Vue.js App',
      persion: {
        text: "xu guozhong"
      },
      isEnable: false,
      isA: true,
      mycolor: '#0000ff',
      mysize: 30
    }
  },
  methods : {
    reverseMessage: function() {
      this.message = this.message.split('').reverse().join('')
    }
  },
  watch : {
    message : function (newValue, oldValue) {
      this.persion.text = this.persion.text.split('').reverse().join('')
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.bluetext {
  color: #0000ff;
  font-size : 30px;
}
</style>
