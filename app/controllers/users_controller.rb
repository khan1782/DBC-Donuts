
#form for creating new user, accessed via register button click
get '/users/new' do

end

#post for creating new user, made through registration button submission
post '/users' do
# {"user"=>{"first_name"=>"1", "last_name"=>"1", "email"=>"1@asd", "password"=>"1"}, "confirm_password"=>"1"}
  new_user = User.new(params[:user])
    if new_user.save
      session[:user_id] = new_user.id
      status 200
      {name: new_user.first_name, id:new_user.id}.to_json
    else
      status 420
    end
end



get '/users/:id' do
#user's profile page.
  @user = User.find_by_id(params[:id])
  erb :'users/show'
end