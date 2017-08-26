



var hitTemplate =
    '<div class="conversation-list-item ">' +
    '<div class="conversation-list-avatar is-hidden-mobile">'+
    '<div>' +
    '<a href="/hotels/detail/{{id}}">' +
    '<img src="img/hotels/{{path}}" alt=""  class="is-outlined bg-white"></a>'+
    '</div>'+
    '</div>'+
    '<div class="conversation-list-title">' +
    '<h4 class="title is-1">' +
    '<a href="/hotels/detail/{{id}}" class="ais-highlight">{{{_highlightResult.nameEng.value}}}</a>' +
    '</h4>' +
    '<div class="meta in-caps mb-1">' +
    '<span>' +
    '<a href="/hotels/detail/{{id}}" class="is-link" style="color: rgb(245, 104, 87)" class="ais-highlight">{{{_highlightResult.nameEng.value}}}</a>' +
    '<a href="/hotels/detail/{{id}}" class="ais-highlight">&nbsp{{{_highlightResult.nameEng.value}}}</a>' +
    '</span>' +
    '&nbspby <a href="/hotels/detail/{{id}}">&nbspFateen</a>'+
    '</div>'+
    '<div class="content">' +
    '{{{_highlightResult.desc.value}}}' +
    '<span class="is-muted">...</span>'+
    '</div>'+
    '</div>'+

    '<div class="conversation-list-reply-count is-hidden-mobile">' +
    '<h3 class="has-text-centered is-bold title is-4 mbt-1">'+
    '$540.00 </h3>'+
    '<span class="ais-star-rating--star"></span>'+
    '<span class="ais-star-rating--star"></span>'+
    '<span class="ais-star-rating--star"></span>'+
    '<span class="ais-star-rating--star"></span>'+
    '<span class="ais-star-rating--star"></span>' +
    '</div>'+
    '</div>';


var filterHeaderCountry =
    '<h4 class="filterable-heading has-icon mt-0">'+
    '<span class="icon"><img src="/img/lesson-type.svg" alt="Skill Type Icon"></span>'+
    'Country';





var filterHeaderCity =
    '<h4 class="filterable-heading has-icon mt-0">'+
    '<span class="icon"><img src="/img/lesson-type.svg" alt="Skill Type Icon"></span>'+
    'City';


var rangSliderHeader =
    '<h4 class="filterable-heading has-icon mt-0">'+
    '<span class="icon"><img src="/img/lesson-type.svg" alt="Skill Type Icon"></span>'+
    'Price';

var facetTemplateCheckbox = '<div class="ais-refinement-list__item">'+
    '<label><input type="checkbox" value="{{name}}"  {{#isRefined}}checked{{/isRefined}}>'+
    '<span class="ais-refinement-list__value">{{name}}</span>'+
    '<span class="ais-refinement-list__count">{{count}}</span></label></div>';


var lobbyTemplateCheckbox = '<div class="ais-refinement-list__item">'+
    '<label class="filterable-label" >' +
    '<input type="checkbox" value="{{name}}"  {{#isRefined}}checked{{/isRefined}}>'+
    '<a href="#" >{{name}}</a>'+
    '<span class="ais-refinement-list__count">{{count}}</span></label>' +
    '</div>';


var ratingHeader =
    '<h4 class="filterable-heading has-icon mt-0">'+
    '<span class="icon"><img src="/img/lesson-type.svg" alt="Skill Type Icon"></span>'+
    'Rating';

var lobbyHeader =
    '<h4 class="filterable-heading has-icon mt-0">'+
    '<span class="icon"><img src="/img/lesson-type.svg" alt="Skill Type Icon"></span>'+
    'Option';

var client = algoliasearch("JRQNI5N6DC", "5b7701e3b9982706450dc0dd59d07261");
var index  = client.initIndex("hotels");



var hotel =  instantsearch({
    // Replace with your own values
    appId: 'JRQNI5N6DC',
    apiKey: '5b7701e3b9982706450dc0dd59d07261', // search only API key, no ADMIN key
    indexName: 'hotels',
    urlSync: true
});



var searchBox = instantsearch.widgets.searchBox({

    container  : '#search-input',
    placeholder:'search In Hotels',
    cssClasses : {

        input :'ais-input'
    }
});

hotel.addWidget(searchBox);


var stats = instantsearch.widgets.stats({container: '#stats-container'});

hotel.addWidget(stats);


var rangeSlider = instantsearch.widgets.rangeSlider({

    container    : '#price',
    attributeName: 'city',
    pips         : false,
    templates: {
        header: rangSliderHeader
    },
    tooltips: {
        format: function (rawValue) {
            return '$' + parseInt(rawValue)
        }
    }
});

hotel.addWidget(rangeSlider);



//  var sortBy =    instantsearch.widgets.sortBySelector({
//
//         container: '#sortByContainer',
//         indices: [
//             {name: 'hotels',            label: 'Sort By Hotel'},
//             {name: 'hotel_details',     label: 'Sort By Lobby'}
//         ]
//     });
//
//
// hotel.addWidget(sortBy);


var Widget = instantsearch.widgets.hits({

    container   : '#hits',
    hitsPerPage : 15,
    templates   : {
        item: hitTemplate,
        empty: "No results matched your query <em>\"{{query}}\"</em>"
    }
});

hotel.addWidget(Widget);

var ratingWidget = instantsearch.widgets.starRating({
    container: '#ratingItem',
    attributeName: 'rateSatr',
    templates: {
        header: ratingHeader
    },
    labels: {
        andUp: ''
    }
});

