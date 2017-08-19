var alert     = require('vue-strap/src/alert');
var Typeahead = require('vue-strap/src/Typeahead');
var Checkbox = require('vue-strap/src/Checkbox');
// or
//var alert = require('vue-strap').alert;

new Vue({

    el:'#app',
    components: {
        alert: alert,
        Typeahead : Typeahead,
        Checkbox : Checkbox
    }
});

