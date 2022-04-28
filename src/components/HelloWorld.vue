<template>
 <div id="parent">
   <button @click="genre">Click</button>
   <Modal :bo='b' @send="add" @s='me' />
       
   <h2 style="color:green;">HELLOWORLD COMPONENT</h2>
 <button type="button" class="btn btn-primary" @click="b=!b">New Card</button>
 <br><br><br>

<div v-if="formObj!={}" >
  <div class="card" id="r" style="background-color:green;height: 300px;width:300px;" 
   v-for="f in formObj" :key="f">
  <div class="card-body">
    <div>
     Name: {{f.name}}
     Number:{{f.number}}
     Date:{{f.date}}
     passCode:{{f.passCode}}
    </div>
  </div>
</div>
</div>
 </div>
</template>

<script>
import Modal from './Modal.vue'
export default {
  name: 'HelloWorld',
  mounted(){
    this.check();
  },
  components:{
    Modal
  },
  props: {
    msg: String,
  },
  data(){
    return{
     b:false,
    f:'heiiii',
      formObj:[],
      form:{
        name:'',
        date:'',
        passCode:'',
        number:''
      },
      rr:[
        {name:'abhi',genre:['Comedy','Drama']},
        {name:'abhichandan',genre:['Drama','Adventure','Comedy']},
         {name:'zoro',genre:['Drama','Adventure','Comedy']}
      ],
      genreobj:[],
    }

  },
  methods:{
    genre(){
      // this.rr.map(obj=>{
      //    if(obj.genre.includes('Drama'))
      //    this.genreobj.push(obj);

      // }
      // )
    this.genreobj= this.rr.filter((x,y,z)=>{
      console.log(y);
        return x.genre.includes('Comedy');
      });
    
      console.log(this.genreobj,'heyyy');
    },
    me(e){
      this.b=e;
    },
    add(e){
     this.formObj.push(e);
    
    },
    check(){
      return 100;
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button{
  height: 30px;
  width: 60px;
}
h3 {
  margin: 40px 0 0;
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
#r{
  padding: 40px;
}
.card-body{
  padding: 30px;
}
</style>
