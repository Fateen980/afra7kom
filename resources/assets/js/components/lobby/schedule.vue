<template>

<div class="wrapper">

    <div class="section">


        <div class="container filterable">


            <div class="columns">


                <div class="forum-sidebar menu column is-3">

                    <div class="box">



                        <a href="" @click.prevent="resetFilters" class="button is-default is-primary w-100 mb-1">
                            Reset Filters
                        </a>

                        <p class="menu-label">
                            Choose a Filter
                        </p>

                        <ul class="menu-list">

                            <li>

                                <a href="/" @click.prevent="" class=" has-icon">
                                <span class="is-circle icon" style="color: rgb(136, 173, 72);"></span>
                                <input type="text" id="start" class="input" placeholder="Date From">
                                </a></li>
                            <li><a href="/" @click.prevent="" class=" has-icon">
                                <span class="is-circle icon" style="color: rgb(249, 169, 122);"></span>
                                <input type="text" id="end" class="input" placeholder="Date To"></a></li>

                            <li><a href="/" @click.prevent="thisDay" class=" has-icon">
                                <span class="is-circle icon" style="color: rgb(136, 173, 72);"></span>
                            Today
                        </a></li> <li><a href="/" @click.prevent="thisYear" class=" has-icon">
                            <span class="is-circle icon" style="color: rgb(187, 130, 78);"></span>
                            This Year
                        </a></li>

                            <li><a href="/lobbyDates" @click.prevent="thisMonth" class=" has-icon">
                                <span class="is-circle icon" style="color: rgb(249, 169, 122);"></span>
                            This Month
                        </a></li>

                            <li><a href="/" @click.prevent="thisWeek" class=" has-icon">
                                <span class="is-circle icon" style="color: rgb(136, 173, 72);"></span>
                            This Week
                        </a></li> <li><a href="/" class=" has-icon">
                            <span class="is-circle icon" style="color: rgb(249, 169, 122);"></span>                            This Day
                        </a></li> <li><a href="/" class=" has-icon">
                            <span class="is-circle icon" style="color: rgb(154, 212, 224);"></span>                           Popular All Time
                        </a></li> <li><a href="/" class=" has-icon">
                            <span class="is-circle icon" style="color: rgb(249, 169, 122);"></span>                            Booked
                        </a></li> <li><a href="/" class=" has-icon">
                            <span class="is-circle icon" style="color: rgb(154, 212, 224);"></span>                           UnBooked
                        </a></li> </ul>


                     </div>





                </div>

                <div class="column is-9 primary">
                    <detail-view :filterBy="filterBy"  :data="lobbiesData"></detail-view>


                    <div class="centered-heading" v-show="loading">
                        <pulse-loader :loading="loading" ></pulse-loader>
                    </div>
                </div>


                    </div>








            </div>

        </div>

    </div>
</div>
</template>


<script>

    import PulseLoader  from 'vue-spinner/src/PulseLoader.vue'
    import RingLoader   from 'vue-spinner/src/RingLoader.vue'
    import detailView from '../useable/detail.vue'


    export default {


        components: {

            'PulseLoader' : PulseLoader,
            'RingLoader'  : RingLoader,
            'detail-view' : detailView
        },

        props: {

           id:''
        },
        data() {

            return {

                loading     : false,
                filterBy    : '',
                lobbiesData : {}

            };
        },

        computed: { },

        methods: {

                        thisDay(){

                            cache: false;
                            this.lobbiesData = {};
                            this.loading  = true;
                            this.filterBy = 'Filter By : Today'

                            axios.get('/thisDay/' + this.id)
                            .then(response => {
                            this.lobbiesData =  response.data;
                                this.loading  = false;

                            });

                        },

                       thisWeek(){

                                cache: false;
                                this.lobbiesData = {};
                                this.loading  = true;
                                this.filterBy = 'Filter By : Week'

                             axios.get('/thisWeek/' + this.id)
                                 .then(response => {
                                     this.lobbiesData =  response.data;
                                     this.loading  = false;

                                 });

                         },

                        thisMonth(){

                            cache: false;
                            this.lobbiesData = {};
                            this.loading  = true;
                            this.filterBy = 'Filter By : Month'

                            axios.get('/thisMonth/'+this.id)
                                .then(response => {
                                    this.lobbiesData =  response.data;
                                    this.loading  = false;

                                });
                        },

                                thisYear(){

                                    cache: false;
                                    this.lobbiesData = {};
                                    this.loading  = true;
                                    this.filterBy = 'Filter By : Year'

                                    axios.get('/thisYear/' + this.id)
                                        .then(response => {
                                            this.lobbiesData =  response.data;
                                            this.loading  = false;

                                        });

                                },

                        resetFilters(){

                            this.lobbiesData = {}
                            this.filterBy = ''

                        }



        },

        beforeMount(){
            this.thisDay()
        },



    }
</script>
