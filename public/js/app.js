const app = angular.module('RecipesApp', []);

app.controller('MainController', ['$http', function($http){
  this.recipes = [];

  this.createRecipe = ()=>{
    $http({
      method: 'POST',
      url: '/recipes',
      data: {
        title: this.title,
        source: this.source,
        url: this.url
      }
    }).then((response)=>{
      console.log(response);
    }, (error)=>{
      console.log(error);
    });
  };

  this.getRecipes = ()=>{
    $http({
      method: 'GET',
      url: '/recipes'
    }).then((response)=>{
      this.recipes = response.data;
    }, (error)=>{
      console.log(error);
    });
  };

  this.getRecipes();

}]);
