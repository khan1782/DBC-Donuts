#for creating new session on login form
post '/sessions' do
  user = User.authenticate(params[:user])
  if user
    status 200
    session[:user_id] = user.id
    {name: user.first_name, id:user.id}.to_json
  else
    status 422
  end
end




delete '/sessions' do
  session[:user_id] = nil
  if request.xhr? == false
  redirect '/'
end
end