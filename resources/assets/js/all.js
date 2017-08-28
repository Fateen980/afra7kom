import Vue from 'vue'
import VeeValidate from 'vee-validate';
import validateForm from './components/validate.vue'




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

Vue.component('validate', validateForm , {

        props:['name','title'],
        data:function(){

            return {
                isDisabled:false
            }
        },
        methods:{

            validateFormHere:function(){

                this.$emit('applied')
            }
        },
        mounted:function(){


            console.log(this.$children)

        }

});


new Vue({

  el:'#root',


    methods:{

        validateFormHere:function(){

            alert('fateen')
        }

    }
});

