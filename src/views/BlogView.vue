<template>
    <div class="mt-o">
        <!-- menu principal -->
        <Menu/>
        <!-- contenido -->
        <div class="container">
            <div class="row">
                <div class="col-12"><h2>BLOG</h2><hr/></div>
                <div class="col-12 col-md-8">
                    <div class="contenido">

                        <div v-for="dblog in blog" :key="dblog.id_blog">
                        <div><h2 class="text-uppercase">{{ dblog.titulo_blog }}</h2></div>
                        <div class="text-justify">{{ dblog.texto_corto_blog }}</div>
                        <div>Fecha : <strong>{{ dblog.fecha_blog }}</strong> </div>
                        <div>Categoría: {{ dblog.categoria_blog }}</div>
                        <div class="mt-4"><router-link class="btn btn-success" :to="{ name: 'vista-articulo', params: { slug: dblog.titulo_slug_blog } }">Leer más</router-link></div>
                        <hr/>
                        </div>

                    </div>
                </div>
                <div class="col-12 col-md-4">aside</div>
            </div>
        </div>
        <!-- Footer -->
        <Footer/>
    </div>
</template>
<script>
import Menu from '../components/MenuComponents.vue'
import Footer from '../components/FooterComponents.vue'
import { Global } from '../Global'
import axios from 'axios'

export default {
    name:'BlogView',
    data(){
        return{
            blog:[]
        }
    },
    mounted(){
        this.getBlog();
    },
    methods:{
        getBlog(){
            axios.post(Global.url + 'consultas/', {
                opcion:1
            })
            .then(
                res => {
                    if(res.status==200)
                    {
                        this.blog=res.data;
                        //console.log('blog', this.blog);
                    }else{
                        alert("error de conexión con la base");
                    }
                }
                
            )
        }
    },
    components:{
        Menu,
        Footer
    }
}
</script>