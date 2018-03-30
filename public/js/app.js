const app = angular.module('RecipesApp', []);

app.controller('MainController', ['$http', function($http){
  this.recipes = [];
  this.indexOfEditFormToShow = null;

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
      this.createForm = {};
      this.recipes.push(response.data);
      // this.getRecipes();
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

  this.deleteRecipe = (recipe)=>{
    $http({
      method: 'DELETE',
      url: '/recipes/' + recipe._id
    }).then((response)=>{
      this.getRecipes();
    });
  };

  this.editRecipe = (recipe)=>{
    $http({
      method: 'PUT',
      url: '/recipes/' + recipe._id,
      data: {
        title: this.updatedTitle,
        source: this.updatedSource,
        url: this.updatedURL
      }
    }).then((response)=>{
      this.indexOfEditFormToShow = null;
      this.getRecipes();
    });
  };

  this.getRecipes();

}]);
