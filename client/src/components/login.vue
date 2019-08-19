<template>
  <div id="app">
  <section class="hero is-primary is-fullheight">
    
     
  <div class="hero-body">
    
    <div class="container">
      <div class="field has-text-centered">
        <div class="label">
          <div class="is-size-3 is-capitalized">LOGIN FORM</div>
        </div>
      </div>
      
      <div class="columns is-centered">
        
        <div class="column is-5-tablet is-4-desktop is-3-widescreen">
          
          <div class="box">
            <div class="field">
              <label for="email" class="label is-capitalized has-text-center" >Email</label>
              <div class="control has-icons-left">
                <input type="email" placeholder="e.g. bobsmith@gmail.com" class="input" v-model="email" required>
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <label for="" class="label">Password</label>
              <div class="control has-icons-left">
                <input type="password" placeholder="*******" class="input" v-model="password" required>
                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
              </div>
            </div>
            <div class="level options">

          <a class="btn btn-link level-right" href="#" style="color:blue">Forgot Password?</a>
        </div>
            <div class="field">
              <button class="button is-success" @click="onLogin">
                Login
              </button>
            </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</section>


    
    
  </div>
</template>

<script>

import PostsService from '@/services/PostsService'




export default {
  name: 'app',
  data(){
    return{
      email:'',
      password:''

    };

  },
  components: {
    
  },
  mounted() {
    
  },
  methods:{
    async onLogin(){

      console.log("helloo siddhu");

      let res=await PostsService.postUser({
        email:this.email,
        password:this.password

      });
      if(res.data=='admin'){
        this.$router.push({ name: "Employees" });
      }
      else if(res.data=='not_a_admin'){
        this.$router.push({ name: "EmployeeADD" });
      }else{
        this.$router.push({ name: "login" });
      }
    }
    

      


  },
}
</script>

<style scoped>
.hero.is-primary {
    background-color: #edf3f2;
    color: #fff;
}
</style>


