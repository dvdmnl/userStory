angular.module('userCrtl',['userService'])

.controller('UserController', function(user){

	var vm = this;
	vm.processing = true;

	User.all()
		.success(function(data){
			vm.users = data;
		})
})

.controller('UserCreateController', function(User, $location, $window){
	var vm = this;

	vm.signupUser = function(){
		vm.message = '';
		User.create(vm.userData)
			.then(function(response){
				vm.userData = {};
				vm.response = response.data.message;

				$window.localStorage.setItem('token', response.data.token);
				$location.path('/');
			})
	}
})