#form for creating new user, accessed via register button click
get '/users/new' do
  if request.xhr?
  	erb :'partials/_registrationform', layout: false
  else
  	#will include erb for independent registration form
  	"NO AJAX REQUEST MADE"
  end
end

#post for creating new user, made through registration button submission
post '/users' do
  @new_user = User.new(params[:user])
  if @new_user.save
    session[:user_id] = @new_user.id
    if request.xhr?
      erb :'partials/_loggedinbuttons', layout: false
    else
      redirect '/'
    end
  end
end



get '/users/:id' do
#user's profile page.
  @user = User.find_by_id(params[:id])
  erb :'users/show'
end
