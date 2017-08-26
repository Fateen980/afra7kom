import Vue from 'vue';
import App from './App.vue'
import ScanView from './ScanView.vue'



import InstantSearch from 'vue-instantsearch';
Vue.use(InstantSearch);

import  { createFromAlgoliaCredentials, createFromSerialized } from 'vue-instantsearch';
const searchStore = createFromAlgoliaCredentials('latency', '3d9875e51fbd20c7754e65422f7ce5e1');
searchStore.indexName = 'bestbuy';


import { Index, SearchBox, Results, Pagination ,RefinementList , Input , Clear } from 'vue-instantsearch';

Vue.component('ais-index', Index);
Vue.component('ais-search-box', SearchBox);
Vue.component('ais-results', Results);
Vue.component('ais-pagination', Pagination);
Vue.component('ais-refinement-list', RefinementList);
Vue.component('scan-view',ScanView);
Vue.component('ais-input',Input);
Vue.component('ais-clear',Clear);



new Vue({

    el:'#root'

});




