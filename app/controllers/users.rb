#form for creating new user
get '/users/new' do
  if request.xhr?
  	erb :'partials/_registrationform', layout: false
  else
  	#will include erb for independent registration form
  	"NO AJAX REQUEST MADE"
  end
end

#post for creating new user
post '/users' do
  new_user = User.new(params[:user])
  # new_user.save
  if request.xhr?

  end

end



get '/users/:id' do
#user's profile page.
  @user = User.find_by_id(params[:id])
  erb :'users/show'
end