hotel.addWidget(ratingWidget);

var Widget2 = instantsearch.widgets.refinementList({
    container    : '#filterItemCountry',
    attributeName: 'country',
    operator     : 'or',
    limit        : 3,
    showMore:true,
    searchForFacetValues:true,
    templates: {

        item  : facetTemplateCheckbox,
        header: filterHeaderCountry
    }
});

hotel.addWidget(Widget2);

var Widget3 = instantsearch.widgets.refinementList({

    container: '#filterItemCity',
    attributeName: 'city',
    operator: 'or',
    limit: 3,
    showMore:true,
    searchForFacetValues:{

        placeholder:'Search For City',
        isAlwaysActive:true

    },
    sortBy:["name:asc"],
    templates: {
        item: facetTemplateCheckbox,
        header: filterHeaderCity
    }
});

hotel.addWidget(Widget3);

// var Widget4 =
//     instantsearch.widgets.googleMaps({
//         container: document.querySelector('#map')
//     });
//
// hotel.addWidget(Widget4);

var Widget5 =
    instantsearch.widgets.pagination({

        container: '#pagination',

        cssClasses: {

            root   : 'pagination',
            active : 'active'
        }
    });

hotel.addWidget(Widget5);



var listlobby =
    instantsearch.widgets.refinementList({
        container: '#is-lobby',
        attributeName: 'lobby',
        operator: 'or',
        limit: 1,
        searchForFacetValues: 0,
        transformData : function( rawData ){

            console.log(rawData)
            return {
                name : rawData.name == 0 ? 'Lobby' : 'Lobby',
                isRefined : rawData.isRefined == false ? 0 : 1 ,
                count : rawData.count,
                highlighted:1
            };
        },
        templates: {
            item: lobbyTemplateCheckbox,
            header: lobbyHeader
        }
    });


hotel.addWidget(listlobby);




var listwifi =
    instantsearch.widgets.refinementList({
        container: '#is-wifi',
        attributeName: 'wifi',
        operator: 'or',
        limit: 1,
        searchForFacetValues: 0,
        transformData : function( rawData ){

            return {
                name : rawData.name == 0 ? 'WiFi' : 'WiFi',
                isRefined : rawData.isRefined == false ? 0 : 1 ,
                count : rawData.count,
                highlighted:1
            };
        },
        templates: {
            item: lobbyTemplateCheckbox,
            header: ''
        }
    });


hotel.addWidget(listwifi);



var listpool =
    instantsearch.widgets.refinementList({
        container: '#is-pool',
        attributeName: 'pool',
        operator: 'or',
        limit: 1,
        searchForFacetValues: 0,
        transformData : function( rawData ){

            return {
                name : rawData.name == 0 ? 'Pool' : 'Pool',
                isRefined : rawData.isRefined == false ? 0 : 1 ,
                count : rawData.count,
                highlighted:1
            };
        },
        templates: {
            item: lobbyTemplateCheckbox,
            header: ''
        }
    });


hotel.addWidget(listpool);




var listpark =
    instantsearch.widgets.refinementList({
        container: '#is-park',
        attributeName: 'parking',
        operator: 'or',
        limit: 1,
        searchForFacetValues: 0,
        transformData : function( rawData ){

            return {
                name : rawData.name == 0 ? 'Parking' : 'Parking',
                isRefined : rawData.isRefined == false ? 0 : 1 ,
                count : rawData.count,
                highlighted:1
            };
        },
        templates: {
            item: lobbyTemplateCheckbox,
            header: ''
        }
    });


hotel.addWidget(listpark);




var listgym =
    instantsearch.widgets.refinementList({
        container: '#is-gym',
        attributeName: 'gym',
        operator: 'or',
        limit: 1,
        searchForFacetValues: 0,
        transformData : function( rawData ){

            return {
                name : rawData.name == 0 ? 'Gym' : 'Gym',
                isRefined : rawData.isRefined == false ? 0 : 1 ,
                count : rawData.count,
                highlighted:1
            };
        },
        templates: {
            item: lobbyTemplateCheckbox,
            header: ''
        }
    });


hotel.addWidget(listgym);



var listac =
    instantsearch.widgets.refinementList({
        container: '#is-ac',
        attributeName: 'ac',
        operator: 'or',
        limit: 1,
        searchForFacetValues: 0,
        transformData : function( rawData ){

            return {
                name : rawData.name == 0 ? 'A/C' : 'A/C',
                isRefined : rawData.isRefined == false ? 0 : 1 ,
                count : rawData.count,
                highlighted:1
            };
        },
        templates: {
            item: lobbyTemplateCheckbox,
            header: ''
        }
    });


hotel.addWidget(listac);


// This Section for Hotel Details

var hotelDetail =  instantsearch({
    // Replace with your own values
    appId: 'JRQNI5N6DC',
    apiKey: '5b7701e3b9982706450dc0dd59d07261', // search only API key, no ADMIN key
    indexName: 'hotel_details',
    urlSync: true

});





// var toggleList = instantsearch.widgets.toggle({
//         container: '#lobby',
//         attributeName: 'lobby',
//         label: 'Free Shipping',
//         values: {
//             on: true,
//             off: false
//         },
//         templates: {
//             header: 'Shipping'
//         }
//     });

// hotelDetail.addWidget(toggleList);

hotelDetail.start();
hotel.start();



