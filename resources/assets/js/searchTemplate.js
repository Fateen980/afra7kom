/**
 * Created by lenovo on 9/2/2017.
 */
import Vue from 'vue';
import axios from 'axios';
import searchView from './components/search/searchView.vue'
import InstantSearch from 'vue-instantsearch';

Vue.use(InstantSearch);
Vue.use('axios');
Vue.component('scan-view',searchView);


new Vue({
        el: '#root'
});

























