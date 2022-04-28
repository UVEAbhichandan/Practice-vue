<template>
  <div class="form-group">
    <input type="text" v-model="a.form.name" placeholder="name" /><br /><br />
    <input
      type="text"
      v-model="a.form.password"
      placeholder="password"
    /><br /><br />
    <input
      type="text"
      v-model="a.form.cpassword"
      placeholder="Confirm password"
    /><br /><br />
    <button
      @click="b"
      style="width: 70px; height: 50px; background-color: red"
    >
      SUBMIT
    </button>
  </div>
</template>

<script>
import useValidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { reactive, computed } from "vue";
export default {
  setup() {
    const a = reactive({
      form: {
        name: "",
        password: "",
        cpassword: "",
      },
    });
     const rules=computed(() => {
       return {
         form: {
        name: { required },
        password: { required },
        cpassword: "",
      },
       };
     })
    //  const v$=useValidate(rules,a);
      function b(){
        console.log(this.v$);
      this.v$.$validate();
      if (this.v$.$error) {
        alert("FAILED TO SUBMIT FORM");
      } else {
        alert("form submitted succesfully");
      }
    };
    
    return {
      a,v$:useValidate(rules,a),b
    };
  },
  data() {
    return {
      // v$: useValidate(),
      // form: {
      //   name: "",
      //   password: "",
      //   cpassword: "",
      // },
    };
  },
  // validations() {
  //   return {
  //     form: {
  //       name: { required },
  //       password: { required },
  //       cpassword: "",
  //     },
  //   };
  // },
  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
</style>