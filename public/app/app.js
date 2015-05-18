angular.module('MyApp',['appRoutes','mainCrtl','authService','userCrtl','userService','storyCtrl','storyService','reverseDirective'])

.config(function($httpProvider) {
	$httpProvider.interceptors.push('AuthInterceptor');
})