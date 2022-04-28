<template>
    <div>
       <h1>PRAC COMPONENT</h1>
      <input type="text" v-model="r">
      <a href="https://www.w3schools.com/jsref/obj_window.asp" target="_self">click here</a>
      <button style="width:100px;height:70px;" @click="x">CLICK</button>
    </div>
</template>

<script>
    export default {
        data(){
            return {
               r:0,
            }
    },
    methods:{
        x(){
          window.open();   
        }
    },
    computed:{
        
    },
    watch:{
        r(newvalue,oldvalue){
             if(newvalue==3){
                 alert('can');
             }
        }
    }
    }
</script>

<style lang="scss" scoped>

</style>