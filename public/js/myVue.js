/**
 * Created by lenovo on 8/17/2017.
 */



new Vue({

    el:'#root',

    data:{

        through     :'/hotels',
        placeholder : 'HOTELS , Wedding Lobby , TRAVEL',
        inputVal    : ''

    },

    mounted: function() {
        this.client = algoliasearch('JRQNI5N6DC', '5b7701e3b9982706450dc0dd59d07261');
    },
    methods:{
        everything:function(){

            var t = this.client.initIndex("hotels"),
                e = this.client.initIndex("contacts");


            autocomplete("#search", {
                hint: !0,
                debug: true,
                minLength:2,
                autoFocus: true,
                delay: 0

            }, [{
                source: autocomplete.sources.hits(t, {
                    hitsPerPage: 5

                }),
                displayKey: "title",
                templates: {
                    header: '<div class="category">Hotels Suggestions</div>',
                    suggestion: function(t) {

                        return t._highlightResult.name_e.value
                    }
                }
            }, {
                source: autocomplete.sources.hits(e, {
                    hitsPerPage:5

                }),
                displayKey: "title",
                templates: {
                    header: '<div class="category mt-1">Hotels Suggestions</div>',
                    suggestion: function(e) {
                        return e._highlightResult.name.value
                    }
                }
            }]).on("autocomplete:selected", function(t, e) {


                        e.path && (location = e.path)

            });

        }

    }



});



$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});
