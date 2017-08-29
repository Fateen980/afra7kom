

<div class="section">
    <div class="container">

        <div class="columns">

                <div class="column is-6">

                    <div class="tile is-parent">
                        <article class="tile is-child box">
                            <p class="title">{{$detail->nameEng}}</p>
                            <p class="subtitle">{{$detail->nameEng}}</p>
                            <figure class="image is-4by3">
                                <img src="{{asset('img/hotels/'.$detail->path)}}">
                            </figure>

                        </article>
                    </div>

                </div>
                <div class="column is-6">

                    <div class="tile is-parent is-vertical">
                        <article class="tile is-child box">
                            <p class="subtitle">
                            <div class="video-details-buttons mb-1-mobile">

                                <button class="button is-naked p-0">
                                    <a href="/reserve/{{$detail->id}}" title="Download Video">
                                        <span data-toggles="is-active" class="button for-like is-outlined is-primary is-toggle "><span class="icon-like"></span> <span>Reserve Now</span></span></button>
                                </a>
                            </div>


                            </p>
                        </article>
                        <article class="tile is-child box">
                            <p class="title">{{$detail->nameEng}}</p>
                            <p></p>
                            <p class="subtitle">{{$detail->desc}}</p>
                        </article>
                    </div>

                    <article class="message is-primary">
                        <div class="message-body">

                            This stunning resort occupies an equally stunning setting with panoramic views across the bay. Designed in traditional Moorish style with an impressive interior, it exudes elegance inside and out. As you relax by one of five swimming pools soak up the luxurious ambience, before wandering down to the golden beach . The first class service is matched by an impressive choice of facilities, including a selection of fine restaurants, activities and well-appointed rooms.
                        </div>
                    </article>

                </div>
            </div>

        </div>


    </div>


<div class="section">

    <div class="container">

        <div class="columns">

            <div class="column">

                <div id="map"></div>


            </div>


        </div>


    </div>


</div>



    <div class="section is-normal">
        <div class="container">
            <div class="timeline">


                <div class="columns timeline-section">


                    <div class="timeline-date column is-3">
                        <p class="body is-muted is-bold in-caps">Location</p>
                    </div>
                    <div class="timeline-contents column is-9">

                        <div class="timeline-contents-item mb-4">
                            <article class="message is-info">
                                <div class="message-body">

                                    <article class="tile is-child notification is-warning">
                                        <p class="title">Location</p>
                                    </article>


                                    Positioned on its own private beach with the Far - Garden coral reef directly in front of the shore.  A free shuttle service operates to Naama Bay, 6 km away.
                                </div>
                            </article>

                        </div></div></div>

                    <div class="columns timeline-section">
                        <div class="timeline-date column is-3">
                            <p class="body is-muted is-bold in-caps">Facilities</p></div>
                        <div class="timeline-contents column is-9">
                            <div class="timeline-contents-item mb-4">

                                    <ol>

                                    <li>5 outdoor swimming pools & separate children’s pool</li>
                                    <li>Private beach</li>
                                    <li>Sun loungers and parasols</li>
                                    <li>Beach towels & beach bag in the room upon arrival</li>
                                    <li>2 buffet restaurants</li>
                                    <li>4 á la carte restaurants including beach restaurant</li>
                                    <li>Snack- and beachbars</li>
                                    <li>24 hour reception with money exchange facilities</li>
                                    <li>Guest Relation Desk</li>
                                    <li>Fitness, Tennis, Squash, table tennis</li>

                                    </ol>




                                </div>


                            </div></div>


                <div class="columns timeline-section">
                    <div class="timeline-date column is-3">
                        <p class="body is-muted is-bold in-caps">Food & Beverage</p></div>
                    <div class="timeline-contents column is-9">
                        <div class="timeline-contents-item mb-4">

                            All-inclusive
                            Breakfast, lunch and dinner buffet
                            Coffee & tea time with pancakes, sweets & ice Cream

                            Local alcoholic and non-alcoholic drinks are available from 10 am – 12 midnight.
                            No alcoholics will be served to under 18's. Smart casual dress for dinner is requested.
                            You will receive more detailed information about our all-inclusive program upon arrival.

                           </div></div></div></div>


            <div class="modal is-small">
                <div class="modal-background"></div>
                <div class="modal-card">
                    <header class="modal-card-head is-primary"><h4 class="modal-card-title"><div>
                                Edit Your Profile
                            </div></h4>
                        <button class="delete"></button></header>


                </div>


            </div>
        </div>
    </div>





