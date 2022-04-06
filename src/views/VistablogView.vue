<template>
    <div class="mt-o">
        <Menu/>
        <div class="container">
            <div class="row">
                <div class="col-12"><h2 class="text-uppercase">titulo</h2><hr/></div>
                <div class="col-12 col-md-8">desde la vista de articulos</div>
                <div class="col-12 col-md-4">aside</div>
            </div>
        </div>
    </div>
</template>
<script>
import Menu from '../components/MenuComponents.vue'

export default {
    name:'VistablogView',
    components:{
        Menu
    }
}
</script>