<td class="col-md-2">
    <form action="/checkout" method="POST">
        {!! csrf_field() !!}
        <script
                src="https://checkout.stripe.com/checkout.js" class="stripe-button"
                data-key="pk_test_7l4QNUe7967OIu6NWqo3zIXm"
                data-amount="@{{$total*100}}"
                data-name="Wedding Lobby"
                data-description="Products"
                data-image="/img/logo.png"
                data-locale="auto">
        </script>
    </form>
</td>