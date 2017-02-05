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
    @new_user = User.authenticate(params[:user])
    if @new_user
      session[:user_id] = @new_user.id
      erb :'partials/_loggedinbuttons', layout: false
    else
      "NOT AUTHORIZED"
      # @error = "Username or password doesn't match existing account information"
      # erb :'sessions/new'
    end
  end
end




delete '/sessions' do
  session[:user_id] = nil
  if request.xhr? == false
  redirect '/'
end
end