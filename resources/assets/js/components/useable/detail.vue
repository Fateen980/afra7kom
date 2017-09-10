<template>

                <div class="latest">
                    <h2 class="title is-4">
                    {{ filterBy }}
                </h2>


                <div v-for="( lobbies , date ) in data">

                <ul class="lesson-list " v-for=" ( lobby , index ) in lobbies">

                    <li :class="{'lesson-list-item is-flex is-aligned-center is-complete box' : lobby.booked, 'is-flex is-aligned-center box':! lobby.booked }">

                        <span class="lesson-list-status ">

                        <button class="lesson-complete-button" v-show="!lobby.booked">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 16" class="icon is-32x32">
                                <path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z" fill="#cacaca"></path></svg>
                            <!----></button>


                           <button class="lesson-complete-button"  v-show="lobby.booked">
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 16" class="icon is-32x32">
                               <path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z" fill="white"></path></svg>
                            <!----></button>

                    </span>

                        <div class="lesson-list-details flex pr-3-tablet pr-2-mobile">
                            <h5 class="lesson-list-title title mr-2-tablet mbb-1">

                            </h5>

                                <div class="columns " style="color: rgb(136, 173, 72);">
                                    <div class="column is-bold">
                                        {{ lobby.guests }} Guests
                                    </div>
                                    <div class="column is-bold" v-if="lobby.guests">
                                        Snacks
                                    </div>
                                    <div class="column is-bold" v-else>
                                        No Snacks
                                    </div>
                                    <div class="column is-bold" v-if="lobby.dinner">
                                        Dinner
                                    </div>
                                    <div class="column is-bold" v-else>
                                        No Dinner
                                    </div>

                                    <div class="column">

                                        <form  :action="action"  method="POST">

                                            <input type="hidden" name="_token" :value="csrf">
                                            <input type="hidden" name="id" :value="lobby.lobby_id">
                                            <input type="hidden" name="price" :value="lobby.price">

                                            <div class="control">
                                                <button type="submit" data-single-click="" class="button is-primary is-outlined ">
                                                    Reserve
                                                </button>
                                            </div>

                                        </form>
                                    </div>
                                </div>





                            <p class="lesson-list-subtitle">

                            <h3 class="heading" v-if="lobby.booked">
                                {{ lobby.price }}  JD <strong class="color-success"> Available</strong>
                            </h3>
                            <h3 class="heading" v-else>
                                {{ date }} <strong class="color-success">Available</strong>
                            </h3>


                            <p class="  is-bold  " style="color: rgb(187, 130, 78);">

                                {{ lobby.name }} {{ date }}
                                <span class="is-hidden-tablet-only">
                                    <span class="is-hidden-mobile" style="position: relative; top: 2px;">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" class="icon is-muted is-16x16">
                                        <path d="M8 8h3v2H7c-.55 0-1-.45-1-1V4h2v4zM7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7z">

                                </path></svg></span><strong> From : {{ lobby.from +'    To :   '+ lobby.to }}</strong></span></p>

                    </div>

                        <span v-for="n in lobby.rating"  class="ais-star-rating--star"></span>


                    </li>



                </ul>
           </div>

      </div>

</template>

<script>
module.exports = {

        props: ['data','loading','filterBy','action','csrf'],

}
</script>