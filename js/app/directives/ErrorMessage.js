(function() {
 angular
  .module('app')
  .directive('errorMessage', errorMessage)

 function errorMessage() {
  return {
    replace: true,
    template: '<div> Oh no, an error occurred!</div>'
  }

 } 
}());
