<section class="skills is-greydient bb-0">
    <div class="container">
        <div class="columns is-mobile is-multiline">

            @if(! empty($categories))
                @foreach($categories as $category)

            <div data-wow-delay=".5s"  class="column is-2-tablet has-text-centered is-offset-1-tablet wow fadeInLeftBig" style="visibility: visible; animation-name: fadeInLeftBig;">
                <a href="/{{$category->url}}">
                    <img src="/img/{{$category->path}}" width="145" height="145" alt="Hotels" class="mb-1">
                </a>
                <h4 class="title skill-heading in-caps">
                    <a href="/{{$category->url}}">{{$category->name_e}}</a>
                </h4>
                <span class="h-divider"></span>
                <ul>
                    <li><strong class="color-success">15</strong>
                        <span class="color-text-lighter">near by</span></li>
                    <li><strong class="color-primary">710</strong>
                        <span class="color-text-lighter">all</span>
                    </li>
                </ul>
            </div>


                @endforeach
            @endif

        </div></div></section>