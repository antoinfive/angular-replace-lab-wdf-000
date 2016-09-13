(function() {
 angular
  .module('app')
  .directive('successMessage', successMessage)

  function successMessage() {
    return {
      replace: true,
      template: '<div> Woohoo! Success!</div>'

    }

  } 
}());
