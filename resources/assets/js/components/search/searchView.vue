<template>

    <ais-index index-name="lobbies" app-id="JRQNI5N6DC" api-key="5b7701e3b9982706450dc0dd59d07261">
    <div class="columns">
        <div class="sidebar column is-3 pl-2">

            <ul>

                <li>

                    <ais-stats>
                        <template scope="{ totalResults, processingTime, query }">

                            <article class="message is-dark">
                                <div class="message-body">
                                    <strong>{{ totalResults }}</strong> Lobbies Found in <em>{{ query }}</em>
                                    - <small>{{ processingTime }}ms</small>
                                </div>
                            </article>

                        </template>
                    </ais-stats>

                </li>
                <li>&nbsp</li>

                <li class="filterable-item">

                    <h4 class="filterable-heading has-icon mt-0">
                        <span class="icon"><img src="/img/lesson-type.svg" alt="Skill Type Icon"></span>

                        Search
                    </h4>


                    <ais-search-box placeholder="Search..." :autofocus="true" >
                    <div class="ais-search-box">
                        <ais-input placeholder="Search..." :autofocus="true" ></ais-input>
                    </div>
                        <ais-clear :search-store="searchStore">

                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20" style="fill: white;">
                                <path d="M8.114 10L.944 2.83 0 1.885 1.886 0l.943.943L10 8.113l7.17-7.17.944-.943L20 1.886l-.943.943-7.17 7.17 7.17 7.17.943.944L18.114 20l-.943-.943-7.17-7.17-7.17 7.17-.944.943L0 18.114l.943-.943L8.113 10z" fillRule="evenodd"></path></svg>
                        </ais-clear>


                    </ais-search-box>


                </li>

                <li>&nbsp</li>



                <li class="filterable-item">

                    <h4 class="filterable-heading has-icon mt-0">
                        <span class="icon"><img src="/img/lesson-type.svg" alt="Skill Type Icon"></span>

                        Price Range
                    </h4>

                    <ais-price-range attribute-name="price" currency="" from-placeholder="From" to-placeholder="To">

                        <template>&nbsp;</template>

                    </ais-price-range>



                </li>

                <li>&nbsp</li>

                <li class="filterable-item">

                    <h4 class="filterable-heading has-icon mt-0">
                        <span class="icon"><img src="/img/lesson-type.svg" alt="Skill Type Icon"></span>

                        Rating
                    </h4>

                    <ais-rating attribute-name="rating" :min="1" :max="6">

                        <template scope="props">


                            <template >

                                <label class="ais-refinement-list__label" v-for="n in 5">
                                    <span v-if="n <= props.value" class="ais-star-rating--star"></span>
                                    <span v-else class="ais-star-rating--star__empty"></span>
                                </label>
                                
                            </template>
                            &nbsp;&amp; <span class="ais-refinement-list__count" v-text="props.count"></span>

                        </template>

                    </ais-rating>
                </li>

                <li>&nbsp</li>




                <li class="filterable-item">
                    <ais-refinement-list attribute-name="guests">
                        <template slot="header">
                            <h4 class="filterable-heading has-icon mt-0">
                                <span class="icon"><img src="/img/lesson-type.svg" alt="Skill Type Icon"></span>
                                Guests
                            </h4>
                        </template>

                    </ais-refinement-list>
                </li>

                <li class="filterable-item">
                    <ais-refinement-list attribute-name="snacks" >
                        <template slot="header">
                            <h4 class="filterable-heading has-icon mt-0">
                                <span class="icon"><img src="/img/lesson-type.svg" alt="Skill Type Icon"></span>
                                snacks
                            </h4>

                        </template >

                        <template scope="props">
                            <span class="ais-refinement-list__value" v-text="changeName(props.value)"></span>
                            <span class="ais-refinement-list__count" v-text="props.count"></span>
                        </template>

                    </ais-refinement-list>
                </li>


                <li class="filterable-item">
                    <ais-refinement-list attribute-name="dinner" >
                        <template slot="header">
                            <h4 class="filterable-heading has-icon mt-0">
                                <span class="icon"><img src="/img/lesson-type.svg" alt="Skill Type Icon"></span>
                                Dinner
                            </h4>

                        </template >

                        <template scope="props">
                            <span class="ais-refinement-list__value" v-text="changeDName(props.value)"></span>
                            <span class="ais-refinement-list__count" v-text="props.count"></span>
                        </template>

                    </ais-refinement-list>
                </li>


                <li class="filterable-item">
                    <ais-refinement-list attribute-name="country" >
                        <template slot="header">
                            <h4 class="filterable-heading has-icon mt-0">
                                <span class="icon"><img src="/img/lesson-type.svg" alt="Skill Type Icon"></span>
                                Country
                            </h4>

                        </template >

                        <template scope="props">
                            <span class="ais-refinement-list__value" v-text="props.value"></span>
                            <span class="ais-refinement-list__count" v-text="props.count"></span>
                        </template>

                    </ais-refinement-list>
                </li>


                <li class="filterable-item">
                    <ais-refinement-list attribute-name="city" >
                        <template slot="header">
                            <h4 class="filterable-heading has-icon mt-0">
                                <span class="icon"><img src="/img/lesson-type.svg" alt="Skill Type Icon"></span>
                                City
                            </h4>

                        </template >

                        <template scope="props">
                            <span class="ais-refinement-list__value" v-text="props.value"></span>
                            <span class="ais-refinement-list__count" v-text="props.count"></span>
                        </template>

                    </ais-refinement-list>
                </li>



            </ul>

        </div>




    <div class="column is-9 primary">

        <ais-no-results>
            <template scope="props">
                No Search found for <i>{{ props.query }}</i>.
            </template>
        </ais-no-results>




        <ais-results>
            <template scope="{ result }">


                <div class="conversation-list-item ">
                    <div class="conversation-list-avatar is-hidden-mobile">
                        <div>
                            <a :href="result.path+result.id">
                                <img :src="result.img" alt=""  class="is-outlined bg-white">
                            </a>
                        </div>
                    </div>

                    <div class="conversation-list-title">
                        <h4 class="title is-1">
                            <a :href="result.path+result.id" class="ais-highlight">

                                <ais-highlight :result="result" attribute-name="name"></ais-highlight>

                            </a>
                        </h4>

                        <div class="meta in-caps mb-1">
                            <span>
                            <a :href="result.path+result.id"  style="color: rgb(245, 104, 87)" class="ais-highlight is-link">{{result.id}}</a>
                            <a :href="result.path+result.id" class="ais-highlight">&nbsp{{ result.name }}</a>
                            </span>
                            &nbspby <a :href="result.id">&nbspFateen</a>
                        </div>

                        <div class="content">
                            <ais-highlight :result="result" attribute-name="description"></ais-highlight>

                            <span class="is-muted">...</span>
                        </div>
                    </div>

                    <div class="conversation-list-reply-count is-hidden-mobile">

                        <h3 class="has-text-centered is-bold title is-4 mbt-1">
                            {{result.price}}
                        </h3>

                        <div v-for="n in 5">
                        <span v-if="n <= result.rating" class="ais-star-rating--star"></span>
                        <span v-else class="ais-star-rating--star__empty"></span>
                        </div>

                    </div>


                    </div>


            </template>
        </ais-results>
        </div>





    </div>
        <ais-pagination :padding="5">

            <template slot="first"></template>
            <template slot="previous"></template>
            <template slot="next"></template>
            <template slot="last"></template>

            <template scope="props">
                <nav class="pagination" role="navigation" aria-label="pagination">
                    <ul class="pagination-list">
                <li>
                    <a class="pagination-link"  :class="{'is-current':props.active}"  v-text="props.value"></a>
                </li>
                    </ul>
                </nav>
            </template>



        </ais-pagination>




    </ais-index>

</template>

<script>

    export default {

        props: {
                    placeholder: {
                        type: String,
                        default: '',
                    }
                },
        data() {
            return {
                blockClassName: 'ais-search-box',
                lobbies:this.loobyName()
            };
        },

        computed: {

            get() {

                return this.searchStore.query;
            },
            set(value) {

                this.searchStore.query = value;
                this.$emit('query', value);
            }

        },
        methods: {
            changeName(val) {

                return (val == 0) ? 'Snakes' : 'No Snakes';

            },
            changeDName(val){

                return (val == 0) ? 'Dinner' : 'No Dinner';
            },
            lobbyTitle(id,title){

                return ( this.lobbies[id].name != 'undefined') ? this.lobbies[id].name : '';
            },
            lobbyDesc(id){

                return ( this.lobbies[id].description != 'undefined') ? this.lobbies[id].description : '';
            },
            loobyName(){
                axios.get('/lobbyName')
                    .then(response => {
                        this.lobbies =  response.data;
                    });

            }



        }


    }
</script>