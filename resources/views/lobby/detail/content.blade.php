
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
                <Rating :items.type="5" ></Rating>

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

            <div class="column">

                <div class="centered-heading">
                    <h3 class="heading">
                        Lobby <strong class="color-success">Schedule</strong> Dates
                    </h3>
                </div>

            </div>

        </div>

    </div>

</div>


<schedule id="{{$detail->id}}"></schedule>




