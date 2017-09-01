import axios from 'axios';
import Vue from 'vue'
import VeeValidate from 'vee-validate';
import validateForm from './components/validate.vue'
import VueAxios from 'vue-axios'

Vue.use('VueAxios','axios');

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


new Vue({

  el:'#root'
});

$('.showImg').click(function(e){

    var img = $(this).find('img').attr('src');
    e.preventDefault();

    $('#model').addClass('is-active');
    $('#model img').attr('src',img);

});

$('.modal-close').click(function(){ $('#model').removeClass('is-active');});