
<div class="container">
<section>



    <div id="app">


    </div>

    <p class="video-details-publish-date in-caps is-bold">
        Hotel Rating
    </p>

    <div class="container">
        <div class="row">
            <h2>Working Star Ratings for Bootstrap 3 <small>Hover and click on a star</small></h2>
        </div>
        <div class="row lead">
            <div id="hearts" class="starrr"></div>
            You gave a rating of <span id="count">0</span> star(s)
        </div>

        <div class="row lead">
            <p>Also you can give a default rating by adding attribute data-rating</p>
            <div id="hearts-existing" class="starrr" data-rating='4'></div>
            You gave a rating of <span id="count-existing">4</span> star(s)
        </div>
    </div>

<div class="columns is-desktop is-vertically-centered-desktop mb-5">
    <div class="video-details column is-6-desktop pr-3-desktop ">
        <div class="wow fadeIn" style="visibility: visible; animation-name: fadeIn;">
            <button class="lesson-complete-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 16" class="icon is-50x50">
                    <path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z" fill="#cacaca"></path></svg> <span>
        {{$detail->nameEng}}
    </span></button></div> <p class="video-details-publish-date in-caps is-bold">
            Published On Mar. 11th 2015
        </p> <h1 class="title is-1">
            {{$detail->nameEng}}
        </h1> <p class="is-bold in-caps mb-2"><span style="margin-right: 7px;">
Episode 5
</span> <span class="color-primary">
Run Time 20:05
</span></p> <div class="video-details-buttons mb-1-mobile">
            <a href="/downloads/eyJpdiI6ImNRUmNuMTN3aWpTSkx6dDFJR3FoSVE9PSIsInZhbHVlIjoiNmM4cGhaeWZzb2lOdndLWHd6ZUcxZz09IiwibWFjIjoiM2U2NjU4YWQyY2E1NzhkYTIzZDQyMGQyMjJhMTc3NWNhNGUwMWRhYjlkZDg5Mjg0ZDc0MDhhMjEwNWY3ZTZlMiJ9" title="Download Video" class="button for-download is-outlined mr-1-tablet mb-1-mobile "><span class="icon-download"></span> <span>Download</span></a>
            <button class="button is-naked p-0"><span data-toggles="is-active" class="button for-like is-outlined is-primary is-toggle "><span class="icon-like"></span> <span>Add to Favorites</span></span></button></div></div>
    <div class="video-description column is-6-desktop content"><p>{{$detail->desc}}</p></div></div>

</section>


</div>
