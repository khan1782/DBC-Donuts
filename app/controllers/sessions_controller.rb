#for creating new session on login form
post '/sessions' do
  user = User.authenticate(params[:user])
  if user
    session[:user_id] = user.id
    status 200
    {name: user.first_name, id:user.id}.to_json
  else
    status 420
  end
end




delete '/sessions' do
  session[:user_id] = nil
end