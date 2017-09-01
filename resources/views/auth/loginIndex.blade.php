<div class="section">
    <div class="container">
        <div class="columns">
            <div class="column is-4 is-offset-4 pr-3-tablet">

                <div class="card">
                    <div class="card-content">
                        <p class="title">
                            <header class="modal-card-head is-primary">

                                <h4 class="modal-card-title">
                                    Welcome Back !
                                </h4> </header>
                        <form class="form-horizontal" role="form" method="POST" action="{{ url('/login') }}">
                            {{ csrf_field() }}

                            <div class="control{{ $errors->has('email') ? ' has-error' : '' }}">
                                <input id="email" placeholder="E-Mail Address" type="email" class="input" name="email" value="{{ old('email') }}">

                                @if ($errors->has('email'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                            </div>


                            <div class="control{{ $errors->has('password') ? ' has-error' : '' }}">
                                <input id="password" placeholder="Password" type="password" class="input" name="password">

                                @if ($errors->has('password'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                            </div>


                            <div class="form-group">
                                <div class="col-md-12">
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox" name="remember"> Remember Me
                                        </label>
                                    </div>
                                </div>
                            </div>


                            <div class="control">
                                <button type="submit" class="button is-primary is-submit">Sign In Now!</button>

                            </div>

                        </form>


                    </div>
                    <footer class="card-footer">
                        <p class="card-footer-item">
      <span>
        View on          <a href="/join" >
                                    Sign Up!
                                </a>
      </span>
                        </p>
                        <p class="card-footer-item">
      <span>
        Forgot <a href="{{ url('/password/reset') }}" >
                                    Password
                                </a>
      </span>
                        </p>
                    </footer>
                </div>

            </div>

        </div>
    </div>
</div>



