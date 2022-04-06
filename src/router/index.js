import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from '../views/BlogView.vue'
import ArchivosView from '@/views/ArchivosView.vue'
import TiendaView from '@/views/TiendaView.vue'
import LoginView from '@/views/LoginView.vue'
import PruebaView from '@/views/PruebaView.vue'
import VistablogView from '@/views/VistablogView.vue' 

const routes = [
  { path: '/blog', name: 'blog', component: BlogView },
  { path: '/archivos', name: 'archivos', component: ArchivosView },
  { path: '/tienda', name: 'tienda', component: TiendaView },
  { path: '/login', name: 'login', component: LoginView },
  { path: '/prueba', name: 'prueba', component: PruebaView },
  { path: '/:slug', name: 'vista-articulo', component: VistablogView },
  { path: '/', name: 'home', component: HomeView },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
