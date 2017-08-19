/**
 * Created by lenovo on 8/19/2017.
 */
import InstantSearch from 'vue-instantsearch';

Vue.use(InstantSearch);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example', require('./components/Example.vue'));
Vue.component('alert', require('./components/Alert.vue'));

new Vue({

    el:'#app',

    components: {
        'alert': alert
    }

});