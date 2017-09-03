
<div class="section">
    <div class="container">
            <div class="columns is-multiline is-justified-space-between">


            @if(! empty($categories))
                @foreach($categories as $category)
<div class="card column w-100-mobile is-4">
        <div class="card-content">
            <div class="media">
                    <div class="media-content">
<p class="title is-4"><a href="/{{$category->url}}">{{$category->name_e}}</a></p>
<p class="subtitle is-6">Comming Soon !</p></div></div>
<div class="content">

    <div class=" is-12  ">
        <a href="/{{$category->url}}">
            <img src="/img/{{$category->path}}" alt="I {Heart} Active Record Shirt" class="b-1"></a>
</div>



{{$category->description}}
</div></div></div>




@endforeach
@endif

</div></div></div>