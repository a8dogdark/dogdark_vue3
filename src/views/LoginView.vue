<template>
    <div class="mt-o">
        <Menu/>
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6 col-lg-4 m-auto">
                    <div class="formulario sombra">
                        <div class="text-center text-white"><img src="../assets/img/favicon.png" alt=""><h2>LOGIN</h2></div>
                        <div>
                            <div v-if="v$.email.$error" class="alert alert-danger text-center mt-2">{{ v$.email.$errors[0].$message }}</div>
                            <p><input 
                                type="text" 
                                placeholder="Email" 
                                class="form-control" 
                                v-model="email"
                                /></p>
                            <div v-if="v$.password.$error" class="alert alert-danger text-center mt-2">{{ v$.password.$errors[0].$message }}</div>
                            <p><input 
                                type="password" 
                                placeholder="Password" 
                                class="form-control"
                                v-model="password"
                                /></p>
                            <p class="text-center">
                                <button @click="submitForm" class="btn btn-primary sombra">INGRESAR</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Menu from '../components/MenuComponents.vue'
import useValidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'

export default {
    name:'LoginView',
    components:{
        Menu
    },
    data(){
        return{
            v$: useValidate(),
            email:'',
            password:''
        }
    },
    validations(){
        return{
            email:{ required, email, minLength: minLength(6) },
            password:{ required, minLength:minLength(6) }
        }
    },
    methods:{
        submitForm(){
            this.v$.$validate()
            if(!this.v$.$error){
                console.log("todo ok")
            }else{
                console.log("error en el formulario")
            }
            
        }
    }
}
</script>