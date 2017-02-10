#for creating new session on login form
post '/sessions' do
  @user = User.authenticate(params[:user])
  if @user
    session[:user_id] = @user.id
    status 200
    # 
  profile = erb :'/users/show', layout: false
    # 
    {name: @user.first_name, id:@user.id, profile: profile}.to_json
  else
    status 420
  end
end




delete '/sessions' do
  session[:user_id] = nil
end