
<div class="section">

    <div class="container">

        <div class="columns">

            <div class="column is-4 has-text-centered-mobile">

                <a href="{{$detail->img}}" data-lity="">
                    <img src="{{asset($detail->img)}}" alt="I {Heart} Active Record Shirt" class="b-1"></a>




            </div>
            <div class="column is-8 pl-2 content">

                <p>
                    @if( ! empty($detail->rating))
                    @for($i = 1 ; $i < $detail->rating ; $i++)
                    <span  class="ais-star-rating--star"></span>
                    @endfor
                    @endif

                </p>
                <p><strong>{{$detail->name}}</strong></p>
                <a href="/lobby/schedule/{{ $detail->id }}" class="button is-default is-primary w-100 mb-1">
                    Check Scheduale
                </a>

                <blockquote><p>{{$detail->description}}</p></blockquote>

                <p>{{$detail->address}}
                    <a href="/lobby">Location</a>, {{$detail->phone}}</p>

                <p></p>

                <article class="message is-info">
                    <div class="message-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                    </div>
                </article>

            </div>

        </div>


    </div>

</div>



<div class="section">


    <div class="container">

        <div class="columns">

            <div class="columns columns  is-multiline">

@for ($i = 1; $i <= 10; $i++)

    <div class="column is-2-tablet has-text-centered  wow fadeInLeftBig" style="visibility: visible; animation-name: fadeInLeftBig;">
        <article class="media">

            <figure class="image is-256x256">
                <a href="" class="showImg">
                    <img src="{{asset('img/lobby/lobbies/'.$i.'.jpg')}}" class="img">
                </a>
            </figure>

        </article>
    </div>

@endfor
            </div></div></div></div>



<div class="modal" id="model">
    <div class="modal-background"></div>
    <div class="modal-content">
        <p class="image is-4by3">
            <img src="" alt="">
        </p>
    </div>
    <button class="modal-close is-large" aria-label="close" ></button>
</div>




