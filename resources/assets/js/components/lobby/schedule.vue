<template>

    <div class="section">


        <div class="container">


            <div class="columns">

                <div class="forum-sidebar menu column is-3">

                    <div class="box">


                        <a href="" @click.prevent="resetFilters" class="button is-default is-primary w-100 mb-1">
                            Reset Filters
                        </a>

                        <p class="menu-label">
                            Choose a Filter
                        </p>

                        <div class="control">
                            <label for="channel" class="label">Pick a Month : </label>
                            <span class="select">
                                <select id="channel" name="channel" required="required">
                                    <option value="0">Pick a Month...</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select></span> </div>



                        <ul class="menu-list"><li><a href="/" @click.prevent="thisDay" class=" has-icon"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" class="icon is-success"><path d="M7 1C3.14 1 0 4.14 0 8s3.14 7 7 7c.48 0 .94-.05 1.38-.14-.17-.08-.2-.73-.02-1.09.19-.41.81-1.45.2-1.8-.61-.35-.44-.5-.81-.91-.37-.41-.22-.47-.25-.58-.08-.34.36-.89.39-.94.02-.06.02-.27 0-.33 0-.08-.27-.22-.34-.23-.06 0-.11.11-.2.13-.09.02-.5-.25-.59-.33-.09-.08-.14-.23-.27-.34-.13-.13-.14-.03-.33-.11s-.8-.31-1.28-.48c-.48-.19-.52-.47-.52-.66-.02-.2-.3-.47-.42-.67-.14-.2-.16-.47-.2-.41-.04.06.25.78.2.81-.05.02-.16-.2-.3-.38-.14-.19.14-.09-.3-.95s.14-1.3.17-1.75c.03-.45.38.17.19-.13-.19-.3 0-.89-.14-1.11-.13-.22-.88.25-.88.25.02-.22.69-.58 1.16-.92.47-.34.78-.06 1.16.05.39.13.41.09.28-.05-.13-.13.06-.17.36-.13.28.05.38.41.83.36.47-.03.05.09.11.22s-.06.11-.38.3c-.3.2.02.22.55.61s.38-.25.31-.55c-.07-.3.39-.06.39-.06.33.22.27.02.5.08.23.06.91.64.91.64-.83.44-.31.48-.17.59.14.11-.28.3-.28.3-.17-.17-.19.02-.3.08-.11.06-.02.22-.02.22-.56.09-.44.69-.42.83 0 .14-.38.36-.47.58-.09.2.25.64.06.66-.19.03-.34-.66-1.31-.41-.3.08-.94.41-.59 1.08.36.69.92-.19 1.11-.09.19.1-.06.53-.02.55.04.02.53.02.56.61.03.59.77.53.92.55.17 0 .7-.44.77-.45.06-.03.38-.28 1.03.09.66.36.98.31 1.2.47.22.16.08.47.28.58.2.11 1.06-.03 1.28.31.22.34-.88 2.09-1.22 2.28-.34.19-.48.64-.84.92s-.81.64-1.27.91c-.41.23-.47.66-.66.8 3.14-.7 5.48-3.5 5.48-6.84 0-3.86-3.14-7-7-7L7 1zm1.64 6.56c-.09.03-.28.22-.78-.08-.48-.3-.81-.23-.86-.28 0 0-.05-.11.17-.14.44-.05.98.41 1.11.41.13 0 .19-.13.41-.05.22.08.05.13-.05.14zM6.34 1.7c-.05-.03.03-.08.09-.14.03-.03.02-.11.05-.14.11-.11.61-.25.52.03-.11.27-.58.3-.66.25zm1.23.89c-.19-.02-.58-.05-.52-.14.3-.28-.09-.38-.34-.38-.25-.02-.34-.16-.22-.19.12-.03.61.02.7.08.08.06.52.25.55.38.02.13 0 .25-.17.25zm1.47-.05c-.14.09-.83-.41-.95-.52-.56-.48-.89-.31-1-.41-.11-.1-.08-.19.11-.34.19-.15.69.06 1 .09.3.03.66.27.66.55.02.25.33.5.19.63h-.01z"></path></svg>
                            Today
                        </a></li> <li><a href="/" @click.prevent="thisYear" class=" has-icon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" class="icon is-success"><path d="M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"></path></svg>
                            This Year
                        </a></li>

                            <li><a href="/lobbyDates" @click.prevent="thisMonth" class=" has-icon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" class="icon is-success"><path d="M10 7c-.73 0-1.38.41-1.73 1.02V8C7.22 7.98 6 7.64 5.14 6.98c-.75-.58-1.5-1.61-1.89-2.44A1.993 1.993 0 0 0 2 .99C.89.99 0 1.89 0 3a2 2 0 0 0 1 1.72v6.56c-.59.35-1 .99-1 1.72 0 1.11.89 2 2 2a1.993 1.993 0 0 0 1-3.72V7.67c.67.7 1.44 1.27 2.3 1.69.86.42 2.03.63 2.97.64v-.02c.36.61 1 1.02 1.73 1.02 1.11 0 2-.89 2-2 0-1.11-.89-2-2-2zm-6.8 6c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm8 6c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
                            This Month
                        </a></li>

                            <li><a href="/" @click.prevent="thisWeek" class=" has-icon"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" class="icon is-success"><path d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path></svg>
                            This Week
                        </a></li> <li><a href="/" class=" has-icon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" class="icon is-success"><path d="M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"></path></svg>
                            This Day
                        </a></li> <li><a href="/" class=" has-icon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" class="icon is-success"><path d="M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"></path></svg>
                            Popular All Time
                        </a></li> <li><a href="/" class=" has-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" class="icon is-success"><path d="M14 14c-.05.69-1.27 1-2 1H5.67L4 14V8c1.36 0 2.11-.75 3.13-1.88 1.23-1.36 1.14-2.56.88-4.13-.08-.5.5-1 1-1 .83 0 2 2.73 2 4l-.02 1.03c0 .69.33.97 1.02.97h2c.63 0 .98.36 1 1l-1 6L14 14zm0-8h-2.02l.02-.98C12 3.72 10.83 0 9 0c-.58 0-1.17.3-1.56.77-.36.41-.5.91-.42 1.41.25 1.48.28 2.28-.63 3.28-1 1.09-1.48 1.55-2.39 1.55H2C.94 7 0 7.94 0 9v4c0 1.06.94 2 2 2h1.72l1.44.86c.16.09.33.14.52.14h6.33c1.13 0 2.84-.5 3-1.88l.98-5.95c.02-.08.02-.14.02-.2-.03-1.17-.84-1.97-2-1.97H14z"></path></svg>
                            Booked
                        </a></li> <li><a href="/" class=" has-icon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" class="icon is-success"><path d="M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"></path></svg>
                            UnBooked
                        </a></li> </ul>


                     </div>

                </div>


                <div class="column is-9 primary">

                    <div class="box">

                        <table class="table is-striped">
                            <thead>
                            <tr >
                                <th ><div class="episode-list-meta is-bold" ><span class="running-time">Date</span></div></th>
                                <th><div class="episode-list-meta is-bold" ><span class="running-time">Time From</span></div></th>
                                <th><div class="episode-list-meta is-bold" ><span class="running-time">Time To</span></div></th>
                                <th></th>

                            </tr>
                            </thead>
                            <tbody>


                            <tr v-for="(date ,index) in dates.dates" >

                                <td>
                                    <h4 class="title is-5"><span style="color: rgb(247, 201, 83);">{{date}}</span></h4></td>
                                <td>

                                    <span v-if=" ! dates.booked[index]">


                                    </span>
                                </td>
                                <td></td>
                                <td>

                                <span v-if=" ! dates.booked[index]">

                                    <form method="post" action="">
                                        <div class="control">
                                            <button type="submit" class="button is-success is-outlined ">
                                            Book Now !
                                            </button></div>

                                    </form>
                                </span>

                                    <span v-else>

                                        <a class="button is-warning" title="Disabled button" disabled>Booked</a>
                                    </span>


                                </td>

                            </tr>



                            </tbody>
                        </table>



                    </div>

                </div>






            </div>

        </div>

    </div>

</template>


<script>

    export default {

        props: {

           id:''
        },
        data() {

            return {


                dates:{}

            };
        },

        computed: { },

        methods: {

                        thisDay(){

                            axios.get('/thisDay/' + this.id)
                            .then(response => {
                            this.dates =  response.data;
                            });

                        },

                       thisWeek(){

                             axios.get('/thisWeek/' + this.id)
                                 .then(response => {
                                     this.dates =  response.data;
                                 });

                         },

                        thisMonth(){

                            axios.get('/thisMonth/'+this.id)
                                .then(response => {
                                    this.dates =  response.data;
                                });
                        },

                                thisYear(){

                                    axios.get('/thisYear/' + this.id)
                                        .then(response => {
                                            this.dates =  response.data;
                                        });

                                },

                        resetFilters(){

                            this.dates = {}

                        }



        }


    }
</script>
