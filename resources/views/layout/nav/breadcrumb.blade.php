
<div class="bar section is-success">
    <div class="container">
        <nav class="level">
            <ul class="level-left breadcrumb">

                @foreach($routes as $route)
                <li class="level-item">

                    @if ( @isset( $route['id'] ) )

                            <a href="{{ action( $route['url'] , $route['id'] ) }}">

                    @else

                            <a href="{{ action($route['url']) }}">


                   @endif



                        {{ $route['title'] }}
                    </a>
                </li>
                @endforeach
                <li>
                        {{ $name }}
                </li>

            </ul>
        </nav>
    </div>
</div>
