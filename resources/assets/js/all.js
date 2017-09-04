import axios from 'axios';
import Vue from 'vue'
import VeeValidate from 'vee-validate';
import validateForm from './components/validate.vue'
import VueAxios from 'vue-axios'
import Rating from 'vue-bulma-rating'
import InstantSearch from 'vue-instantsearch';
import searchView from './components/search/searchView.vue'

import schedule from './components/lobby/schedule.vue'



Vue.use('VueAxios','axios');

Vue.use(InstantSearch);
Vue.use('axios');
Vue.component('scan-view',searchView);



const config = {
    errorBagName: 'errors', // change if property conflicts.
    fieldsBagName: 'fields',
    delay: 10,
    locale: 'en',
    dictionary: null,
    strict: true,
    classes: false,
    classNames: {
        touched: 'touched', // the control has been blurred
        untouched: 'untouched', // the control hasn't been blurred
        valid: 'valid', // model is valid
        invalid: 'invalid', // model is invalid
        pristine: 'pristine', // control has not been interacted with
        dirty: 'dirty' // control has been interacted with
    },
    events: 'input|blur',
    inject: true,
    validity: true,
    aria: true
};

Vue.use(VeeValidate, config);
Vue.component('validate', validateForm);
Vue.component('Rating', Rating);
Vue.component('schedule', schedule);


new Vue({

  el:'#root',

    data:{

        dates:{ 'date':1,
                'love':2}
       }


});

$('.showImg').click(function(e){

    var img = $(this).find('img').attr('src');
    e.preventDefault();

    $('#model').addClass('is-active');
    $('#model img').attr('src',img);

});

$('.modal-close').click(function(){ $('#model').removeClass('is-active');});