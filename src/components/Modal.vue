<template>
    <div id="parent">
            <div v-if="bo" class="vue-modal">
                <div class="vue-modal-inner">
                    <div class="vue-modal-content">
                       <div >
  <table>
    <tr>
      <td>
       <div class="child">
     <div class="card" style="background-color:green;width:200px;height:200px" 
     v-if="formValues.name!='' | formValues.number!='' | formValues.date!='' | formValues.passCode!='' ">
     <div class="card-inner" >
        <p style="color:black;">
  Name:{{formValues.name}}<br>
  Date:{{formValues.date}}<br>
  Number:{{formValues.number}}<br>
  Passcode:{{formValues.passCode}}
  </p>
     </div>
  </div>
   </div>
    </td>
  
  <td>
    <div class="child">
<div class="form-group" >
  <label for="name">Name:</label><br>
  <input type="text" id="name" v-model="formValues.name"><br>
   <label for="date">Date:</label><br>
  <input type="text" id="date" v-model="formValues.date"><br>
   <label for="number">number:</label><br>
  <input type="text" id="number" v-model="formValues.number"><br>
   <label for="PassCode">Passcode:</label><br>
  <input type="text" id="PassCode" v-model="formValues.passCode"><br><br>
  <p><input @click="$emit('s',a)" value="Close" type="button" />  <button @click="addClean">submit</button></p>

</div>
  </div>
  </td>
  </tr>
  </table>
  
</div>
                    </div>
                </div>
            </div>
    </div>
</template>''

<script>
import fields from './field.json';
    export default {
     name:'Modal'  ,
     props:['bo'],
     emits:['send','s'],
     methods:{
       addClean(){
       this.$emit('send',this.formValues);
         this.formValues=this.form;
       }
     },
     data(){
    return{
      fieldArray: fields,
     a:false,
      formValues:{
        name:'',
        date:'',
        passCode:'',
        number:''
      },
      form:{
        name:'',
        date:'',
        passCode:'',
        number:''
      },
    }

  }, 
    }
</script>

<style  scoped>
 
 .vue-modal-inner{
    position: fixed;
    top: 0;
     right: 0;
    bottom: 0;
    left: 0;
     z-index: 99;
     background-color: rgba(0,0,0,0.2);
     display: flex;
     align-items: center;
     justify-content: center;

 }
.vue-modal-content{
     background: white;
   padding: 32px;
 } 
 .card-inner{
   height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
 }
 .child{
   padding: 20px;
 }
 

</style>