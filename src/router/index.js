import {createRouter, createWebHistory} from 'vue-router';

import Home from '../pages/Home.vue';
import Products from '../pages/Products.vue';
import Cart from '../pages/Cart.vue';
import Checkout from '../pages/Checkout.vue';
import Succes from '../pages/Succes.vue';
import ProductDetail from '../pages/ProductDetail.vue';
 
const routes = [ 
    {path: '/', name: 'Home', component: Home},
    {path: '/products', name: 'Products', component: Products},
    {path: '/cart', name: 'Cart', component: Cart},
    {path: '/checkout',  name: 'Checkout', component: Checkout},
    {path: '/success', name: 'Succes', component: Succes},
    {path: '/products/:id', name: 'ProductDetail', component: ProductDetail, props: true},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;