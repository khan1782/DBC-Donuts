#login form
get '/sessions/new' do
  if request.xhr?
  	erb :'partials/_loginform', layout: false
  else
  	#full page with form
  end
end

#for creating new session on login form
post '/sessions' do
  if request.xhr?
    @user = User.authenticate(params[:email], params[:password])
    if @user
      session[:user_id] = @user.id
      @user.id
    else
      @error = "Username or password doesn't match existing account information"
      erb :'sessions/new'
    end
  end
end




delete '/sessions' do
  session[:user_id] = nil
  redirect '/'
end
