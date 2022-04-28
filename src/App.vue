<template>
<div>
  <h1 style="color:red;"> APP COMPONENT</h1>
   <Form/>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

  </div>
</template>

<script>
import Form from './components/Form.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld,
   Form,
  },
  data(){
    return{
      formvalue:{
        name:'',
        date:'',
        passCode:'',
        number:''
      },
    
  }
}
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
