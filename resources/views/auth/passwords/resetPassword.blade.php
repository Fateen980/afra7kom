<div class="section">
    <div class="container">
        <div class="columns">
            <div class="column is-4 is-offset-4 pr-3-tablet">

    @if (session('status'))
        <div class="alert alert-success">
            {{ session('status') }}
        </div>
    @endif


    <form class="form-horizontal" method="POST" action="{{ route('password.email') }}">
            {{ csrf_field() }}

        <h1 class="title is-3 mb-a has-text-centered">
            Reset Your Password
        </h1>
        <div class="inputs-wrap py-3">
            <div class="control{{ $errors->has('email') ? ' has-error' : '' }}">

                <input type="email" id="email" name="email" class="input" placeholder="Email" value="{{ old('email') }}" required>

                @if ($errors->has('email'))
                    <span class="help-block">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                @endif


            </div>
            <div class="control">
                <button type="submit" class="button is-danger is-outlined is-submit">
                    Reset
                </button>
            </div>



        </div>

        <footer class="has-text-right">
            <a href="/login" class="utility-muted-link utility-left">
                Or Sign In!
            </a>
        </footer>
    </form>
            </div>
        </div>
    </div>
</div>